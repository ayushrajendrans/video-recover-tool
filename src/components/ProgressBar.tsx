import React from 'react';
import clsx from 'clsx';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
    progress: number; // 0 to 100
    label?: string;
    showPercentage?: boolean;
    status?: 'active' | 'success' | 'error' | 'warning';
    className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    progress,
    label,
    showPercentage = true,
    status = 'active',
    className,
}) => {
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <div className={clsx(styles.container, className)}>
            {(label || showPercentage) && (
                <div className={styles.header}>
                    {label && <span className={styles.label}>{label}</span>}
                    {showPercentage && <span className={styles.percentage}>{Math.round(clampedProgress)}%</span>}
                </div>
            )}
            <div className={styles.track}>
                <div
                    className={clsx(styles.bar, styles[status])}
                    style={{ width: `${clampedProgress}%` }}
                />
            </div>
        </div>
    );
};
