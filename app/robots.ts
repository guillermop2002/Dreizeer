import { MetadataRoute } from 'next';

/**
 * Configuración de robots.ts para PRODUCCIÓN
 * Permite la indexación de todo el sitio.
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
    sitemap: 'https://dreizeer.es/sitemap.xml',
  };
}

