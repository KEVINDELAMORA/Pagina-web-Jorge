# 🌟 Faena - Landing Page

Landing page profesional para **Faena**, tostador de café profesional en Colima, México.

## 🚀 Tech Stack

- **React** - Librería de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Responsive Design** - Mobile-first approach

## 📱 Características

✅ Diseño responsive (mobile, tablet, desktop)  
✅ Smooth scroll navigation  
✅ Integración con WhatsApp  
✅ Integración con Instagram  
✅ Google Maps embebido  
✅ Formulario de contacto  
✅ Imágenes placeholder profesionales  
✅ SEO optimizado  
✅ Configuración centralizada y editable  

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build de producción
npm run preview
```

## ⚙️ Configuración

Todos los textos, enlaces y contenidos son editables desde el archivo:

📁 **`src/config.js`**

Aquí puedes modificar:

- Textos del sitio (títulos, descripciones)
- Información de contacto y ubicación
- Enlaces de redes sociales (WhatsApp, Instagram)
- Horarios
- URLs de imágenes
- Google Maps embed URL
- Contenido de servicios y marca

### Ejemplo de edición:

```javascript
export const siteConfig = {
  siteName: "Faena",
  tagline: "Tostado Profesional de Café",
  
  social: {
    whatsapp: {
      number: "523121234567", // Cambiar por tu número
      message: "Hola, me gustaría más información"
    },
    instagram: "https://instagram.com/tu_usuario"
  }
};
```

## 🎨 Personalización de Estilos

Los colores y tipografías están definidos en:

📁 **`tailwind.config.js`**

Puedes personalizar:
- Paleta de colores (earth tones, coffee tones)
- Fuentes
- Breakpoints

## 🖼️ Cambiar Imágenes

Las imágenes están en la carpeta `/public`:

- `hero-roaster.png` - Imagen del Hero (máquina tostadora)
- `beans-texture.png` - Textura de granos
- `coffee-bags.png` - Bolsas de café Faena

Para cambiar las imágenes:
1. Reemplaza los archivos en `/public`
2. Mantén los mismos nombres O
3. Actualiza las rutas en `src/config.js`

## 📍 Configurar Google Maps

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu dirección
3. Click en "Compartir" → "Insertar un mapa"
4. Copia el URL del `iframe src`
5. Pégalo en `src/config.js` en `googleMapsEmbed`

## 📲 Configurar WhatsApp

En `src/config.js`, actualiza:

```javascript
whatsapp: {
  number: "52XXXXXXXXXXXX", // Código país (52) + 10 dígitos
  message: "Tu mensaje prellenado"
}
```

## 🚀 Deployment

### GitHub Pages

1. Build del proyecto:
```bash
npm run build
```

2. La carpeta `dist` contiene los archivos listos para producción

3. Sube la carpeta `dist` a tu hosting o GitHub Pages

### Netlify / Vercel

1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📂 Estructura del Proyecto

```
WebFaena/
├── public/           # Imágenes estáticas
├── src/
│   ├── components/   # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Brand.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── config.js     # ⭐ Configuración editable
│   ├── index.css     # Estilos globales
│   ├── App.jsx       # Componente principal
│   └── main.jsx      # Entry point
├── index.html
├── tailwind.config.js
└── package.json
```

## 🎯 Secciones de la Página

1. **Hero** - Presentación principal con call-to-actions
2. **Servicios** - Información sobre servicio de tostado profesional
3. **Nuestra Marca** - Presentación del café Faena
4. **Contacto** - Formulario, mapa, y enlaces de redes sociales

## 💡 Tips de Uso

- **Smooth scroll:** Todos los enlaces de navegación usan smooth scroll
- **Mobile menu:** El menú móvil se activa automáticamente en pantallas pequeñas
- **Formulario:** Al enviar el formulario, se abre WhatsApp con el mensaje prellenado
- **Hover effects:** Todos los elementos interactivos tienen efectos hover sutiles

## 📝 Licencia

Proyecto creado para Faena Coffee. Todos los derechos reservados.

---

✨ **Desarrollado con ❤️ para Faena Coffee**
