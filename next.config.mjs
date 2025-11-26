/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para evitar errores 404 en desarrollo
  reactStrictMode: true,
  swcMinify: true,
  // Configuración de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configuración para desarrollo - evita errores 404
  onDemandEntries: {
    // Período en ms que una página se mantiene en el buffer (aumentado)
    maxInactiveAge: 60 * 1000,
    // Número de páginas que deben mantenerse simultáneamente sin ser descartadas
    pagesBufferLength: 5,
  },
};

export default nextConfig;

