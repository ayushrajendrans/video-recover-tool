import { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)

        try {
            await fetch('https://formsubmit.co/ajax/ayushrajendran@gmail.com', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: data,
            })
            setSubmitted(true)
            form.reset()
        } catch {
            alert('Something went wrong. Please try again.')
        }
    }

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Have a question, feature request, or need help? Send us a message and we'll get back to you.
                </p>

                <div className="contact__wrapper fade-in">
                    {submitted ? (
                        <div className="contact__success">
                            <div className="contact__success-icon">✓</div>
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. We'll get back to you soon.</p>
                            <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form className="contact__form" onSubmit={handleSubmit}>
                            {/* FormSubmit config */}
                            <input type="hidden" name="_subject" value="New message from Pro Video Repair website" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="contact__form-row">
                                <div className="contact__form-group">
                                    <label htmlFor="name" className="contact__label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="contact__input"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="contact__form-group">
                                    <label htmlFor="email" className="contact__label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="contact__input"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact__form-group">
                                <label htmlFor="subject" className="contact__label">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="contact__input"
                                    placeholder="What's this about?"
                                    required
                                />
                            </div>

                            <div className="contact__form-group">
                                <label htmlFor="message" className="contact__label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="contact__input contact__textarea"
                                    placeholder="Tell us more..."
                                    rows={5}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary contact__submit">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}
