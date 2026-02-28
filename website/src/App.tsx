import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    // Scroll-triggered fade-in animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
