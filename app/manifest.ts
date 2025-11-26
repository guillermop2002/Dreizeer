import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Dreizeer - Entrenador Personal',
        short_name: 'Dreizeer',
        description: 'Entrenador personal especializado en Madrid y Online. Máster en Rendimiento Deportivo y corrección de técnica.',
        start_url: '/',
        display: 'standalone',
        background_color: '#171717',
        theme_color: '#ef4444',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
