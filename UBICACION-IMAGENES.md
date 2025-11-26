# 📸 Ubicación de Imágenes en el Sitio Web

Este documento muestra exactamente dónde se están usando cada imagen en el sitio.

---

## 🏠 **HOME (/) - `app/(marketing)/page.tsx`**

### 1. Hero Section (Fondo)
- **Archivo**: `entrenador-personal-hibrido-madrid-online.webp`
- **Ubicación**: Línea 28-34
- **Uso**: Imagen de fondo del hero con overlay oscuro
- **Alt**: "Entrenador personal corrigiendo técnica de sentadilla en Madrid"

### 2. Sección Servicios - Card 1 (Presencial)
- **Archivo**: `entrenamiento-personal-presencial-madrid.webp`
- **Ubicación**: Línea 100-105
- **Uso**: Imagen superior de la tarjeta "Entrenamiento en Persona"
- **Alt**: "Entrenamiento personal presencial a domicilio en Madrid"

### 3. Sección Servicios - Card 2 (Online)
- **Archivo**: `entrenamiento-online-videoanalisis.webp`
- **Ubicación**: Línea 133-138
- **Uso**: Imagen superior de la tarjeta "Asesoramiento Online"
- **Alt**: "Entrenamiento online con videoanálisis y corrección de técnica"

### 4. Sección Servicios - Card 3 (Tercera Edad)
- **Archivo**: `gimnasia-tercera-edad-domicilio.webp`
- **Ubicación**: Línea 166-171
- **Uso**: Imagen superior de la tarjeta "Gimnasia Tercera Edad"
- **Alt**: "Gimnasia a domicilio para mayores de 65 años en Madrid"

---

## 💻 **ONLINE COACHING (/online-coaching) - `app/(online)/online-coaching/page.tsx`**

### Hero Section (Lado derecho)
- **Archivo**: `analisis-tecnica-video-entrenamiento-online.webp`
- **Ubicación**: Línea 84-89
- **Uso**: Imagen de ejemplo de análisis de video en el hero (layout 2 columnas)
- **Alt**: "Ejemplo de corrección postural por vídeo para clientes de coaching online"

---

## 👴 **TERCERA EDAD (/tercera-edad) - `app/(special)/tercera-edad/page.tsx`**

### Hero Section (Lado derecho)
- **Archivo**: `gimnasia-mantenimiento-mayores-domicilio-madrid.webp`
- **Ubicación**: Línea 91-95
- **Uso**: Imagen representativa en el hero (layout 2 columnas)
- **Alt**: "Entrenador personal asistiendo en ejercicios de movilidad para tercera edad a domicilio en Madrid"

---

## 👤 **SOBRE MÍ (/sobre-mi) - `app/(marketing)/sobre-mi/page.tsx`**

### Carrusel de Perfil (Lado izquierdo)
- **Archivo Principal**: `perfil-entrenador-dreizeer-experto-biomecanica.webp`
- **Archivos Secundarios**: `perfil2.jpeg`, `perfil3.jpeg`, `perfil4.jpeg`, `perfil5.jpeg`
- **Ubicación**: Línea 50-55 (definición del array) y componente `ProfileCarousel`
- **Uso**: Carrusel automático de fotos de perfil (cambia cada 3 segundos)
- **Alt**: "Foto de perfil de Dreizeer, especialista en entrenamiento híbrido en Madrid"

---

## 🏙️ **LANDING PAGES LOCALES - `app/(local)/[city]/[neighborhood]/page.tsx`**

### Imágenes Dinámicas según Barrio (Líneas 243-280)

#### **RETIRO** (`/madrid/retiro`)
- **Archivo**: `entrenamiento-personal-aire-libre-parque-retiro.webp`
- **Alt**: "Clase de entrenamiento funcional individual en el Parque del Retiro, Madrid"

#### **SALAMANCA** (`/madrid/salamanca`)
- **Archivo**: `entrenador-personal-domicilio-barrio-salamanca-lujo.webp`
- **Alt**: "Servicio de entrenador personal exclusivo a domicilio en Barrio de Salamanca"

#### **CHAMBERÍ** (`/madrid/chamberi`)
- **Archivo**: `fitness-domicilio-chamberi-material-incluido.webp`
- **Alt**: "Entrenador personal llevando material deportivo a casa en Chamberí"

