# Guía de Imágenes SEO y Geo-Localización

Este documento contiene la referencia completa de nombres de imágenes, alt texts y ubicaciones para todas las URLs del sitio.

## Reglas de Oro

1. **Nombres de archivo**: Usar guiones medios, palabras clave SEO, y ubicación geo-localizada
2. **Alt Text**: Descriptivo, local, y con contexto del servicio
3. **Formato**: Preferir `.webp` para mejor rendimiento (Next.js convierte automáticamente)

---

## Mapeo de Imágenes por URL

### A. Nivel Global (Marca)

| URL | Nombre del Archivo | Alt Text | Ubicación |
|-----|-------------------|----------|-----------|
| **Home (/)** | `entrenador-personal-hibrido-madrid-online.webp` | "Entrenador personal corrigiendo técnica de sentadilla en Madrid." | `/public/images/hero/` |
| **Sobre Mí (/sobre-mi)** | `perfil-entrenador-dreizeer-experto-biomecanica.webp` | "Foto de perfil de Dreizeer, especialista en entrenamiento híbrido en Madrid." | `/public/images/perfil/` |

### B. Servicio Online (Técnico)

| URL | Nombre del Archivo | Alt Text | Ubicación |
|-----|-------------------|----------|-----------|
| **Online Coaching (/online-coaching)** | `analisis-tecnica-video-entrenamiento-online.webp` | "Ejemplo de corrección postural por vídeo para clientes de coaching online." | `/public/images/servicios/` |

### C. Servicio 3ª Edad (Confianza)

| URL | Nombre del Archivo | Alt Text | Ubicación |
|-----|-------------------|----------|-----------|
| **Tercera Edad (/tercera-edad)** | `gimnasia-mantenimiento-mayores-domicilio-madrid.webp` | "Entrenador personal asistiendo en ejercicios de movilidad para tercera edad a domicilio en Madrid." | `/public/images/servicios/` |

### D. Madrid Centro (Estilo de Vida / Outdoor)

| URL | Nombre del Archivo | Alt Text | Ubicación |
|-----|-------------------|----------|-----------|
| **Retiro (/madrid/retiro)** | `entrenamiento-personal-aire-libre-parque-retiro.webp` | "Clase de entrenamiento funcional individual en el Parque del Retiro, Madrid." | `/public/images/local/madrid/` |
| **Salamanca (/madrid/salamanca)** | `entrenador-personal-domicilio-barrio-salamanca-lujo.webp` | "Servicio de entrenador personal exclusivo a domicilio en Barrio de Salamanca." | `/public/images/local/madrid/` |
| **Chamberí (/madrid/chamberi)** | `fitness-domicilio-chamberi-material-incluido.webp` | "Entrenador personal llevando material deportivo a casa en Chamberí." | `/public/images/local/madrid/` |
| **Vallecas (/madrid/vallecas)** | `grupo-entrenamiento-economico-vallecas-madrid.webp` | "Grupo reducido de entrenamiento funcional al aire libre en Vallecas." | `/public/images/local/madrid/` |

### E. Rivas-Vaciamadrid (Local / Híbrido)

| URL | Nombre del Archivo | Alt Text | Ubicación |
|-----|-------------------|----------|-----------|
| **Rivas Futura (/rivas-vaciamadrid/futura)** | `entrenador-personal-rivas-futura-grupos-reducidos.webp` | "Entrenamiento de alta intensidad para profesionales en Rivas Futura." | `/public/images/local/rivas/` |
| **Covibar (/rivas-vaciamadrid/covibar)** | `gimnasia-salud-covibar-rivas-vaciamadrid.webp` | "Ejercicios de salud y mantenimiento en el barrio de Covibar, Rivas." | `/public/images/local/rivas/` |

---

## Imágenes Adicionales (Servicios)

| Nombre del Archivo | Uso | Alt Text | Ubicación |
|-------------------|-----|----------|-----------|
| `entrenamiento-personal-presencial-madrid.webp` | Home - Servicio Presencial | "Entrenamiento personal presencial a domicilio en Madrid." | `/public/images/hero/` |
| `entrenamiento-online-videoanalisis.webp` | Home - Servicio Online | "Entrenamiento online con videoanálisis y corrección de técnica." | `/public/images/hero/` |
| `gimnasia-tercera-edad-domicilio.webp` | Home - Servicio Tercera Edad | "Gimnasia a domicilio para mayores de 65 años en Madrid." | `/public/images/hero/` |

---

## Notas Importantes

### Geo-Localización EXIF (Opcional pero Recomendado)

Aunque Google no lee datos EXIF para ranking general, ayuda a la consistencia local. Antes de subir las fotos:

1. **Rivas**: Añadir coordenadas GPS (40.3380, -3.5200 para Futura / 40.3450, -3.5300 para Covibar)
2. **Vallecas**: Añadir coordenadas GPS (40.3650, -3.6100)
3. **Madrid Centro**: Añadir coordenadas GPS según barrio

**Herramientas recomendadas:**
- GeoImgr (online)
- ExifTool (línea de comandos)
- Adobe Lightroom (con plugin GPS)

### Optimización de Imágenes

1. **Antes de subir**: Pasar por TinyPNG o similar para comprimir
2. **Formato**: Next.js convierte automáticamente a WebP/AVIF
3. **Tamaño recomendado**: 
   - Hero images: 1920x1080px
   - Cards/Servicios: 800x600px
   - Perfil: 600x800px

### Componente ImageOptimized

Todas las imágenes deben usar el componente `ImageOptimized` que:
- ✅ Usa `next/image` automáticamente
- ✅ Genera alt text si no se proporciona
- ✅ Optimiza formato (WebP/AVIF)
- ✅ Lazy loading por defecto
- ✅ Priority para hero images

---

## Checklist de Implementación

- [x] Imágenes renombradas con nombres SEO-friendly
- [x] Referencias actualizadas en código
- [x] Alt texts descriptivos y geo-localizados
- [x] Estructura de carpetas organizada
- [x] Componente ImageOptimized implementado
- [ ] Geo-localización EXIF añadida (manual)
- [ ] Imágenes optimizadas con TinyPNG (manual)
- [ ] Verificación de alt texts en todas las páginas

---

**Última actualización**: 2024-11-23

