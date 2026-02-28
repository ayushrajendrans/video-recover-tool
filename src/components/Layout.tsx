import React from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const handleMinimize = () => window.ipcRenderer.send('window-minimize');
    const handleMaximize = () => window.ipcRenderer.send('window-maximize');
    const handleClose = () => window.ipcRenderer.send('window-close');

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logoCont}>
                    <div className={styles.logo}>
                        <svg
                            className={styles.logoIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M23 7l-7 5 7 5V7z" />
                            <rect x="1" y="5" width="15" height="14" rx="3" ry="3" />
                            <circle cx="8.5" cy="12" r="2.5" />
                        </svg>
                        <span className={styles.logoText}>Pro Video Repair</span>
                    </div>
                </div>

                <div className={styles.windowControls}>
                    <button onClick={handleMinimize} className={styles.controlBtn} title="Minimize">
                        <svg width="12" height="12" viewBox="0 0 12 12"><rect x="2" y="5.5" width="8" height="1" fill="currentColor" /></svg>
                    </button>
                    <button onClick={handleMaximize} className={styles.controlBtn} title="Maximize">
                        <svg width="12" height="12" viewBox="0 0 12 12"><rect x="2.5" y="2.5" width="7" height="7" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
                    </button>
                    <button onClick={handleClose} className={`${styles.controlBtn} ${styles.closeBtn}`} title="Close">
                        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2.5 2.5l7 7m0-7l-7 7" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
                    </button>
                </div>
            </header>

            <main className={styles.main}>{children}</main>

            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />
            <div className={`${styles.blob} ${styles.blob3}`} />
        </div>
    );
};
