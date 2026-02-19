import React, { createContext, useContext, useState } from 'react';

interface RepairContextType {
    corruptedFile: File | null;
    referenceFile: File | null;
    setCorruptedFile: (file: File | null) => void;
    setReferenceFile: (file: File | null) => void;
    repairProgress: number;
    setRepairProgress: (progress: number) => void;
    repairStatus: 'idle' | 'processing' | 'success' | 'error';
    setRepairStatus: (status: 'idle' | 'processing' | 'success' | 'error') => void;
    repairedFilePath: string | null;
    setRepairedFilePath: (path: string | null) => void;
    resetRepair: () => void;
}

const RepairContext = createContext<RepairContextType | undefined>(undefined);

export const RepairProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [corruptedFile, setCorruptedFile] = useState<File | null>(null);
    const [referenceFile, setReferenceFile] = useState<File | null>(null);
    const [repairProgress, setRepairProgress] = useState(0);
    const [repairStatus, setRepairStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
    const [repairedFilePath, setRepairedFilePath] = useState<string | null>(null);

    const resetRepair = () => {
        setCorruptedFile(null);
        setReferenceFile(null);
        setRepairProgress(0);
        setRepairStatus('idle');
        setRepairedFilePath(null);
    };

    return (
        <RepairContext.Provider
            value={{
                corruptedFile,
                referenceFile,
                setCorruptedFile,
                setReferenceFile,
                repairProgress,
                setRepairProgress,
                repairStatus,
                setRepairStatus,
                repairedFilePath,
                setRepairedFilePath,
                resetRepair,
            }}
        >
            {children}
        </RepairContext.Provider>
    );
};

export const useRepair = () => {
    const context = useContext(RepairContext);
    if (context === undefined) {
        throw new Error('useRepair must be used within a RepairProvider');
    }
    return context;
};
