import { app, BrowserWindow, ipcMain, shell } from 'electron'
import path from 'node:path'
import fs from 'node:fs'
import { repairVideo } from './repair-service'

process.env.APP_ROOT = path.join(__dirname, '..')

const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'] || process.env['ELECTRON_RENDERER_URL']
const RENDERER_DIST = path.join(process.env.APP_ROOT, 'renderer')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, '..', 'public')
  : RENDERER_DIST

let win: BrowserWindow | null

function createWindow() {
  win = new BrowserWindow({
    title: 'Pro Video Repair',
    width: 1100,
    height: 750,
    frame: false, // Frameless window
    icon: path.join(process.env.VITE_PUBLIC, 'icon.png'),
    backgroundColor: '#09090b', // Match obsidian background
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, '../preload/preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  // IPC handlers for window control (since system ones are gone)
  ipcMain.on('window-minimize', () => win?.minimize())
  ipcMain.on('window-maximize', () => {
    if (win?.isMaximized()) {
      win.unmaximize()
    } else {
      win?.maximize()
    }
  })
  ipcMain.on('window-close', () => win?.close())

  win.setMenu(null); // Completely remove the system menu

  win.once('ready-to-show', () => {
    win?.show()
  })

  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(() => {
  ipcMain.handle('open-folder', async (_event, filePath: string) => {
    console.log('[Main] Received open-folder request for:', filePath)
    if (!filePath) return { success: false, error: 'No file path provided' }

    try {
      const exists = fs.existsSync(filePath)
      console.log('[Main] File exists check:', exists)

      if (!exists) {
        console.warn('[Main] Cannot open folder, file does not exist:', filePath)
        return { success: false, error: 'File does not exist' }
      }

      const success = shell.showItemInFolder(filePath)
      console.log('[Main] shell.showItemInFolder result:', success)
      return { success }
    } catch (err) {
      console.error('[Main] Error opening folder:', err)
      return { success: false, error: String(err) }
    }
  })

  // Register IPC handlers after Electron is ready
  ipcMain.handle('repair-video', async (_event, { referencePath, corruptedPath }: { referencePath: string; corruptedPath: string }) => {
    try {
      const resultPath = await repairVideo(
        referencePath,
        corruptedPath,
        (log: string, progress: number) => {
          win?.webContents.send('repair-progress', { log, progress })
        }
      )
      return { success: true, path: resultPath }
    } catch (error: unknown) {
      const err = error as Error
      console.error('Repair failed:', err)
      return { success: false, error: err.message }
    }
  })

  createWindow()
})
