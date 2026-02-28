import '../styles/Testimonials.css'

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'Wedding Videographer',
        avatar: 'SM',
        text: 'Pro Video Repair saved an entire wedding shoot for me. The SD card got corrupted and I thought all footage was lost. This tool recovered every single clip perfectly!',
        rating: 5,
    },
    {
        name: 'James Chen',
        role: 'Content Creator',
        avatar: 'JC',
        text: 'I use this tool weekly — my action camera files often get corrupted when the battery dies mid-recording. Fixes them every time in seconds. Absolute lifesaver.',
        rating: 5,
    },
    {
        name: 'Maria Gonzalez',
        role: 'Film Student',
        avatar: 'MG',
        text: 'Simple, fast, and actually works. I was skeptical at first, but it repaired a 45-minute interview that no other tool could handle. Highly recommend!',
        rating: 5,
    },
]

export default function Testimonials() {
    return (
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <h2 className="section-title">Loved by Creators</h2>
                <p className="section-subtitle">
                    See what videographers, content creators, and filmmakers are saying about Pro Video Repair.
                </p>

                <div className="testimonials__grid">
                    {testimonials.map((t, i) => (
                        <div className="glass-card testimonials__card fade-in" key={i}>
                            <div className="testimonials__stars">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <span key={j} className="testimonials__star">★</span>
                                ))}
                            </div>
                            <p className="testimonials__text">"{t.text}"</p>
                            <div className="testimonials__author">
                                <div className="testimonials__avatar">{t.avatar}</div>
                                <div>
                                    <div className="testimonials__name">{t.name}</div>
                                    <div className="testimonials__role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
