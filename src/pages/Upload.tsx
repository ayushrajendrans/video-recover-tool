import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DropZone } from '../components/DropZone';
import { Button } from '../components/Button';
import { useRepair } from '../context/RepairContext';
import styles from './Upload.module.css';

export const Upload: React.FC = () => {
    const navigate = useNavigate();
    const { corruptedFile, referenceFile, setCorruptedFile, setReferenceFile } = useRepair();

    const handleNext = () => {
        if (corruptedFile && referenceFile) {
            navigate('/repair');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Select Files</h2>
            <p className={styles.subtitle}>
                We need the corrupted file and a working reference file from the same camera/settings.
            </p>

            <div className={styles.grid}>
                <div className={styles.uploadSection}>
                    <h3 className={styles.sectionTitle}>1. Corrupted File</h3>
                    <DropZone
                        onFileSelect={setCorruptedFile}
                        selectedFile={corruptedFile}
                        accept="video/*"
                        label="Drop corrupted video"
                        className={styles.dropZone}
                    />
                </div>

                <div className={styles.uploadSection}>
                    <h3 className={styles.sectionTitle}>2. Reference File</h3>
                    <DropZone
                        onFileSelect={setReferenceFile}
                        selectedFile={referenceFile}
                        accept="video/*"
                        label="Drop working reference"
                        subLabel="Must be same format/camera"
                        className={styles.dropZone}
                    />
                </div>
            </div>

            <div className={styles.actions}>
                <Button variant="ghost" onClick={() => navigate('/')}>
                    Back
                </Button>
                <Button
                    onClick={handleNext}
                    disabled={!corruptedFile || !referenceFile}
                    size="lg"
                >
                    Start Repair
                </Button>
            </div>
        </div>
    );
};
