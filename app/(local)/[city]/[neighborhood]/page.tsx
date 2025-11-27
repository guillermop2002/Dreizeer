import type { Metadata } from "next";
import Link from "next/link";
import SchemaScript from "../../../components/SchemaScript";
import ImageOptimized from "../../../components/ImageOptimized";
import ValueAddBanner from "../../../components/offers/ValueAddBanner";
import PricingCards from "../../../components/pricing/PricingCards";
import { getFeaturedPlanIdByNeighborhood, PRICING_PLANS } from "../../../lib/config/pricing-and-offers";
import { getWhatsAppLink } from "../../../lib/utils/whatsapp";
import { capitalize } from "../../../lib/utils/text";

type Props = {
  params: {
    city: string;
    neighborhood: string;
  };
};

// Base URL para metadatos
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
  : 'http://localhost:3000';

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = decodeURIComponent(params.city);
  const neighborhood = decodeURIComponent(params.neighborhood);
  const displayCity = capitalize(city);
  const displayNeighborhood = capitalize(neighborhood);

  const title = `Entrenador Personal en ${displayNeighborhood}, ${displayCity} | A Domicilio & Parque - Dreizeer`;
  const description = `Entrenamiento personalizado en ${displayNeighborhood}, ${displayCity}. Servicios a domicilio y al aire libre. Precios desde 25€/persona en grupos, desde 40€/sesión individual.`;
  const url = `${baseUrl}/${city}/${neighborhood}`;

  return {
    title,
    description,
    keywords: `entrenador personal ${displayNeighborhood}, entrenador personal ${displayCity}, entrenamiento a domicilio ${displayNeighborhood}, entrenamiento al aire libre ${displayCity}`,
    // IMPORTANTE: robots index true para producción
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${city}/${neighborhood}`,
    },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      siteName: 'Dreizeer',
      title,
      description,
      url,
      // La imagen OG se genera dinámicamente con opengraph-image.tsx
      images: [
        {
          url: `${url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `Entrenador Personal en ${displayNeighborhood}, ${displayCity} - Dreizeer`,
        },
      ],
    },
  };
}

// Configuración de contenido por barrio
type NeighborhoodConfig = {
  emphasis: string[];
  features: string[];
  tone: 'premium' | 'outdoor' | 'accessible';
  ctaText: string;
};

