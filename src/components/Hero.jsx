import { siteConfig } from '../config';

const Hero = () => {
    const scrollToServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToBrand = () => {
        document.getElementById('brand')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={siteConfig.images.hero}
                    alt="Coffee Roasting"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 gradient-overlay"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
                <h1 className="font-display text-6xl md:text-8xl font-bold text-earth-300 mb-6 text-shadow animate-fade-in">
                    {siteConfig.siteName}
                </h1>
                <p className="text-2xl md:text-4xl text-stone-200 mb-4 text-shadow-sm font-light">
                    {siteConfig.tagline}
                </p>
                <p className="text-lg md:text-xl text-stone-300 mb-12 max-w-2xl mx-auto text-shadow-sm">
                    {siteConfig.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={scrollToServices}
                        className="bg-earth-500 hover:bg-earth-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
                    >
                        Servicios de Tostado
                    </button>
                    <button
                        onClick={scrollToBrand}
                        className="border-2 border-earth-400 text-earth-300 hover:bg-earth-400 hover:text-stone-950 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 w-full sm:w-auto"
                    >
                        Nuestra Marca
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <svg className="w-6 h-6 text-earth-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
