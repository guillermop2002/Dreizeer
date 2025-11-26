# 📋 PLAN DE IMPLEMENTACIÓN: Estrategia de Precios y Ofertas Rotativas

## 🎯 Objetivo
Implementar un sistema centralizado de precios con ofertas rotativas mensuales que mejore el SEO (CTR en Google) y cumpla con la normativa legal, usando los precios actuales del proyecto.

---

## 📊 Estado Actual Verificado

### Precios Actuales en el Código:
- **Individual**: `desde 30€/sesión` (PrecioSchema: `30.00`)
- **Grupo**: `desde 60€ total` → `20€ por persona` (PrecioSchema: `20.00`)
- **Online**: `desde 50€/mes` (PrecioSchema: `50.00`)

### Componentes Existentes:
- ✅ `app/utils/schemaGenerator.ts` - Genera schemas JSON-LD
- ✅ `app/components/SchemaScript.tsx` - Inyecta schemas en páginas
- ✅ `app/(local)/[city]/[neighborhood]/page.tsx` - Páginas locales con precios hardcodeados

### Componentes NO Existentes (a crear):
- ❌ Archivo de configuración centralizada de precios
- ❌ Componente `PricingCards` con SEO
- ❌ Componente `ValueAddBanner` con ofertas rotativas
- ❌ Función `getCurrentMonthlyOffer()`

---

## 🚀 PLAN DE IMPLEMENTACIÓN (4 FASES)

---

## **FASE 1: Configuración Centralizada de Datos**

### Objetivo
Crear un "cerebro" centralizado donde se gestionen todos los precios y ofertas, evitando hardcodear valores en múltiples archivos.

### Archivos a Crear:
- `app/lib/config/pricing-and-offers.ts`

### Estructura de Datos:

```typescript
// PRICING_PLANS - Array de planes con precios actuales
[
  {
    id: 'group',
    title: 'Small Group Training',
    precioMostrado: 'Desde 20€/pers',
    precioSchema: '20.00',
    detalles: 'Pack mensual desde 60€',
    tipo: 'grupo'
  },
  {
    id: 'individual',
    title: 'Entrenamiento 1:1',
    precioMostrado: 'Desde 30€/sesión',
    precioSchema: '30.00',
    detalles: 'Sesión individual personalizada',
    tipo: 'individual'
  },
  {
    id: 'online',
    title: 'Asesoría Híbrida',
    precioMostrado: 'Desde 50€/mes',
    precioSchema: '50.00',
    detalles: 'Coaching online con videoanálisis',
    tipo: 'online'
  }
]

// getCurrentMonthlyOffer() - Función que retorna oferta del mes
// Mes IMPAR (Enero, Marzo, Mayo...): Valoración Biomecánica GRATIS (Valorada en 30€)
// Mes PAR (Febrero, Abril, Junio...): 2ª Sesión de Técnica GRATIS (Valorada en 50€)
```

### Validaciones:
- ✅ Verificar que la carpeta `app/lib/config/` no existe (crearla)
- ✅ Usar precios actuales: 30€ individual, 20€ grupo, 50€ online
- ✅ Función debe calcular mes actual y retornar `validThrough` (último día del mes)

### Tests Post-Implementación:
- [ ] Verificar que `getCurrentMonthlyOffer()` retorna oferta correcta según mes
- [ ] Verificar que `validThrough` es el último día del mes actual
- [ ] Verificar tipos TypeScript correctos

---

## **FASE 2: Componente de Precios con SEO ("Desde")**

### Objetivo
Crear componente reutilizable que muestre precios de forma atractiva y los inyecte correctamente en Schema.org para SEO.

### Archivos a Crear:
- `app/components/pricing/PricingCards.tsx`

### Funcionalidades Requeridas:

1. **Diseño Visual (Tailwind CSS)**:
   - Tarjetas limpias con diseño dark (usar variables CSS del tema)
   - Precio numérico grande y destacado (ej: `20€`)
   - Sufijo en pequeño (`/pers`, `/sesión`, `/mes`)
   - Para grupos: mostrar claramente "Desde 20€/pers" y debajo en pequeño "Pack desde 60€"

