import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const Welcome: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="animate-fade-in" style={{ padding: '2rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Recover Video
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px', marginBottom: '3rem', fontSize: 'var(--font-size-lg)', lineHeight: '1.6' }}>
                Professional-grade restoration for MP4, MOV, and M4V files.
                Reconstruct corrupted data with precision.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Button size="lg" onClick={() => navigate('/upload')}>
                    Start Repair
                </Button>
            </div>
        </div>
    );
};
