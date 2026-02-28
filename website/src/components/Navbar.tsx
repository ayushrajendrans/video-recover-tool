import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <a href="#" className="navbar__logo">
                    <span className="navbar__logo-icon">▶</span>
                    <span className="navbar__logo-text">Pro Video Repair</span>
                </a>

                <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    {links.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="navbar__link"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="navbar__cta-wrapper">
                        <a href="https://buymeacoffee.com/ayushrajendran" target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar__cta" onClick={() => setMobileOpen(false)}>
                            ☕ Buy Me a Coffee
                        </a>
                    </li>
                </ul>

                <button
                    className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}
