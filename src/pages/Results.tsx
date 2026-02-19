import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useRepair } from '../context/RepairContext';
import styles from './Results.module.css';

export const Results: React.FC = () => {
    const navigate = useNavigate();
    const { repairedFilePath, resetRepair } = useRepair();

    const handleOpenFolder = async () => {
        console.log('[Results] handleOpenFolder clicked. path:', repairedFilePath);
        if (repairedFilePath) {
            try {
                const result = await window.ipcRenderer.invoke('open-folder', repairedFilePath);
                console.log('[Results] open-folder response:', result);
            } catch (err) {
                console.error('[Results] Failed to open folder:', err);
            }
        } else {
            console.warn('[Results] No repairedFilePath found in context');
        }
    };

    const handleReset = () => {
        resetRepair();
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <div className={styles.successIconWrapper}>
                <span>✓</span>
            </div>

            <h2 className={styles.title}>Repair Successful!</h2>
            <p className={styles.subtitle}>Your video has been restored with pro-grade precision.</p>

            <div className={styles.previewCard}>
                <div className={styles.previewPlaceholder}>
                    <span className={styles.previewIcon}>🎬</span>
                    <span>Ready to View</span>
                    <div className={styles.filePath}>{repairedFilePath}</div>
                </div>
            </div>

            <div className={styles.actions}>
                <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleOpenFolder}
                    className={styles.actionButton}
                >
                    Show in Folder
                </Button>
                <Button
                    size="lg"
                    onClick={handleReset}
                    className={styles.actionButton}
                >
                    Repair Another File
                </Button>
            </div>
        </div>
    );
};
