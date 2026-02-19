import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Repair.module.css';
import { useRepair } from '../context/RepairContext';
import { ProgressBar } from '../components/ProgressBar';
import { Button } from '../components/Button';

export const Repair: React.FC = () => {
    const navigate = useNavigate();
    const {
        corruptedFile,
        referenceFile,
        repairProgress,
        setRepairProgress,
        repairStatus,
        setRepairStatus,
        setRepairedFilePath
    } = useRepair();

    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        if (!corruptedFile || !referenceFile) {
            navigate('/upload');
            return;
        }

        const performRepair = async () => {
            setRepairStatus('processing');
            setLogs(prev => [...prev, 'Initializing core engine...', 'Allocating memory buffers...', 'Building stream map...']);

            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const corruptedPath = (corruptedFile as any).path;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const referencePath = (referenceFile as any).path;

                if (!corruptedPath || !referencePath) {
                    throw new Error('File paths not found. Are you running in Electron?');
                }

                setLogs(prev => [...prev, `📁 SOURCE: ${corruptedPath}`, `✅ TEMPLATE: ${referencePath}`]);

                const result = await window.ipcRenderer.invoke('repair-video', {
                    referencePath,
                    corruptedPath,
                });

                if (result.success) {
                    setRepairStatus('success');
                    setRepairedFilePath(result.path);
                    setLogs(prev => [...prev, '✨ RECONSTRUCTION COMPLETE!', `💾 SAVED TO: ${result.path}`]);
                    setTimeout(() => navigate('/results'), 2000);
                } else {
                    throw new Error(result.error);
                }
            } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
                console.error('Repair error:', error);
                setRepairStatus('error');
                setLogs(prev => [...prev, `❌ FATAL ERROR: ${error.message}`]);
            }
        };

        if (repairStatus === 'idle') {
            performRepair();
        }

        // Listen for progress
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleProgress = (_event: any, { log, progress }: { log: string; progress: number }) => {
            setLogs(prev => {
                // Keep logs reasonable size
                const newLogs = [...prev, log];
                return newLogs.slice(-100);
            });
            if (progress >= 0) {
                setRepairProgress(progress);
            }
        };

        window.ipcRenderer.on('repair-progress', handleProgress);

        return () => {
            window.ipcRenderer.off('repair-progress', handleProgress);
        };
    }, [corruptedFile, referenceFile, repairStatus, navigate, setRepairStatus, setRepairedFilePath, setRepairProgress]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Reconstructing Video</h2>

            <div className={styles.progressWrapper}>
                <ProgressBar
                    progress={repairProgress}
                    status={repairStatus === 'error' ? 'error' : 'active'}
                    label={repairStatus === 'error' ? 'Repair Failed' : 'Scanning Streams...'}
                />
            </div>

            <div className={styles.logContainer}>
                {logs.map((log, i) => (
                    <div key={i} className={styles.logEntry}>{log}</div>
                ))}
            </div>

            {repairStatus === 'error' && (
                <div className={styles.errorState}>
                    <p className={styles.errorText}>Hardware Exception or Invalid Format</p>
                    <Button onClick={() => navigate('/upload')} size="lg">Return to Upload</Button>
                </div>
            )}
        </div>
    );
};
