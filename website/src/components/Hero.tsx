import '../styles/Hero.css'

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container hero__inner">
                <div className="hero__content">
                    <div className="hero__badge">
                        <span className="hero__badge-dot" />
                        Version 1.0 — Now Available
                    </div>

                    <h1 className="hero__title">
                        Repair Corrupted Videos
                        <span className="hero__title-accent"> In One Click</span>
                    </h1>

                    <p className="hero__subtitle">
                        Effortlessly fix broken, damaged, and unplayable video files — from camera footage to screen recordings.
                        Our advanced repair engine recovers your precious content — no technical skills required.
                    </p>

                    <div className="hero__actions">
                        <a href="#download" className="btn btn-primary hero__btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download for Free
                        </a>
                        <a href="#features" className="btn btn-secondary hero__btn">
                            Learn More
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </a>
                    </div>

                    <div className="hero__stats">
                        <div className="hero__stat">
                            <span className="hero__stat-number">50K+</span>
                            <span className="hero__stat-label">Videos Repaired</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-number">98%</span>
                            <span className="hero__stat-label">Success Rate</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-number">4.9★</span>
                            <span className="hero__stat-label">User Rating</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__visual-card">
                        <div className="hero__visual-header">
                            <div className="hero__visual-dots">
                                <span /><span /><span />
                            </div>
                            <span className="hero__visual-title">Pro Video Repair</span>
                        </div>
                        <div className="hero__visual-body">
                            <div className="hero__visual-file">
                                <div className="hero__visual-file-icon">🎬</div>
                                <div className="hero__visual-file-info">
                                    <span className="hero__visual-file-name">vacation_clip.mp4</span>
                                    <span className="hero__visual-file-status hero__visual-file-status--error">Corrupted</span>
                                </div>
                            </div>
                            <div className="hero__visual-file hero__visual-file--ref">
                                <div className="hero__visual-file-icon">🎥</div>
                                <div className="hero__visual-file-info">
                                    <span className="hero__visual-file-name">reference.mp4</span>
                                    <span className="hero__visual-file-status hero__visual-file-status--ref">Reference</span>
                                </div>
                            </div>
                            <div className="hero__visual-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <polyline points="19 12 12 19 5 12" />
                                </svg>
                            </div>
                            <div className="hero__visual-file">
                                <div className="hero__visual-file-icon">🎬</div>
                                <div className="hero__visual-file-info">
                                    <span className="hero__visual-file-name">vacation_clip.mp4</span>
                                    <span className="hero__visual-file-status hero__visual-file-status--success">Repaired ✓</span>
                                </div>
                            </div>
                            <div className="hero__visual-progress">
                                <div className="hero__visual-progress-bar" />
                            </div>
                        </div>
                    </div>

                    {/* Floating orbs */}
                    <div className="hero__orb hero__orb--1" />
                    <div className="hero__orb hero__orb--2" />
                    <div className="hero__orb hero__orb--3" />
                </div>
            </div>
        </section>
    )
}
