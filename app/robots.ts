import { MetadataRoute } from 'next';

/**
 * Robots.txt para control de indexación
 * Permite la indexación de todas las rutas generadas
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dreizeer.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin', // Panel de administración
          '/api', // Rutas de API si las hay
        ],
      },
      // Permitir específicamente a Googlebot
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin'],
      },
      // Permitir a otros bots importantes
      {
        userAgent: ['Googlebot-Image', 'Bingbot'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