2. **Inyección de Schema JSON-LD (CRÍTICO)**:
   - Cada tarjeta debe incluir un `<script type="application/ld+json">`
   - Usar esquema `Service` o `Product`
   - Propiedad `priceSpecification` con `minPrice` igual al `PrecioSchema` de la configuración
   - `priceCurrency: 'EUR'`
   - Objetivo: Google lea `20.00 EUR` como precio mínimo

3. **Props del Componente**:
   - `plans`: Array de planes desde configuración
   - `featuredPlanId?`: ID del plan a destacar (opcional)
   - `showGroupPack?`: Boolean para mostrar/ocultar detalle del pack grupal

### Integración con Configuración:
- Importar `PRICING_PLANS` desde `app/lib/config/pricing-and-offers.ts`
- Usar `precioSchema` para el Schema.org
- Usar `precioMostrado` para la UI

### Validaciones:
- ✅ Verificar que la carpeta `app/components/pricing/` no existe (crearla)
- ✅ Schema JSON-LD debe ser válido (usar validador)
- ✅ Diseño responsive (mobile-first)
- ✅ Accesibilidad (WCAG): contraste, tamaños de fuente

### Tests Post-Implementación:
- [ ] Renderizar componente en página de prueba
- [ ] Verificar Schema JSON-LD en DevTools (Network > Response)
- [ ] Validar Schema en [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verificar diseño responsive en diferentes tamaños de pantalla
- [ ] Verificar accesibilidad con herramientas de auditoría

---

## **FASE 3: Banner de Oferta de Valor Añadido Rotativa**

### Objetivo
Crear banner que muestre la oferta del mes (regalo, no descuento) con Schema.org para crear urgencia en buscadores.

### Archivos a Crear:
- `app/components/offers/ValueAddBanner.tsx`

### Funcionalidades Requeridas:

1. **Lógica de Oferta Rotativa**:
   - Usar `getCurrentMonthlyOffer()` de la configuración
   - **Meses IMPARES**: "🎁 Valoración Biomecánica GRATIS (Valorada en 30€)"
   - **Meses PARES**: "🎁 2ª Sesión de Técnica GRATIS (Valorada en 50€)"
   - Mostrar fecha de validez: "Solo hasta fin de mes"

2. **Renderizado Híbrido (Server Component)**:
   - Usar Server Component de Next.js 14 para evitar problemas de hidratación
   - Si es necesario, usar `suppressHydrationWarning` solo en la fecha
   - O mejor: calcular fecha en servidor y pasarla como prop

3. **Diseño del Banner**:
   - Fondo oscuro o color de acento fuerte (usar `var(--color-brand-primary)`)
   - Texto principal: "🎁 OFERTA DE:"
   - Badge destacado: "Valorado en [Value]"
   - Subtexto: " - Solo hasta [fecha fin de mes]"
   - Diseño llamativo pero no intrusivo

4. **Schema de Oferta (AddOn)**:
   - Generar JSON-LD tipo `Offer`
   - `price: 0` (gratis)
   - `priceCurrency: 'EUR'`
   - `validThrough`: fecha de fin de mes (formato ISO 8601)
   - `itemOffered`: descripción del servicio regalado

### Validaciones:
- ✅ Verificar que la carpeta `app/components/offers/` no existe (crearla)
- ✅ Fecha debe calcularse correctamente (último día del mes)
- ✅ Schema JSON-LD debe incluir `validThrough` correcto
- ✅ Banner debe ser responsive

### Tests Post-Implementación:
- [ ] Verificar que muestra oferta correcta según mes actual
- [ ] Verificar que `validThrough` es correcto (último día del mes)
- [ ] Validar Schema JSON-LD en Google Rich Results Test
- [ ] Verificar diseño responsive
- [ ] Probar cambio de mes (simular con fecha diferente)

---

## **FASE 4: Integración en Páginas Locales**

### Objetivo
Integrar los nuevos componentes en las páginas locales, con lógica condicional según barrio/ciudad.

### Archivos a Modificar:
- `app/(local)/[city]/[neighborhood]/page.tsx`

### Cambios Requeridos:

1. **Importar Componentes**:
   ```typescript
   import PricingCards from '../../../components/pricing/PricingCards';
   import ValueAddBanner from '../../../components/offers/ValueAddBanner';
   import { PRICING_PLANS } from '../../../lib/config/pricing-and-offers';
   ```

2. **Colocar ValueAddBanner**:
   - Justo debajo del Hero (después del H1)
   - Antes de la sección de características
   - Maximizar visibilidad para conversión

3. **Reemplazar Sección de Precios Actual**:
   - Eliminar o comentar la sección "Precios Localizados" actual (líneas ~541-643)
   - Agregar nueva sección "Tarifas Transparentes" con `<PricingCards />`

4. **Lógica Condicional por Barrio**:
   - **Rivas (Futura, Covibar)**: Destacar plan de Grupos (`featuredPlanId="group"`)
   - **Madrid Centro (Salamanca, Chamberí, Retiro)**: Destacar plan Individual (`featuredPlanId="individual"`)
   - **Vallecas, Getafe**: Mostrar todos los planes sin destacar ninguno

5. **Actualizar Schema Principal**:
   - Modificar `SchemaScript` para usar precios de la configuración
   - Asegurar que `minPrice` en Schema sea `20.00` para grupos (SEO)

6. **Eliminar Código Hardcodeado**:
   - Eliminar `priceRange` hardcodeado de `getNeighborhoodConfig()`
   - Usar precios desde `PRICING_PLANS`

### Validaciones:
- ✅ No romper funcionalidad existente
- ✅ Mantener diseño responsive
- ✅ Verificar que Schema JSON-LD sigue siendo válido
- ✅ Verificar que no hay errores de linter
- ✅ Verificar que todas las páginas locales funcionan correctamente

### Tests Post-Implementación:
- [ ] Probar página de Rivas Futura (debe destacar grupo)
- [ ] Probar página de Salamanca (debe destacar individual)
- [ ] Probar página de Vallecas (debe mostrar todos sin destacar)
- [ ] Verificar Schema JSON-LD en todas las páginas
- [ ] Verificar que banner de oferta aparece correctamente
- [ ] Verificar diseño responsive en todas las páginas
- [ ] Verificar que no hay errores en consola
- [ ] Verificar que no hay errores de linter

---

## 📝 NOTAS IMPORTANTES

### Precios a Usar (NO los ejemplos del prompt):
- **Individual**: `desde 30€/sesión` (Schema: `30.00`)
- **Grupo**: `desde 20€/persona` (Schema: `20.00`) → Pack `desde 60€`
- **Online**: `desde 50€/mes` (Schema: `50.00`)

### Estrategia SEO:
- Google verá `minPrice: 20.00 EUR` para grupos → Mejor CTR
- Usuario verá "Desde 20€/pers (Pack 60€)" → Entiende la oferta
- Legal: No bajamos precios, regalamos servicios extra con valor real

### Limpieza Post-Implementación:
- ✅ Eliminar archivos de prueba si se crean
- ✅ Eliminar scripts de test temporales
- ✅ Eliminar comentarios de debug
- ✅ Verificar que no quedan `console.log()` en producción

---

## ✅ CHECKLIST FINAL DE VALIDACIÓN

Antes de considerar la implementación completa:

- [ ] Fase 1: Configuración centralizada creada y funcionando
- [ ] Fase 2: Componente PricingCards creado y validado con Schema
- [ ] Fase 3: Banner ValueAddBanner creado y rotando correctamente
- [ ] Fase 4: Integración completa en páginas locales
- [ ] Todos los Schemas JSON-LD validados en Google Rich Results Test
- [ ] Diseño responsive verificado en mobile, tablet y desktop
- [ ] Sin errores de linter
- [ ] Sin errores en consola del navegador
- [ ] Archivos temporales y scripts de test eliminados
- [ ] Código limpio y listo para producción

---

## 🎯 RESULTADO ESPERADO

Después de implementar las 4 fases:

1. **SEO Mejorado**: Google mostrará "Desde 20€" en resultados de búsqueda para Rivas
2. **Conversión Mejorada**: Banner de oferta rotativa crea urgencia y valor percibido
3. **Mantenibilidad**: Precios centralizados, fácil de actualizar
4. **Legalidad**: Cumplimos normativa al regalar servicios con valor real
5. **UX Mejorada**: Precios claros y transparentes para el usuario

---

**Última actualización**: 2024-11-23
**Estado**: 📋 PLAN DISEÑADO - LISTO PARA IMPLEMENTACIÓN

