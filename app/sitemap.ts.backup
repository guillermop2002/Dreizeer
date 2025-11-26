import { MetadataRoute } from 'next';

/**
 * Sitemap dinámico para SEO
 * Genera URLs para todas las rutas estáticas y barrios clave
 */

// Barrios clave identificados para SEO local
const keyNeighborhoods = [
  // Madrid Centro
  { city: 'madrid', neighborhood: 'retiro' },
  { city: 'madrid', neighborhood: 'salamanca' },
  { city: 'madrid', neighborhood: 'chamberi' },
  { city: 'madrid', neighborhood: 'vallecas' },
  { city: 'madrid', neighborhood: 'madrid-rio' },
  { city: 'madrid', neighborhood: 'arganzuela' },
  { city: 'madrid', neighborhood: 'moncloa' },
  { city: 'madrid', neighborhood: 'getafe' },
  // Rivas-Vaciamadrid
  { city: 'rivas-vaciamadrid', neighborhood: 'futura' },
  { city: 'rivas-vaciamadrid', neighborhood: 'covibar' },
];

// Rutas estáticas del sitio
const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/sobre-mi', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/online-coaching', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/tercera-edad', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/privacidad', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terminos', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dreizeer.com';

  // Generar entradas para rutas estáticas
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Generar entradas para barrios clave (landing pages locales)
  const localEntries: MetadataRoute.Sitemap = keyNeighborhoods.map((location) => ({
    url: `${baseUrl}/${location.city}/${location.neighborhood}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // Alta prioridad para landing pages locales (Rivas y Madrid)
  }));

  // Combinar todas las entradas
  return [...staticEntries, ...localEntries];
}

