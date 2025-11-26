import { siteConfig } from '../config';

const Services = () => {
    return (
        <section id="services" className="py-24 gradient-coffee">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="order-2 md:order-1">
                        <img
                            src={siteConfig.services.image}
                            alt="Professional Coffee Roasting"
                            className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div className="order-1 md:order-2">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-300 mb-6">
                            {siteConfig.services.title}
                        </h2>
                        <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                            {siteConfig.services.description}
                        </p>

                        {/* Features Grid */}
                        <div className="space-y-6">
                            {siteConfig.services.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-stone-900/50 backdrop-blur-sm rounded-xl p-6 border border-stone-800 hover:border-earth-600 transition-all transform hover:translate-x-2"
                                >
                                    <h3 className="text-xl font-semibold text-earth-400 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-stone-400">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
