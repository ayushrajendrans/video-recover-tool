import '../styles/Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <a href="#" className="footer__logo">
                            <span className="footer__logo-icon">▶</span>
                            <span className="footer__logo-text">Pro Video Repair</span>
                        </a>
                        <p className="footer__desc">
                            The easiest way to repair corrupted, damaged, and unplayable video files. Free, fast, and private.
                        </p>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">Product</h4>
                        <ul className="footer__links">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">Support</h4>
                        <ul className="footer__links">
                            <li><a href="https://buymeacoffee.com/ayushrajendran" target="_blank" rel="noopener noreferrer">☕ Buy Me a Coffee</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#">Report a Bug</a></li>
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">Legal</h4>
                        <ul className="footer__links">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">License</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Pro Video Repair. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    )
}
