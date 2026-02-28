import '../styles/Features.css'

const features = [
    {
        icon: '🔧',
        title: 'Easy Video Repair',
        description: 'Simply drag and drop your corrupted video file and let our engine do the rest. No complex settings needed.',
    },
    {
        icon: '👁️',
        title: 'Preview Before Save',
        description: 'Preview your repaired video before saving to ensure the quality meets your expectations.',
    },
    {
        icon: '📦',
        title: 'Batch Processing',
        description: 'Repair multiple video files at once. Perfect for recovering an entire folder of damaged footage.',
    },
    {
        icon: '⚡',
        title: 'Lightning Fast',
        description: 'Our optimized repair engine processes videos in seconds, not minutes. Get your files back quickly.',
    },
    {
        icon: '🎥',
        title: 'All Formats Supported',
        description: 'MP4, MOV, AVI, MKV, and more. Camera videos, screen recordings, dashcams — we handle them all.',
    },
    {
        icon: '🔒',
        title: '100% Private & Secure',
        description: 'All processing happens locally on your machine. Your videos never leave your computer.',
    },
]

export default function Features() {
    return (
        <section className="section features" id="features">
            <div className="container">
                <h2 className="section-title">Powerful Features</h2>
                <p className="section-subtitle">
                    Repair corrupted camera footage, screen recordings, and more — all in one simple tool.
                </p>

                <div className="features__grid">
                    {features.map((feature, i) => (
                        <div className="glass-card features__card fade-in" key={i}>
                            <div className="features__icon">{feature.icon}</div>
                            <h3 className="features__card-title">{feature.title}</h3>
                            <p className="features__card-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
