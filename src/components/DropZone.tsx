import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './DropZone.module.css';

interface DropZoneProps {
    onFileSelect: (file: File) => void;
    accept?: string;
    label?: string;
    subLabel?: string;
    icon?: React.ReactNode;
    className?: string;
    selectedFile?: File | null;
    error?: string;
}

export const DropZone: React.FC<DropZoneProps> = ({
    onFileSelect,
    accept,
    label = 'Drag & drop your file here',
    subLabel = 'or click to browse',
    icon,
    className,
    selectedFile,
    error,
}) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            // Basic validation by mimetype/extension if needed, but for now just pass it
            onFileSelect(file);
        }
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onFileSelect(e.target.files[0]);
        }
    };

    return (
        <div
            className={clsx(
                styles.container,
                isDragOver && styles.dragOver,
                selectedFile && styles.hasFile,
                error && styles.error,
                className
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
        >
            <input
                type="file"
                ref={inputRef}
                className={styles.input}
                accept={accept}
                onChange={handleInputChange}
            />

            <div className={styles.content}>
                {icon && <div className={styles.icon}>{icon}</div>}

                {selectedFile ? (
                    <div className={styles.fileInfo}>
                        <span className={styles.fileName}>{selectedFile.name}</span>
                        <span className={styles.fileSize}>
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                    </div>
                ) : (
                    <>
                        <p className={styles.label}>{label}</p>
                        <p className={styles.subLabel}>{subLabel}</p>
                    </>
                )}
            </div>

            {/* Optional: Add a subtle glow or effect */}
            <div className={styles.glow} />
        </div>
    );
};
