// Archivo de configuración editable para Faena Coffee
export const siteConfig = {
    // Información General
    siteName: "Faena",
    tagline: "Tostado Profesional de Café",
    subtitle: "Perfiles de tueste personalizados y café de alta calidad",

    // Ubicación y Contacto
    address: {
        street: "Hidalgo 65",
        neighborhood: "Col. Centro",
        city: "Villa de Álvarez",
        state: "Colima",
        fullAddress: "Hidalgo 65, Col. Centro, Villa de Álvarez, Colima"
    },

    // Mapa de Google (URL embebido)
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8!2d-103.74!3d19.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE1JzM2LjAiTiAxMDPCsDQ0JzI0LjAiVw!5e0!3m2!1sen!2smx!4v1234567890",

    // Redes Sociales
    social: {
        whatsapp: {
            number: "523121234567", // Formato: código país + número sin espacios
            message: "Hola, me gustaría más información sobre Faena Coffee"
        },
        instagram: "https://instagram.com/faenacoffee",
        facebook: "https://facebook.com/faenacoffee"
    },

    // Horarios
    hours: {
        weekdays: "Lun - Vie: 8:00 AM - 6:00 PM",
        weekend: "Sáb: 9:00 AM - 3:00 PM",
        closed: "Dom: Cerrado"
    },

    // Secciones de Contenido
    services: {
        title: "Servicio de Tostado Profesional",
        description: "Tostamos tu café con perfiles personalizados según tus necesidades. Traes el grano verde, nosotros lo transformamos con precisión y expertise.",
        features: [
            {
                title: "Perfiles Personalizados",
                description: "Desarrollamos el perfil de tueste exacto que buscas para tu café"
            },
            {
                title: "Control de Calidad",
                description: "Monitoreo constante de temperatura, tiempo y desarrollo del grano"
            },
            {
                title: "Trazabilidad Completa",
                description: "Registro detallado de cada lote tostado con sus parámetros específicos"
            }
        ],
        image: "/hero-roaster.png"
    },

    brand: {
        title: "Café Faena",
        description: "Café de origen seleccionado, tostado con precisión, para los paladares más exigentes. Nuestra marca representa la pasión por el café de calidad.",
        features: [
            {
                title: "Orígenes Selectos",
                description: "Granos cuidadosamente seleccionados de las mejores fincas"
            },
            {
                title: "Tostado Artesanal",
                description: "Cada lote es tostado con atención al detalle y consistencia"
            },
            {
                title: "Frescura Garantizada",
                description: "Tostamos en pequeños lotes para garantizar máxima frescura"
            }
        ],
        image: "/coffee-bags.png"
    },

    // Imágenes (path relativo a /public)
    images: {
        hero: "/hero-roaster.png",
        beans: "/beans-texture.png",
        bags: "/coffee-bags.png"
    }
};
