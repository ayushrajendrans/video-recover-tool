import '../styles/Download.css'

const platforms = [
    {
        os: 'Windows',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
        ),
        version: 'v1.0.0',
        size: '85 MB',
        requirements: 'Windows 10 / 11',
        downloadUrl: '/Pro-Video-Repair-Setup.exe',
        primary: true,
    },
    {
        os: 'macOS',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
        ),
        version: '—',
        size: '—',
        requirements: 'macOS 12+',
        downloadUrl: '#',
        primary: false,
        comingSoon: true,
    },
]

export default function Download() {
    return (
        <section className="section download" id="download">
            <div className="container">
                <h2 className="section-title">Download Now</h2>
                <p className="section-subtitle">
                    Get Pro Video Repair for free. Available for Windows. macOS coming soon.
                </p>

                <div className="download__grid">
                    {platforms.map((platform) => (
                        <div
                            className={`glass-card download__card fade-in ${platform.primary ? 'download__card--primary' : ''}`}
                            key={platform.os}
                        >
                            {platform.primary && <div className="download__card-badge">Recommended</div>}
                            {platform.comingSoon && <div className="download__card-badge download__card-badge--soon">Coming Soon</div>}
                            <div className="download__card-icon">{platform.icon}</div>
                            <h3 className="download__card-os">{platform.os}</h3>

                            <div className="download__card-details">
                                <div className="download__card-detail">
                                    <span className="download__card-detail-label">Version</span>
                                    <span className="download__card-detail-value">{platform.version}</span>
                                </div>
                                <div className="download__card-detail">
                                    <span className="download__card-detail-label">Size</span>
                                    <span className="download__card-detail-value">{platform.size}</span>
                                </div>
                                <div className="download__card-detail">
                                    <span className="download__card-detail-label">Requires</span>
                                    <span className="download__card-detail-value">{platform.requirements}</span>
                                </div>
                            </div>

                            {platform.comingSoon ? (
                                <span className="btn btn-secondary download__card-btn download__card-btn--disabled">
                                    Coming Soon
                                </span>
                            ) : (
                                <a
                                    href={platform.downloadUrl}
                                    download
                                    className={`btn download__card-btn ${platform.primary ? 'btn-primary' : 'btn-secondary'}`}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    Download for {platform.os}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <p className="download__note">
                    Free for personal use • No account required • No ads
                </p>
            </div>
        </section>
    )
}
