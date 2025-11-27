import { MetadataRoute } from 'next';

/**
 * IMPORTANTE: robots.ts para DEMO - NO INDEXAR
 * Este archivo bloquea TODOS los bots de búsqueda para evitar indexación
 * Para producción: renombrar a robots.ts.backup y usar robots.ts.production
 */

export default function robots(): MetadataRoute.Robots {
  // PRODUCCIÓN: Permitir indexación
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/', // Ejemplo de ruta protegida si existiera
      },
    ],
    sitemap: 'https://dreizeer.com/sitemap.xml',
  };
}

