import '../styles/HowItWorks.css'

const steps = [
    {
        number: '01',
        title: 'Add Corrupted Video',
        description: 'Drag and drop the corrupted or unplayable video file into the app.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Add Reference File',
        description: 'Provide a working video shot from the same camera or device. This helps the engine understand the correct file structure.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M9 15l2 2 4-4" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Click Repair',
        description: 'Hit the repair button — the engine uses the reference file\'s structure to rebuild and fix the corrupted video.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Save & Enjoy',
        description: 'Preview your repaired video and save it. Your footage is recovered!',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
]

export default function HowItWorks() {
    return (
        <section className="section how-it-works" id="how-it-works">
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">
                    Repair corrupted videos using a healthy reference file from the same camera or device.
                </p>

                {/* Visual Diagram */}
                <div className="how-it-works__diagram fade-in">
                    <div className="how-it-works__diagram-card how-it-works__diagram-card--bad">
                        <div className="how-it-works__diagram-file-icon">🎬</div>
                        <div className="how-it-works__diagram-file-label">Corrupted Video</div>
                        <div className="how-it-works__diagram-file-tag how-it-works__diagram-file-tag--red">✕ Unplayable</div>
                    </div>

                    <div className="how-it-works__diagram-plus">+</div>

                    <div className="how-it-works__diagram-card how-it-works__diagram-card--ref">
                        <div className="how-it-works__diagram-file-icon">🎥</div>
                        <div className="how-it-works__diagram-file-label">Reference File</div>
                        <div className="how-it-works__diagram-file-tag how-it-works__diagram-file-tag--blue">Same Camera</div>
                    </div>

                    <div className="how-it-works__diagram-arrow">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>

                    <div className="how-it-works__diagram-card how-it-works__diagram-card--good">
                        <div className="how-it-works__diagram-file-icon">🎬</div>
                        <div className="how-it-works__diagram-file-label">Repaired Video</div>
                        <div className="how-it-works__diagram-file-tag how-it-works__diagram-file-tag--green">✓ Playable</div>
                    </div>
                </div>

                {/* Info callout */}
                <div className="how-it-works__callout fade-in">
                    <div className="how-it-works__callout-icon">💡</div>
                    <div className="how-it-works__callout-text">
                        <strong>Why a reference file?</strong> — The reference video provides the correct container structure (codec, resolution, frame rate) so the repair engine can reconstruct the damaged metadata and recover your footage.
                        <em> Just shoot a short clip with the same camera settings!</em>
                    </div>
                </div>

                {/* Steps */}
                <div className="how-it-works__steps">
                    {steps.map((step, i) => (
                        <div className="how-it-works__step fade-in" key={i}>
                            <div className="how-it-works__step-number">{step.number}</div>
                            <div className="how-it-works__step-icon">{step.icon}</div>
                            <h3 className="how-it-works__step-title">{step.title}</h3>
                            <p className="how-it-works__step-desc">{step.description}</p>
                            {i < steps.length - 1 && <div className="how-it-works__connector" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
