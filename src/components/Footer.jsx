import { siteConfig } from '../config';

const Footer = () => {
    return (
        <footer className="bg-stone-950 border-t border-stone-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-stone-500">
                        &copy; {new Date().getFullYear()} {siteConfig.siteName}. Todos los derechos reservados.
                    </p>
                    <p className="text-stone-600 text-sm mt-2">
                        {siteConfig.address.city}, {siteConfig.address.state}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
