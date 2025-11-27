import { MetadataRoute } from 'next';

/**
 * Sitemap dinámico para Dreizeer
 * Incluye todas las páginas estáticas y genera dinámicamente las páginas de barrios
 */

// Base URL del sitio
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
    : 'https://dreizeer.com';

// Definición de barrios para páginas locales dinámicas
const neighborhoods = [
    // Madrid
    { city: 'madrid', neighborhood: 'retiro' },
    { city: 'madrid', neighborhood: 'salamanca' },
    { city: 'madrid', neighborhood: 'chamberi' },
    { city: 'madrid', neighborhood: 'vallecas' },
    { city: 'madrid', neighborhood: 'madrid-rio' },
    { city: 'madrid', neighborhood: 'arganzuela' },
    { city: 'madrid', neighborhood: 'moncloa' },

    // Rivas-Vaciamadrid
    { city: 'rivas-vaciamadrid', neighborhood: 'futura' },
    { city: 'rivas-vaciamadrid', neighborhood: 'covibar' },

    // Otras ciudades cercanas
    { city: 'getafe', neighborhood: 'centro' },
];

export default function sitemap(): MetadataRoute.Sitemap {
    // URLs estáticas principales
    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/sobre-mi`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tercera-edad`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/online-coaching`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/privacidad`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terminos`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // URLs dinámicas de barrios (GEO)
    const neighborhoodUrls: MetadataRoute.Sitemap = neighborhoods.map(({ city, neighborhood }) => ({
        url: `${baseUrl}/${city}/${neighborhood}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85, // Alta prioridad para páginas GEO
    }));

    // Combinar todas las URLs
    return [...staticUrls, ...neighborhoodUrls];
}
