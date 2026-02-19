import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const isDev = process.env.NODE_ENV === 'development';

// Path to untrunc binary
const getUntruncPath = () => {
    const basePath = isDev
        ? path.join(process.cwd(), 'resources')
        : process.resourcesPath;

    return path.join(basePath, 'untrunc.exe');
};

export const repairVideo = (
    referencePath: string,
    corruptedPath: string,
    onProgress: (log: string, progress: number) => void
): Promise<string> => {
    return new Promise((resolve, reject) => {
        const untruncPath = getUntruncPath();
        const workingDir = path.dirname(corruptedPath);

        // Check if binary exists
        if (!fs.existsSync(untruncPath)) {
            return reject(new Error(`Untrunc binary not found at ${untruncPath}`));
        }

        onProgress(`Starting repair with untrunc...`, 0);

        // Match user's CLI approach: no -s, but keep -v/-w for our diagnostics
        // User command: untrunc.exe brokenvideo.mov reff.mov
        // Note: Help says <ok.mp4> [corrupt.mp4], so we'll try to follow that
        // but log exactly what we do.
        const args = ['-n', '-v', '-w', referencePath, corruptedPath];

        console.log(`[Main] Executing untrunc: "${untruncPath}" ${args.join(' ')}`);
        onProgress(`Running command: untrunc ${args.join(' ')}`, -1);

        const child = spawn(untruncPath, args, {
            cwd: workingDir,
        });

        let outputLog = '';

        child.stdout.on('data', (data) => {
            const text = data.toString();
            outputLog += text;
            onProgress(text, -1); // -1 indicates indeterminate progress or log only
        });

        child.stderr.on('data', (data) => {
            const text = data.toString();
            outputLog += text;
            onProgress(text, -1);
        });

        child.on('close', (code) => {
            if (code === 0) {
                // Success
                // Untrunc naming patterns can vary:
                // 1. filename_fixed.mp4
                // 2. filename.mp4_fixed.mp4
                // 3. filename.mp4_fixed-s1.mp4 (seen in logs)

                const ext = path.extname(corruptedPath);
                const base = path.basename(corruptedPath, ext);

                // Try deterministic names first
                const candidates = [
                    path.join(workingDir, `${base}_fixed${ext}`),
                    path.join(workingDir, `${path.basename(corruptedPath)}_fixed${ext}`),
                    path.join(workingDir, `${path.basename(corruptedPath)}_fixed-s1${ext}`)
                ];

                let actualOutput = candidates.find(p => fs.existsSync(p));

                if (!actualOutput) {
                    // Fallback: Scan directory for most recent file matching *fixed*
                    try {
                        const files = fs.readdirSync(workingDir);
                        const potentialFiles = files
                            .filter(f => f.includes('fixed') && f.toLowerCase().endsWith(ext.toLowerCase()))
                            .map(f => ({
                                name: f,
                                path: path.join(workingDir, f),
                                mtime: fs.statSync(path.join(workingDir, f)).mtime.getTime()
                            }))
                            .sort((a, b) => b.mtime - a.mtime);

                        if (potentialFiles.length > 0) {
                            actualOutput = potentialFiles[0].path;
                        }
                    } catch (err) {
                        console.error('Error scanning for output file:', err);
                    }
                }

                if (actualOutput && fs.existsSync(actualOutput)) {
                    onProgress('Repair complete!', 100);
                    resolve(actualOutput);
                } else {
                    reject(new Error(`Repair finished but could not find output file in ${workingDir}`));
                }
            } else {
                reject(new Error(`Untrunc failed with code ${code}\nLogs:\n${outputLog}`));
            }
        });

        child.on('error', (err) => {
            reject(err);
        });
    });
};