function getNeighborhoodConfig(neighborhood: string): NeighborhoodConfig {
  const normalized = neighborhood.toLowerCase();

  // Retiro o Madrid Río - Enfoque al aire libre
  if (normalized.includes('retiro') || normalized.includes('madrid río') || normalized.includes('madrid-rio')) {
    return {
      emphasis: ['Entrenamiento al aire libre', 'Calistenia', 'Parques y espacios abiertos'],
      features: [
        'Sesiones en parques y espacios verdes',
        'Calistenia y ejercicios funcionales',
        'Aprovechamiento del entorno natural',
        'Entrenamiento al aire libre todo el año',
      ],
      tone: 'outdoor',
      ctaText: 'Reservar Entrenamiento al Aire Libre',
    };
  }

  // Barrio Salamanca o Chamberí - Premium y exclusividad
  if (normalized.includes('salamanca') || normalized.includes('chamberí') || normalized.includes('chamberi')) {
    return {
      emphasis: ['Entrenamiento a domicilio', 'Exclusividad', 'Servicio premium'],
      features: [
        'Entrenamiento a domicilio exclusivo',
        'Atención personalizada de alta calidad',
        'Flexibilidad de horarios',
        'Programas personalizados premium',
      ],
      tone: 'premium',
      ctaText: 'Solicitar Entrenamiento Premium',
    };
  }

  // Rivas Futura - Zona nueva, jóvenes profesionales, grupos
  if (normalized.includes('futura') || normalized.includes('rivas-futura')) {
    return {
      emphasis: ['Grupos reducidos', 'Cerca del H2O', 'Metro Rivas Futura', 'Entrena antes de trabajar'],
      features: [
        'Entrenamiento en grupo reducido (hasta 3 personas)',
        'Ideal para entrenar antes o después del trabajo',
        'Cerca del Centro Comercial H2O y Metro Rivas Futura',
        'Precios accesibles divididos entre el grupo',
      ],
      tone: 'accessible',
      ctaText: 'Reservar para Grupo de 3',
    };
  }

  // Rivas Covibar - Zona histórica, tercera edad y vecinos
  if (normalized.includes('covibar') || normalized.includes('rivas-covibar')) {
    return {
      emphasis: ['Gimnasia y salud', 'Cerca del Centro de Salud', 'Parque de Asturias', 'Enfoque vecinal'],
      features: [
        'Entrenamiento adaptado a tercera edad y movilidad reducida',
        'Cerca del Centro de Salud y Parque de Asturias',
        'Enfoque vecinal y comunitario',
        'Grupos reducidos para vecinos del barrio',
      ],
      tone: 'accessible',
      ctaText: 'Consultar para Vecinos',
    };
  }

  // Vallecas o Getafe - Accesible y grupos
  if (normalized.includes('vallecas') || normalized.includes('getafe')) {
    return {
      emphasis: ['Precios accesibles', 'Entrenamiento en grupo', 'Calidad al mejor precio'],
      features: [
        'Precios accesibles sin comprometer calidad',
        'Opción de entrenamiento en grupo reducido',
        'Programas adaptados a tu presupuesto',
        'Misma calidad profesional, mejor precio',
      ],
      tone: 'accessible',
      ctaText: 'Consultar Precios Accesibles',
    };
  }

  // Moncloa o Arganzuela - Urbano y parques
  if (normalized.includes('moncloa') || normalized.includes('arganzuela')) {
    return {
      emphasis: ['Entrenamiento funcional', 'Parques urbanos', 'A domicilio'],
      features: [
        'Entrenamiento en parques (Oeste, Madrid Río)',
        'Sesiones a domicilio personalizadas',
        'Flexibilidad horaria para profesionales',
        'Enfoque en salud y rendimiento',
      ],
      tone: 'outdoor',
      ctaText: 'Reservar Sesión',
    };
  }

  // Configuración por defecto
  return {
    emphasis: ['Entrenamiento personalizado', 'A domicilio y al aire libre'],
    features: [
      'Entrenamiento a domicilio disponible',
      'Sesiones al aire libre opcionales',
      'Programas adaptados a tu zona',
      'Flexibilidad de ubicación',
    ],
    tone: 'outdoor',
    ctaText: 'Solicitar Información',
  };
}

// Coordenadas aproximadas de los barrios clave
const neighborhoodCoordinates: Record<string, { lat: number; lng: number; radius: number }> = {
  'retiro': { lat: 40.4150, lng: -3.6833, radius: 2000 }, // Parque del Retiro
  'salamanca': { lat: 40.4290, lng: -3.6790, radius: 3000 }, // Barrio Salamanca
  'chamberi': { lat: 40.4350, lng: -3.7000, radius: 2500 }, // Chamberí
  'chamberí': { lat: 40.4350, lng: -3.7000, radius: 2500 }, // Chamberí con tilde
  'vallecas': { lat: 40.3650, lng: -3.6100, radius: 4000 }, // Vallecas
  'getafe': { lat: 40.3050, lng: -3.7300, radius: 5000 }, // Getafe
  'madrid río': { lat: 40.3980, lng: -3.6960, radius: 3000 }, // Madrid Río (Matadero)
  'madrid-rio': { lat: 40.3980, lng: -3.6960, radius: 3000 }, // Madrid Río con guion
  'arganzuela': { lat: 40.4000, lng: -3.6960, radius: 3000 }, // Arganzuela
  'moncloa': { lat: 40.4350, lng: -3.7190, radius: 2500 }, // Moncloa
  'futura': { lat: 40.3380, lng: -3.5200, radius: 3000 }, // Rivas Futura (Auditorio Miguel Ríos)
  'rivas-futura': { lat: 40.3380, lng: -3.5200, radius: 3000 }, // Rivas Futura con guion
  'covibar': { lat: 40.3450, lng: -3.5300, radius: 2500 }, // Rivas Covibar (Centro de Salud)
  'rivas-covibar': { lat: 40.3450, lng: -3.5300, radius: 2500 }, // Rivas Covibar con guion
};

