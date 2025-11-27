import type { Metadata } from "next";
import SchemaScript from "../components/SchemaScript";
import ImageOptimized from "../components/ImageOptimized";
import PricingCards from "../components/pricing/PricingCards";
import Testimonials from "../components/testimonials/Testimonials";
import ImageCarousel from "../components/gallery/ImageCarousel";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "../lib/utils/whatsapp";

// Base URL para metadatos
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Dreizeer - Entrenador Personal en Madrid | A Domicilio y Online",
  description: "Entrenador personal especializado en Madrid y Rivas-Vaciamadrid. Entrenamiento a domicilio, al aire libre y online con corrección de técnica. Precios desde 25€/persona en grupos, desde 40€/sesión individual.",
  keywords: "entrenador personal Madrid, entrenador personal Rivas, entrenamiento a domicilio, entrenamiento online, corrección de técnica, máster rendimiento deportivo",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Dreizeer',
    title: 'Dreizeer - Entrenador Personal en Madrid | A Domicilio y Online',
    description: 'Entrenador personal especializado en Madrid y Rivas-Vaciamadrid. Entrenamiento a domicilio, al aire libre y online con corrección de técnica.',
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Dreizeer - Entrenador Personal en Madrid',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <SchemaScript
        type="local"
        data={{
          name: "Dreizeer - Entrenador Personal",
          description: "Programas de entrenamiento personalizados para que alcances tus metas de una vez por todas. Entrenamiento a domicilio, online y al aire libre en Madrid.",
          latitude: 40.4168, // Madrid centro
          longitude: -3.7038,
          radius: 15000, // 15km de radio de servicio
          priceRange: "desde 40€",
          address: {
            addressLocality: "Madrid",
            addressRegion: 'Comunidad de Madrid',
            addressCountry: 'ES',
          },
          url: "https://dreizeer.es",
        }}
      />
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
        {/* Hero Section con Imagen */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0">
            <ImageOptimized
              src="/images/hero/entrenador-personal-hibrido-madrid-online.webp"
              alt="Entrenador personal corrigiendo técnica de sentadilla en Madrid"
              fill
              priority
              className="object-cover opacity-30"
            />
            {/* Overlay oscuro */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(17, 24, 39, 0.7)' }}
            />
          </div>

          {/* Contenido sobre la imagen */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-6"
              style={{ color: 'var(--color-text-white)' }}
            >
              Transforma tu cuerpo, <br />
              <span style={{ color: 'var(--color-brand-primary)' }}>conquista tu mente</span>
            </h1>
            <p
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
              style={{ color: '#e5e7eb' }}
            >
              Programas de entrenamiento personalizados para que alcances tus metas de una vez por todas. ¿Empezamos?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tarifas"
                className="px-8 py-4 rounded-lg text-lg font-bold transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-brand-primary)',
                  color: 'var(--color-text-white)',
                }}
              >
                Ver Mis Planes
              </a>
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg text-lg font-semibold border-2 transition-colors"
                style={{
                  borderColor: 'var(--color-brand-primary)',
                  color: 'var(--color-brand-primary)',
                }}
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        </section>

        {/* Sección de Servicios con Imágenes */}
        <section id="servicios" className="py-20 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          {/* ... (services content) */}
          <div className="container mx-auto max-w-6xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Mis Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Servicio 1: Presencial */}
              <div
                className="rounded-lg overflow-hidden"
                style={{ backgroundColor: 'var(--color-neutral-900)' }}
              >
                <div className="relative h-48">
                  <ImageOptimized
                    src="/images/hero/entrenamiento-personal-presencial-madrid.webp"
                    alt="Entrenamiento personal presencial a domicilio en Madrid"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-white)' }}>
                    Entrenamiento en Persona
                  </h3>
                  <p className="mb-4" style={{ color: '#d1d5db' }}>
                    Atención exclusiva y un plan 100% adaptado a ti. Maximiza tus resultados con mi supervisión directa en cada sesión.
                  </p>
                  <a
                    href="/#contacto"
                    className="inline-block px-4 py-2 rounded-lg font-semibold transition-colors"
                    style={{
                      backgroundColor: 'var(--color-brand-primary)',
                      color: 'var(--color-text-white)',
                    }}
                  >
                    Reservar
                  </a>
                </div>
              </div>

              {/* Servicio 2: Online */}
              <div
                className="rounded-lg overflow-hidden"
                style={{ backgroundColor: 'var(--color-neutral-900)' }}
              >
                <div className="relative h-48">
                  <ImageOptimized
                    src="/images/hero/entrenamiento-online-videoanalisis.webp"
                    alt="Entrenamiento online con videoanálisis y corrección de técnica"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-white)' }}>
                    Asesoramiento Online
                  </h3>
                  <p className="mb-4" style={{ color: '#d1d5db' }}>
                    Entrena donde y cuando quieras. Recibirás tu planificación a través de una app y tendremos seguimiento semanal para ajustar tu progreso.
                  </p>
                  <a
                    href="/online-coaching"
                    className="inline-block px-4 py-2 rounded-lg font-semibold transition-colors"
                    style={{
                      backgroundColor: 'var(--color-brand-primary)',
                      color: 'var(--color-text-white)',
                    }}
                  >
                    Ver Más
                  </a>
                </div>
              </div>

              {/* Servicio 3: Tercera Edad */}
              <div
                className="rounded-lg overflow-hidden"
                style={{ backgroundColor: 'var(--color-neutral-900)' }}
              >
                <div className="relative h-48">
                  <ImageOptimized
                    src="/images/hero/gimnasia-tercera-edad-domicilio.webp"
                    alt="Gimnasia a domicilio para mayores de 65 años en Madrid"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-white)' }}>
                    Gimnasia Tercera Edad
                  </h3>
                  <p className="mb-4" style={{ color: '#d1d5db' }}>
                    Ejercicios adaptados para mayores de 65 años. Mejora tu movilidad y mantén tu independencia con entrenamiento personalizado en casa.
                  </p>
                  <a
                    href="/tercera-edad"
                    className="inline-block px-4 py-2 rounded-lg font-semibold transition-colors"
                    style={{
                      backgroundColor: 'var(--color-brand-primary)',
                      color: 'var(--color-text-white)',
                    }}
                  >
                    Ver Más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería Section */}
        <section id="galeria" className="py-20 px-6" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
          <div className="container mx-auto max-w-full px-0">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Galería de Entrenamientos
            </h2>
            <ImageCarousel />
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <section id="tarifas" className="py-20 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-6xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Planes de Entrenamiento
            </h2>
            <PricingCards showGroupPack={true} />
          </div>
        </section>
      </div>
    </>
  );
}
