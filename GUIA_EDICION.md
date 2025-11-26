# 📋 GUÍA RÁPIDA DE EDICIÓN - FAENA COFFEE

Esta es tu guía rápida para editar el contenido de tu página web sin tocar código complejo.

## 🎯 ARCHIVO PRINCIPAL DE EDICIÓN

**Ruta:** `src/config.js`

Este archivo es el centro de control de TODO EL CONTENIDO de la página.

---

## ✏️ QUÉ PUEDES EDITAR

### 1. Información Básica

```javascript
siteName: "Faena",                              // Nombre de tu marca
tagline: "Tostado Profesional de Café",         // Título principal
subtitle: "Perfiles de tueste personalizados...", // Subtítulo
```

### 2. Ubicación y Contacto

```javascript
address: {
  street: "Hidalgo 65",
  neighborhood: "Col. Centro",
  city: "Villa de Álvarez",
  state: "Colima",
  fullAddress: "Hidalgo 65, Col. Centro, Villa de Álvarez, Colima"
},
```

### 3. Redes Sociales

#### WhatsApp:
```javascript
whatsapp: {
  number: "523121234567",  // ⚠️ IMPORTANTE: Cambiar por tu número real
  message: "Hola, me gustaría más información sobre Faena Coffee"
}
```

**Formato del número:**
- Código de país (México = 52)
- 10 dígitos del número celular
- SIN espacios, guiones ni paréntesis
- Ejemplo: `"5231212345678"`

#### Instagram:
```javascript
instagram: "https://instagram.com/faenacoffee"  // Tu usuario de Instagram
```

### 4. Horarios

```javascript
hours: {
  weekdays: "Lun - Vie: 8:00 AM - 6:00 PM",
  weekend: "Sáb: 9:00 AM - 3:00 PM",
  closed: "Dom: Cerrado"
}
```

### 5. Sección de Servicios

```javascript
services: {
  title: "Servicio de Tostado Profesional",
  description: "Tostamos tu café con perfiles personalizados...",
  features: [
    {
      title: "Perfiles Personalizados",
      description: "Desarrollamos el perfil de tueste exacto..."
    },
    // Puedes agregar más features aquí
  ]
}
```

### 6. Sección de Marca

```javascript
brand: {
  title: "Café Faena",
  description: "Café de origen seleccionado...",
  features: [
    {
      title: "Orígenes Selectos",
      description: "Granos cuidadosamente seleccionados..."
    },
    // Puedes agregar más features aquí
  ]
}
```

---

## 🖼️ CÓMO CAMBIAR IMÁGENES

### Paso 1: Preparar tus imágenes

- Las imágenes deben estar en formato PNG o JPG
- Tamaños recomendados:
  - **Hero (tostadora):** 1920x1080px
  - **Granos:** 1200x800px
  - **Bolsas de café:** 1200x800px

### Paso 2: Reemplazar en la carpeta `public/`

1. Ve a la carpeta `public/`
2. Reemplaza estos archivos con tus propias imágenes (mantén los nombres):
   - `hero-roaster.png` → Imagen de máquina tostadora
   - `beans-texture.png` → Imagen de granos de café
   - `coffee-bags.png` → Imagen de tus bolsas de café

**O** si quieres usar nombres diferentes:

1. Guarda tus imágenes en `public/` con el nombre que quieras
2. Actualiza las rutas en `src/config.js`:

```javascript
images: {
  hero: "/tu-imagen-hero.jpg",
  beans: "/tu-imagen-granos.jpg",
  bags: "/tu-imagen-bolsas.jpg"
}
```

---

## 🗺️ CONFIGURAR GOOGLE MAPS

### Paso 1: Obtener el código de Maps

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu dirección exacta: `Hidalgo 65, Villa de Álvarez, Colima`
3. Haz clic en **"Compartir"**
4. Selecciona **"Insertar un mapa"**
5. Copia TODO el código que aparece en el cuadro

### Paso 2: Insertar en config.js

Busca esta línea en `src/config.js`:

```javascript
googleMapsEmbed: "https://www.google.com/maps/embed?pb=...",
```

Reemplaza solo la URL (la parte entre comillas) con la que copiaste de Google Maps.

---

## 🚀 CÓMO VER TUS CAMBIOS

### En tu computadora (desarrollo):

1. Abre la terminal en la carpeta del proyecto
2. Ejecuta:
```bash
npm run dev
```
3. Abre el navegador en `http://localhost:5173`
4. ¡Los cambios se actualizan automáticamente!

### Subir cambios a GitHub:

1. Después de hacer tus ediciones, ejecuta:
```bash
git add .
git commit -m "Actualización de contenido"
git push origin main
```

---

## ⚠️ COSAS IMPORTANTES

### ✅ PUEDES EDITAR LIBREMENTE:
- Todos los textos en `src/config.js`
- Imágenes en carpeta `public/`
- Horarios
- Enlaces de redes sociales

### ❌ NO TOCAR (a menos que sepas lo que haces):
- Archivos `.jsx` en carpeta `src/components/`
- `tailwind.config.js`
- `package.json`
- Carpeta `node_modules/`

---

## 🆘 PROBLEMAS COMUNES

### El sitio no carga:
```bash
# Reinstalar dependencias
npm install
npm run dev
```

### Los cambios no se ven:
1. Guarda el archivo `src/config.js`
2. Refresca el navegador (Ctrl + R o Cmd + R)
3. Si aún no funciona, detén el servidor (Ctrl + C) y vuelve a ejecutar `npm run dev`

### WhatsApp no abre:
- Verifica que el número esté en formato correcto: `52` + 10 dígitos
- Sin espacios, guiones ni paréntesis
- Ejemplo correcto: `"5231212345678"`

---

## 📞 CONTACTOS A ACTUALIZAR

**Checklist de información que DEBES actualizar:**

- [ ] Número de WhatsApp real
- [ ] Usuario de Instagram real
- [ ] Horarios correctos
- [ ] Dirección exacta verificada
- [ ] Google Maps con ubicación precisa
- [ ] Imágenes reales (tostadora, granos, bolsas)

---

## 🎨 PERSONALIZACIÓN DE COLORES

Si quieres cambiar los colores de la página, edita `tailwind.config.js`:

```javascript
colors: {
  'coffee': {
    500: '#a97c54',  // Color principal café
  },
  'earth': {
    400: '#c19874',  // Color de acento
    500: '#a97c54',
  }
}
```

Usa [Coolors.co](https://coolors.co/) para generar paletas de colores.

---

✨ **¡Listo! Tu página está lista para personalizar.**
