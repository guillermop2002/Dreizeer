# 🔍 Auditoría Completa SEO/GEO y Mejoras de Sentido Común

**Fecha:** $(date)  
**Proyecto:** Dreizeer - Entrenador Personal  
**Estado Actual:** ✅ Buenas bases implementadas, mejoras identificadas

---

## 📊 RESUMEN EJECUTIVO

### ✅ **LO QUE ESTÁ BIEN IMPLEMENTADO:**
- ✅ `metadataBase` y canonical URLs en layout raíz
- ✅ Schema.org LocalBusiness con `addressRegion` y coordenadas
- ✅ Schema.org Person con `sameAs` (Instagram)
- ✅ Sitemap dinámico con rutas estáticas y locales
- ✅ Robots.txt configurado correctamente
- ✅ Open Graph Image dinámico para páginas locales
- ✅ Precios actualizados en OG images (20€/persona, 30€/sesión)
- ✅ Footer con enlaces SEO locales
- ✅ WhatsApp widget funcional

### ⚠️ **ÁREAS DE MEJORA IDENTIFICADAS:**

---

## 🚨 PRIORIDAD ALTA - SEO TÉCNICO

### 1. **Open Graph Metadata Incompleto en Páginas Principales**

**Problema:** Las páginas principales no tienen metadatos Open Graph completos.

**Afecta:**
- `/sobre-mi` - Solo tiene `title` y `description`, falta `openGraph` completo
- `/online-coaching` - Solo tiene `title` y `description`, falta `openGraph` completo
- `/tercera-edad` - Solo tiene `title` y `description`, falta `openGraph` completo
- Páginas locales - Tienen `generateMetadata` pero no incluyen `openGraph` completo

**Solución:**
```typescript
// Cada página debe tener:
export const metadata: Metadata = {
  // ... existente
  openGraph: {
    title: '...',
    description: '...',
    url: `${baseUrl}/ruta`,
    siteName: 'Dreizeer',
    images: [
      {
        url: `${baseUrl}/images/og/ruta-og.webp`, // O usar opengraph-image.tsx
        width: 1200,
        height: 630,
        alt: '...',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
    images: ['...'],
  },
};
```

**Impacto SEO:** 🔴 **ALTO** - Las tarjetas sociales no se mostrarán correctamente

---

### 2. **Faltan Open Graph Images en Páginas Principales**

**Problema:** Solo las páginas locales tienen `opengraph-image.tsx`. Las páginas principales no.

**Afecta:**
- `/` (Home) - No tiene OG image
- `/sobre-mi` - No tiene OG image
- `/online-coaching` - No tiene OG image
- `/tercera-edad` - No tiene OG image

**Solución:**
Crear archivos `opengraph-image.tsx` en:
- `app/(marketing)/opengraph-image.tsx`
- `app/(marketing)/sobre-mi/opengraph-image.tsx`
- `app/(online)/online-coaching/opengraph-image.tsx`
- `app/(special)/tercera-edad/opengraph-image.tsx`

**Impacto SEO:** 🔴 **ALTO** - Sin imágenes atractivas en redes sociales

---

### 3. **Canonical URLs Faltantes en Páginas Individuales**

**Problema:** Solo el layout raíz tiene `canonical: '/'`. Las páginas individuales no definen sus propias canonical URLs.

**Afecta:**
- `/sobre-mi` - No tiene canonical
- `/online-coaching` - No tiene canonical
- `/tercera-edad` - No tiene canonical
- Páginas locales - No tienen canonical explícito

**Solución:**
```typescript
// En cada página:
export const metadata: Metadata = {
  // ... existente
  alternates: {
    canonical: '/ruta-especifica',
  },
};
```

**Impacto SEO:** 🟡 **MEDIO** - Riesgo de contenido duplicado

---

### 4. **Falta Schema.org BreadcrumbList**

**Problema:** No hay breadcrumbs estructurados para navegación jerárquica.

**Afecta:** Todas las páginas (especialmente páginas locales)

**Solución:**
```typescript
// Agregar a schemaGenerator.ts
export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return JSON.stringify(schema, null, 2);
}
```

**Impacto SEO:** 🟡 **MEDIO** - Mejora la navegación semántica

---

### 5. **Falta Schema.org FAQPage**

