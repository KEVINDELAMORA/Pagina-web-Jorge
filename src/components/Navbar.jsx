import { useState, useEffect } from 'react';
import { siteConfig } from '../config';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-stone-950/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="font-display text-3xl md:text-4xl font-bold text-earth-400 hover:text-earth-300 transition-colors"
                    >
                        {siteConfig.siteName}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-stone-300 hover:text-earth-400 transition-colors font-medium"
                        >
                            Servicios
                        </button>
                        <button
                            onClick={() => scrollToSection('brand')}
                            className="text-stone-300 hover:text-earth-400 transition-colors font-medium"
                        >
                            Nuestra Marca
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-earth-500 hover:bg-earth-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
                        >
                            Contacto
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-stone-300 hover:text-earth-400 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-stone-900 rounded-lg mb-4 animate-fade-in">
                        <div className="px-4 pt-2 pb-4 space-y-3">
                            <button
                                onClick={() => scrollToSection('services')}
                                className="block w-full text-left text-stone-300 hover:text-earth-400 py-2 transition-colors"
                            >
                                Servicios
                            </button>
                            <button
                                onClick={() => scrollToSection('brand')}
                                className="block w-full text-left text-stone-300 hover:text-earth-400 py-2 transition-colors"
                            >
                                Nuestra Marca
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left bg-earth-500 hover:bg-earth-600 text-white px-4 py-2 rounded-full transition-all"
                            >
                                Contacto
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