#### **VALLECAS** (`/madrid/vallecas`)
- **Archivo**: `grupo-entrenamiento-economico-vallecas-madrid.webp`
- **Alt**: "Grupo reducido de entrenamiento funcional al aire libre en Vallecas"

#### **RIVAS FUTURA** (`/rivas-vaciamadrid/futura`)
- **Archivo**: `entrenador-personal-rivas-futura-grupos-reducidos.webp`
- **Alt**: "Entrenamiento de alta intensidad para profesionales en Rivas Futura"

#### **RIVAS COVIBAR** (`/rivas-vaciamadrid/covibar`)
- **Archivo**: `gimnasia-salud-covibar-rivas-vaciamadrid.webp`
- **Alt**: "Ejercicios de salud y mantenimiento en el barrio de Covibar, Rivas"

---

## 📂 **Estructura de Archivos en `/public/images/`**

```
/public/images/
├── hero/
│   ├── entrenador-personal-hibrido-madrid-online.webp ✅ (Home hero)
│   ├── entrenamiento-personal-presencial-madrid.webp ✅ (Home servicio 1)
│   ├── entrenamiento-online-videoanalisis.webp ✅ (Home servicio 2)
│   └── gimnasia-tercera-edad-domicilio.webp ✅ (Home servicio 3)
│
├── perfil/
│   ├── perfil-entrenador-dreizeer-experto-biomecanica.webp ✅ (Sobre Mí - principal)
│   ├── perfil2.jpeg ✅ (Sobre Mí - carrusel)
│   ├── perfil3.jpeg ✅ (Sobre Mí - carrusel)
│   ├── perfil4.jpeg ✅ (Sobre Mí - carrusel)
│   └── perfil5.jpeg ✅ (Sobre Mí - carrusel)
│
├── servicios/
│   ├── analisis-tecnica-video-entrenamiento-online.webp ✅ (Online Coaching)
│   └── gimnasia-mantenimiento-mayores-domicilio-madrid.webp ✅ (Tercera Edad)
│
└── local/
    ├── madrid/
    │   ├── entrenamiento-personal-aire-libre-parque-retiro.webp ✅ (Retiro)
    │   ├── entrenador-personal-domicilio-barrio-salamanca-lujo.webp ✅ (Salamanca)
    │   ├── fitness-domicilio-chamberi-material-incluido.webp ✅ (Chamberí)
    │   └── grupo-entrenamiento-economico-vallecas-madrid.webp ✅ (Vallecas)
    │
    └── rivas/
        ├── entrenador-personal-rivas-futura-grupos-reducidos.webp ✅ (Futura)
        └── gimnasia-salud-covibar-rivas-vaciamadrid.webp ✅ (Covibar)
```

---

## 🔍 **Cómo Verlas en el Navegador**

1. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

2. **Visita las URLs**:
   - Home: `http://localhost:3000/`
   - Online: `http://localhost:3000/online-coaching`
   - Tercera Edad: `http://localhost:3000/tercera-edad`
   - Sobre Mí: `http://localhost:3000/sobre-mi`
   - Retiro: `http://localhost:3000/madrid/retiro`
   - Salamanca: `http://localhost:3000/madrid/salamanca`
   - Chamberí: `http://localhost:3000/madrid/chamberi`
   - Vallecas: `http://localhost:3000/madrid/vallecas`
   - Rivas Futura: `http://localhost:3000/rivas-vaciamadrid/futura`
   - Rivas Covibar: `http://localhost:3000/rivas-vaciamadrid/covibar`

3. **Inspecciona las imágenes**:
   - Abre las herramientas de desarrollador (F12)
   - Ve a la pestaña "Elements" o "Elementos"
   - Busca los componentes `<ImageOptimized>` o `<img>`
   - Verás el atributo `src` con la ruta de la imagen

---

## ⚠️ **Nota Importante**

Las imágenes con extensión `.webp` en el código se mostrarán correctamente aunque los archivos originales sean `.jpeg` o `.png`. Next.js las convierte automáticamente al formato óptimo (WebP/AVIF) según el navegador del usuario.

Si alguna imagen no se muestra, verifica que el archivo exista en la ruta especificada dentro de `/public/images/`.