**Problema:** La página `/sobre-mi` tiene FAQs pero no están marcadas con Schema.org.

**Afecta:** `/sobre-mi`

**Solución:**
```typescript
// Agregar a schemaGenerator.ts
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return JSON.stringify(schema, null, 2);
}
```

**Impacto SEO:** 🟡 **MEDIO** - Posibilidad de rich snippets en Google

---

## 🟡 PRIORIDAD MEDIA - SEO/GEO

### 6. **Falta Información de Contacto Estructurada en Footer**

**Problema:** El footer no muestra teléfono ni email de forma visible y estructurada.

**Afecta:** Todas las páginas

**Solución:**
Agregar sección de contacto en footer con:
- Teléfono: `+34 637 45 37 53` (formato internacional)
- Email: `dreizeer@gmail.com`
- Horarios de atención (si aplica)
- Formato Schema.org `ContactPoint`

**Impacto SEO:** 🟡 **MEDIO** - Mejora la confianza y el SEO local

---

### 7. **Falta Página de Política de Privacidad**

**Problema:** No existe página de política de privacidad (requerido por GDPR).

**Afecta:** Cumplimiento legal

**Solución:**
Crear `app/(legal)/privacidad/page.tsx` con:
- Política de privacidad básica
- Enlace en footer
- Schema.org `WebPage`

**Impacto SEO:** 🟡 **MEDIO** - Requisito legal y confianza

---

### 8. **Falta Página de Términos y Condiciones**

**Problema:** No existe página de términos y condiciones.

**Afecta:** Cumplimiento legal

**Solución:**
Crear `app/(legal)/terminos/page.tsx` con:
- Términos de servicio básicos
- Enlace en footer

**Impacto SEO:** 🟢 **BAJO** - Requisito legal

---

### 9. **Enlace Roto de Twitter en Footer**

**Problema:** El enlace de Twitter apunta a `#` (roto).

**Afecta:** Footer en todas las páginas

**Solución:**
- Si no hay Twitter: Eliminar el enlace
- Si hay Twitter: Agregar URL correcta
- Actualizar `sameAs` en Schema.org si corresponde

**Impacto SEO:** 🟢 **BAJO** - Pero mala experiencia de usuario

---

### 10. **Falta Información de Horarios en Schema.org**

**Problema:** Los horarios en Schema.org son genéricos (07:00-22:00 todos los días).

**Afecta:** Schema.org LocalBusiness

**Solución:**
- Hacer horarios más específicos si es posible
- O mantener genéricos pero documentar que son "horarios flexibles"

**Impacto SEO:** 🟢 **BAJO** - Ya está implementado, solo mejorar precisión

---

## 🟢 PRIORIDAD BAJA - MEJORAS ADICIONALES

### 11. **Falta Schema.org Review/Rating (si aplica)**

**Problema:** No hay reviews estructurados (si tienes testimonios).

**Afecta:** Rich snippets potenciales

**Solución:**
Si hay testimonios reales, agregar Schema.org `Review`:
```typescript
{
  '@type': 'Review',
  author: {
    '@type': 'Person',
    name: 'Nombre Cliente',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: 5,
    bestRating: 5,
  },
  reviewBody: 'Texto del testimonio',
}
```

**Impacto SEO:** 🟢 **BAJO** - Solo si hay testimonios verificables

---

### 12. **Falta Hreflang (si hay múltiples idiomas)**

**Problema:** Solo hay versión en español.

**Afecta:** N/A (solo español)

**Solución:** N/A - Solo necesario si hay múltiples idiomas

**Impacto SEO:** 🟢 **N/A**

---

### 13. **Mejorar Sitemap con lastModified Real**

**Problema:** El sitemap usa `new Date()` para todas las páginas (siempre "hoy").

**Afecta:** Sitemap

**Solución:**
- Usar fechas reales de última modificación si es posible
- O mantener `new Date()` si el contenido cambia frecuentemente

**Impacto SEO:** 🟢 **BAJO** - Ya funciona, solo optimización

---

## 🎯 SENTIDO COMÚN - MEJORAS UX/UI

### 14. **Falta Email Visible en Footer**

**Problema:** El email solo está en Schema.org, no visible para usuarios.

**Afecta:** Accesibilidad y confianza