export default function LocalLandingPage({ params }: Props) {
  const city = decodeURIComponent(params.city);
  const neighborhood = decodeURIComponent(params.neighborhood);
  const displayCity = capitalize(city);
  const displayNeighborhood = capitalize(neighborhood);
  const config = getNeighborhoodConfig(neighborhood);

  // Obtener coordenadas para el schema
  const normalizedNeighborhood = neighborhood.toLowerCase();
  const coords = neighborhoodCoordinates[normalizedNeighborhood] ||
    neighborhoodCoordinates[normalizedNeighborhood.replace(' ', '-')] ||
    { lat: 40.4168, lng: -3.7038, radius: 5000 }; // Madrid centro por defecto

  // Obtener plan destacado según el barrio
  const featuredPlanId = getFeaturedPlanIdByNeighborhood(neighborhood);

  return (
    <>
      <SchemaScript
        type="local"
        data={{
          name: `Entrenador Personal en ${displayNeighborhood}, ${displayCity} - Dreizeer`,
          description: `Entrenamiento personalizado en ${displayNeighborhood}, ${displayCity}. ${config.emphasis.join(', ')}. Precios desde 25€/persona en grupos, desde 40€/sesión individual.`,
          latitude: coords.lat,
          longitude: coords.lng,
          radius: coords.radius,
          priceRange: `desde 25€`,
          address: {
            addressLocality: displayCity,
            addressRegion: 'Comunidad de Madrid',
            addressCountry: 'ES',
          },
          url: `${baseUrl}/${city}/${neighborhood}`,
        }}
      />
      <SchemaScript
        type="breadcrumb"
        data={[
          { name: 'Inicio', url: '/' },
          { name: displayCity, url: `/${city}` },
          { name: displayNeighborhood, url: `/${city}/${neighborhood}` },
        ]}
      />
      <div
        className="min-h-screen"
        style={{
          backgroundColor: 'var(--color-neutral-900)',
          color: 'var(--color-text-white)',
        }}
      >
        {/* Hero Section con Imagen */}
        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{
                    color: 'var(--color-text-white)',
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  }}
                >
                  Entrenador Personal en <span style={{ color: 'var(--color-brand-primary)' }}>{displayNeighborhood}</span>, {displayCity}
                </h1>
                <p
                  className="text-xl md:text-2xl mb-8 leading-relaxed"
                  style={{
                    color: '#e5e7eb',
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  }}
                >
                  {config.emphasis.map((item, index) => (
                    <span key={index}>
                      {item}
                      {index < config.emphasis.length - 1 ? ', ' : ''}
                    </span>
                  ))} en {displayNeighborhood}, {displayCity}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={getWhatsAppLink(`Hola, me interesa el ${config.ctaText} en ${displayNeighborhood}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-lg text-lg font-bold text-center transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'var(--color-brand-primary)',
                      color: 'var(--color-text-white)',
                    }}
                  >
                    {config.ctaText}
                  </a>
                  <Link
                    href="/#contacto"
                    className="px-8 py-4 rounded-lg text-lg font-semibold text-center border-2 transition-colors"
                    style={{
                      borderColor: 'var(--color-brand-primary)',
                      color: 'var(--color-brand-primary)',
                    }}
                  >
                    Ver Más Servicios
                  </Link>
                </div>
              </div>

              {/* Imagen según tipo de barrio */}
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <ImageOptimized
                  src={
                    neighborhood.toLowerCase() === 'retiro' || neighborhood.toLowerCase() === 'madrid río' || neighborhood.toLowerCase() === 'madrid-rio'
                      ? '/images/local/madrid/entrenamiento-personal-aire-libre-parque-retiro.webp'
                      : neighborhood.toLowerCase() === 'salamanca'
                        ? '/images/local/madrid/entrenador-personal-domicilio-barrio-salamanca-lujo.webp'
                        : neighborhood.toLowerCase() === 'chamberí' || neighborhood.toLowerCase() === 'chamberi'
                          ? '/images/local/madrid/fitness-domicilio-chamberi-material-incluido.webp'
                          : neighborhood.toLowerCase() === 'vallecas'
                            ? '/images/local/madrid/grupo-entrenamiento-economico-vallecas-madrid.webp'
                            : neighborhood.toLowerCase() === 'futura' || neighborhood.toLowerCase() === 'rivas-futura'
                              ? '/images/local/rivas/entrenador-personal-rivas-futura-grupos-reducidos.webp'
                              : neighborhood.toLowerCase() === 'covibar' || neighborhood.toLowerCase() === 'rivas-covibar'
                                ? '/images/local/rivas/gimnasia-salud-covibar-rivas-vaciamadrid.webp'
                                : config.tone === 'outdoor'
                                  ? '/images/local/madrid/entrenamiento-personal-aire-libre-parque-retiro.webp'
                                  : config.tone === 'premium'
                                    ? '/images/local/madrid/entrenador-personal-domicilio-barrio-salamanca-lujo.webp'
                                    : '/images/local/madrid/grupo-entrenamiento-economico-vallecas-madrid.webp'
                  }
                  alt={
                    neighborhood.toLowerCase() === 'retiro' || neighborhood.toLowerCase() === 'madrid río' || neighborhood.toLowerCase() === 'madrid-rio'
                      ? 'Clase de entrenamiento funcional individual en el Parque del Retiro, Madrid'
                      : neighborhood.toLowerCase() === 'salamanca'
                        ? 'Servicio de entrenador personal exclusivo a domicilio en Barrio de Salamanca'
                        : neighborhood.toLowerCase() === 'chamberí' || neighborhood.toLowerCase() === 'chamberi'
                          ? 'Entrenador personal llevando material deportivo a casa en Chamberí'
                          : neighborhood.toLowerCase() === 'vallecas'
                            ? 'Grupo reducido de entrenamiento funcional al aire libre en Vallecas'
                            : neighborhood.toLowerCase() === 'futura' || neighborhood.toLowerCase() === 'rivas-futura'
                              ? 'Entrenamiento de alta intensidad para profesionales en Rivas Futura'
                              : neighborhood.toLowerCase() === 'covibar' || neighborhood.toLowerCase() === 'rivas-covibar'
                                ? 'Ejercicios de salud y mantenimiento en el barrio de Covibar, Rivas'
                                : `Entrenamiento personal ${config.tone === 'outdoor' ? 'al aire libre' : config.tone === 'premium' ? 'a domicilio exclusivo' : 'en grupo reducido'} en ${displayNeighborhood}, ${displayCity}`
                  }
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Banner de Oferta de Valor Añadido */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl">
            <ValueAddBanner />
          </div>
        </section>

        {/* Características Específicas del Barrio */}
        <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-6xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Servicios de Entrenamiento en {displayNeighborhood}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {config.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg flex items-start"
                  style={{ backgroundColor: 'var(--color-neutral-900)' }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: '#e5e7eb' }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contenido Específico según el Barrio */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            {config.tone === 'outdoor' && (
              <div className="space-y-6">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-8 text-center"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  Entrenamiento al Aire Libre en {displayNeighborhood}
                </h2>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
                    Calistenia y Ejercicios Funcionales
                  </h3>
                  <p className="leading-relaxed mb-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                    En {displayNeighborhood}, aprovechamos los espacios verdes y parques para realizar sesiones de
                    entrenamiento al aire libre. Nuestro enfoque de calistenia utiliza el peso corporal y
                    elementos del entorno para crear rutinas efectivas y dinámicas.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                    Las sesiones al aire libre no solo mejoran tu condición física, sino que también
                    proporcionan beneficios mentales al entrenar en contacto con la naturaleza.
                  </p>
                </div>
              </div>
            )}

            {config.tone === 'premium' && (
              <div className="space-y-6">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-8 text-center"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  Entrenamiento a Domicilio Exclusivo en {displayNeighborhood}
                </h2>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
                    Servicio Premium y Personalizado
                  </h3>
                  <p className="leading-relaxed mb-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                    En {displayNeighborhood}, ofrecemos un servicio de entrenamiento a domicilio de máxima calidad.
                    Cada sesión está diseñada exclusivamente para ti, con atención personalizada y programas
                    adaptados a tus objetivos y estilo de vida.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                    Nuestro servicio premium incluye flexibilidad total de horarios, material profesional
                    incluido y seguimiento continuo para garantizar los mejores resultados.
                  </p>
                </div>
              </div>
            )}

            {config.tone === 'accessible' && (
              <div className="space-y-6">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-8 text-center"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  Entrenamiento Accesible en {displayNeighborhood}
                </h2>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
                    Calidad Profesional al Mejor Precio
                  </h3>
                  <p className="leading-relaxed mb-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                    En {displayNeighborhood}, creemos que el entrenamiento personalizado debe ser accesible para todos.
                    Ofrecemos precios competitivos sin comprometer la calidad del servicio profesional.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                    Además de sesiones individuales, también ofrecemos la opción de entrenamiento en grupo
                    reducido, permitiendo que compartas el costo mientras mantienes la atención personalizada.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                    Misma calidad, mejor precio. Tu salud y bienestar no deberían estar limitados por el presupuesto.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Módulo Small Group Savings - OBLIGATORIO en todas las páginas locales */}
        <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
          <div className="container mx-auto max-w-5xl">
            <div
              className="p-8 rounded-lg border-2"
              style={{
                backgroundColor: 'var(--color-neutral-800)',
                borderColor: 'var(--color-brand-primary)',
              }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-center"
                style={{ color: 'var(--color-brand-primary)' }}
              >
                ¿Te parece caro? Divídelo entre 3
              </h2>
              <p
                className="text-xl mb-8 text-center leading-relaxed"
                style={{ color: '#e5e7eb', fontSize: '1.25rem' }}
              >
                Forma un grupo de hasta 3 personas (amigos, pareja, vecinos) y reduce el precio por sesión drásticamente
              </p>

              {/* Calculadora Visual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Opción Individual */}
                <div
                  className="p-6 rounded-lg text-center"
                  style={{ backgroundColor: 'var(--color-neutral-900)' }}
                >
                  <div className="mb-4">
                    <svg className="w-16 h-16 mx-auto" style={{ color: 'var(--color-neutral-500)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-white)' }}>
                    Entrenamiento Individual
                  </h3>
                  <p className="text-3xl font-bold mb-2" style={{ color: 'var(--color-brand-primary)' }}>
                    desde 40€
                  </p>
                  <p className="text-sm" style={{ color: '#9ca3af' }}>
                    /sesión individual
                  </p>
                </div>

                {/* Opción Grupo */}
                <div
                  className="p-6 rounded-lg text-center border-2"
                  style={{
                    backgroundColor: 'var(--color-neutral-900)',
                    borderColor: 'var(--color-brand-primary)',
                  }}
                >
                  <div className="mb-4">
                    <svg className="w-16 h-16 mx-auto" style={{ color: 'var(--color-brand-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-white)' }}>
                    Grupo de 3 Personas
                  </h3>
                  <p className="text-3xl font-bold mb-2" style={{ color: 'var(--color-brand-primary)' }}>
                    desde 75€
                  </p>
                  <p className="text-sm mb-2" style={{ color: '#9ca3af' }}>
                    /sesión total (25€ por persona)
                  </p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-brand-primary)' }}>
                    ¡Ahorra 15€ por persona por sesión!
                  </p>
                </div>
              </div>

              {/* Beneficios del Grupo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                  <svg className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--color-brand-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text-white)' }}>
                    Mismo precio total
                  </p>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>
                    Dividido entre 3
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                  <svg className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--color-brand-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text-white)' }}>
                    Misma calidad
                  </p>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>
                    Atención personalizada
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                  <svg className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--color-brand-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text-white)' }}>
                    Más motivación
                  </p>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>
                    Entrena con amigos
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={getWhatsAppLink(`Hola, me interesa formar un grupo de 3 personas en ${displayNeighborhood}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg text-lg font-bold text-center transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--color-brand-primary)',
                    color: 'var(--color-text-white)',
                  }}
                >
                  Buscar Compañeros de Grupo
                </a>
                <a
                  href={getWhatsAppLink(`Hola, quiero reservar para un grupo de 3 en ${displayNeighborhood}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg text-lg font-semibold text-center border-2 transition-colors"
                  style={{
                    borderColor: 'var(--color-brand-primary)',
                    color: 'var(--color-brand-primary)',
                  }}
                >
                  Reservar para 3
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifas Transparentes */}
        <section id="tarifas" className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-6xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Tarifas Transparentes en {displayNeighborhood}, {displayCity}
            </h2>
            <PricingCards
              featuredPlanId={featuredPlanId || undefined}
              showGroupPack={true}
            />
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Comienza tu Entrenamiento en {displayNeighborhood}
            </h2>
            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ color: '#e5e7eb', fontSize: '1.25rem' }}
            >
              Si vives en {displayNeighborhood}, {displayCity}, y buscas un entrenador personal que se adapte a tu zona,
              estamos aquí para ayudarte. Ofrecemos una primera sesión de valoración gratuita para conocerte
              y diseñar el programa perfecto para ti.
            </p>
            <a
              href={getWhatsAppLink(`Hola, me gustaría solicitar una sesión gratuita en ${displayNeighborhood}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-lg font-bold transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--color-brand-primary)',
                color: 'var(--color-text-white)',
              }}
            >
              Solicitar Sesión Gratuita en {displayNeighborhood}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
