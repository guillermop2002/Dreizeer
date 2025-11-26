import { MetadataRoute } from 'next';

/**
 * IMPORTANTE: robots.ts para DEMO - NO INDEXAR
 * Este archivo bloquea TODOS los bots de búsqueda para evitar indexación
 * Para producción: renombrar a robots.ts.backup y usar robots.ts.production
 */

export default function robots(): MetadataRoute.Robots {
  // DEMO: Bloquear todo para evitar indexación
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/', // Bloquear TODO
      },
    ],
  };
}