**Solución:**
Agregar email visible en footer:
```tsx
<a href="mailto:dreizeer@gmail.com">dreizeer@gmail.com</a>
```

**Impacto:** 🟡 **MEDIO** - Mejora confianza y accesibilidad

---

### 15. **Falta Teléfono Visible en Footer**

**Problema:** El teléfono solo está en Schema.org y WhatsApp, no visible.

**Afecta:** Accesibilidad (no todos usan WhatsApp)

**Solución:**
Agregar teléfono visible en footer:
```tsx
<a href="tel:+34637453753">+34 637 45 37 53</a>
```

**Impacto:** 🟡 **MEDIO** - Mejora accesibilidad

---

### 16. **Falta Información de Horarios de Atención**

**Problema:** No se especifica cuándo atiendes (horarios de WhatsApp/llamadas).

**Afecta:** Expectativas del usuario

**Solución:**
Agregar en footer:
```tsx
<p>Horario de atención: Lunes a Domingo, 7:00 - 22:00</p>
```

**Impacto:** 🟢 **BAJO** - Pero mejora UX

---

### 17. **Falta Dirección Física (si existe)**

**Problema:** No hay dirección física visible (si tienes oficina/gimnasio).

**Afecta:** SEO local y confianza

**Solución:**
Si hay dirección física, agregarla en footer y Schema.org.

**Impacto:** 🟡 **MEDIO** - Solo si aplica

---

### 18. **Mejorar Navegación Interna**

**Problema:** Algunos enlaces del header apuntan a `/#seccion` que pueden no existir.

**Afecta:** Navegación

**Solución:**
- Verificar que todas las secciones con `id` existan
- O cambiar enlaces a rutas reales

**Impacto:** 🟡 **MEDIO** - Mejora UX

---

### 19. **Falta Página 404 Personalizada con Enlaces Útiles**

**Problema:** Hay `not-found.tsx` pero puede mejorarse.

**Afecta:** Experiencia cuando hay error 404

**Solución:**
Mejorar página 404 con:
- Enlaces a páginas principales
- Búsqueda o navegación
- Mensaje amigable

**Impacto:** 🟢 **BAJO** - Pero mejora UX

---

### 20. **Falta Página de Mapa del Sitio (Opcional)**

**Problema:** No hay página HTML de sitemap para usuarios.

**Afecta:** Navegación (opcional)

**Solución:**
Crear página `/sitemap` con lista de todas las páginas.

**Impacto:** 🟢 **BAJO** - Opcional

---

## 📋 PLAN DE ACCIÓN RECOMENDADO

### **Fase 1: Crítico (1-2 días)**
1. ✅ Agregar Open Graph completo a todas las páginas
2. ✅ Crear Open Graph Images para páginas principales
3. ✅ Agregar canonical URLs a todas las páginas
4. ✅ Arreglar enlace roto de Twitter

### **Fase 2: Importante (2-3 días)**
5. ✅ Agregar BreadcrumbList Schema
6. ✅ Agregar FAQPage Schema
7. ✅ Agregar contacto visible en footer (teléfono, email)
8. ✅ Crear página de Política de Privacidad

### **Fase 3: Mejoras (1-2 días)**
9. ✅ Crear página de Términos y Condiciones
10. ✅ Mejorar información de horarios
11. ✅ Verificar y mejorar navegación interna

---

## 📊 MÉTRICAS DE ÉXITO

### **Antes de las mejoras:**
- Open Graph: 1/5 páginas completas (20%)
- Canonical URLs: 1/5 páginas (20%)
- OG Images: 1/5 páginas (20%)
- Schema.org completo: 60% (faltan Breadcrumbs y FAQ)

### **Después de las mejoras (objetivo):**
- Open Graph: 5/5 páginas completas (100%)
- Canonical URLs: 5/5 páginas (100%)
- OG Images: 5/5 páginas (100%)
- Schema.org completo: 90%+ (con Breadcrumbs y FAQ)

---

## 🎯 CONCLUSIÓN

El proyecto tiene **bases sólidas** de SEO/GEO implementadas, pero necesita **completar los metadatos** en todas las páginas y agregar **mejoras de sentido común** para maximizar el potencial de posicionamiento y conversión.

**Prioridad:** Completar Open Graph y canonical URLs en todas las páginas es **crítico** para el SEO y las redes sociales.

