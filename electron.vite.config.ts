import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
    main: {
        plugins: [externalizeDepsPlugin()],
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'main.cjs',
                },
                input: path.resolve(__dirname, 'electron/main.ts'),
            },
        },
    },
    preload: {
        plugins: [externalizeDepsPlugin()],
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'preload.cjs',
                },
                input: path.resolve(__dirname, 'electron/preload.ts'),
            },
        },
    },
    renderer: {
        root: '.',
        build: {
            rollupOptions: {
                input: path.resolve(__dirname, 'index.html'),
            },
        },
        resolve: {
            alias: {
                '@renderer': path.resolve('src'),
            },
        },
        plugins: [react()],
    },
})
