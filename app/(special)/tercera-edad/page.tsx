import type { Metadata } from "next";
import Link from "next/link";
import SchemaScript from "../../components/SchemaScript";
import ImageOptimized from "../../components/ImageOptimized";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "../../lib/utils/whatsapp";

// Base URL para metadatos
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Gimnasia a Domicilio para Mayores de 65 | Envejecimiento Activo - Dreizeer",
  description: "Ejercicios para mayores de 65 años adaptados a movilidad reducida. Gimnasia a domicilio y envejecimiento activo con entrenador personal especializado.",
  keywords: "gimnasia a domicilio, envejecimiento activo, ejercicios para mayores de 65, movilidad reducida, entrenador personal tercera edad",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/tercera-edad',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Dreizeer',
    title: 'Gimnasia a Domicilio para Mayores de 65 | Envejecimiento Activo - Dreizeer',
    description: 'Ejercicios para mayores de 65 años adaptados a movilidad reducida. Gimnasia a domicilio y envejecimiento activo con entrenador personal especializado.',
    url: `${baseUrl}/tercera-edad`,
    images: [
      {
        url: `${baseUrl}/tercera-edad/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Gimnasia a Domicilio para Mayores - Dreizeer',
      },
    ],
  },
};

export default function TerceraEdadPage() {
  return (
    <>
      <SchemaScript
        type="local"
        data={{
          name: "Gimnasia a Domicilio para Mayores - Dreizeer",
          description: "Ejercicios para mayores de 65 años adaptados a movilidad reducida. Gimnasia a domicilio y envejecimiento activo con entrenador personal especializado.",
          priceRange: "desde 40€/sesión",
          address: {
            addressLocality: "Madrid",
            addressRegion: 'Comunidad de Madrid',
            addressCountry: 'ES',
          },
          url: "https://dreizeer.com/tercera-edad",
        }}
      />
      <SchemaScript
        type="breadcrumb"
        data={[
          { name: "Inicio", url: "/" },
          { name: "Tercera Edad", url: "/tercera-edad" },
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
                    color: '#ffffff', // Blanco puro para WCAG AAA
                    fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', // Tamaño base aumentado
                  }}
                >
                  Gimnasia a Domicilio para <span style={{ color: 'var(--color-brand-primary)' }}>Envejecimiento Activo</span>
                </h1>
                <p
                  className="text-xl md:text-2xl mb-8 leading-relaxed"
                  style={{
                    color: '#f3f4f6', // gray-100 - Contraste mejorado para WCAG AAA
                    fontSize: 'clamp(1.25rem, 2.75vw, 1.75rem)', // Tamaño aumentado para legibilidad
                  }}
                >
                  Ejercicios para mayores de 65 años adaptados a tu condición física.
                  Mejora tu movilidad reducida y mantén tu independencia con entrenamiento personalizado en casa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.seniors)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 rounded-lg text-xl font-bold text-center transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'var(--color-brand-primary)',
                      color: '#ffffff', // Blanco puro para máximo contraste
                      minHeight: '56px', // Tamaño mínimo táctil WCAG AAA
                      minWidth: '200px', // Ancho mínimo para fácil pulsación
                    }}
                  >
                    Solicitar Consulta Gratuita
                  </a>
                  <Link
                    href="/#contacto"
                    className="px-10 py-5 rounded-lg text-xl font-semibold text-center border-2 transition-colors"
                    style={{
                      borderColor: 'var(--color-brand-primary)',
                      color: 'var(--color-brand-primary)',
                      minHeight: '56px', // Tamaño mínimo táctil WCAG AAA
                      minWidth: '200px',
                    }}
                  >
                    Más Información
                  </Link>
                </div>
              </div>

              {/* Imagen representativa */}
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <ImageOptimized
                  src="/images/servicios/gimnasia-mantenimiento-mayores-domicilio-madrid.webp"
                  alt="Entrenador personal asistiendo en ejercicios de movilidad para tercera edad a domicilio en Madrid"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-6xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              ¿Por qué elegir Gimnasia a Domicilio para Envejecimiento Activo?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#ffffff', fontSize: '1.5rem' }}>
                  Entrenamiento en Casa
                </h3>
                <p className="leading-relaxed" style={{ color: '#f3f4f6', fontSize: '1.25rem' }}>
                  Sin desplazamientos ni barreras. Realizamos ejercicios para mayores de 65 años
                  directamente en tu hogar, adaptándonos a tu espacio y necesidades.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#ffffff', fontSize: '1.5rem' }}>
                  Adaptado a Movilidad Reducida
                </h3>
                <p className="leading-relaxed" style={{ color: '#f3f4f6', fontSize: '1.25rem' }}>
                  Cada sesión está diseñada específicamente para personas con movilidad reducida.
                  Trabajamos con ejercicios seguros y progresivos que respetan tus limitaciones.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#ffffff', fontSize: '1.5rem' }}>
                  Servicio Disponible para Centros Municipales
                </h3>
                <p className="leading-relaxed" style={{ color: '#f3f4f6', fontSize: '1.25rem' }}>
                  Ofrecemos programas adaptados para centros municipales y asociaciones para facilitar
                  actividades de envejecimiento activo accesibles y de calidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programa Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Nuestro Programa de Ejercicios para Mayores de 65
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
                  Evaluación Inicial Personalizada
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  Antes de comenzar, realizamos una evaluación completa de tu condición física,
                  historial médico y nivel de movilidad reducida. Esta valoración nos permite diseñar
                  un programa de gimnasia a domicilio completamente adaptado a ti.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
                  Ejercicios Adaptados para Envejecimiento Activo
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  Nuestro programa incluye ejercicios específicamente diseñados para mayores de 65 años:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  <li>Ejercicios de equilibrio y coordinación para prevenir caídas</li>
                  <li>Fortalecimiento muscular adaptado a movilidad reducida</li>
                  <li>Ejercicios de flexibilidad y amplitud de movimiento</li>
                  <li>Actividades cardiovasculares suaves y progresivas</li>
                  <li>Ejercicios funcionales para actividades diarias</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
                  Seguimiento y Ajustes Continuos
                </h3>
                <p className="leading-relaxed" style={{ color: '#f3f4f6', fontSize: '1.25rem' }}>
                  El envejecimiento activo requiere un enfoque dinámico. Ajustamos tu programa de gimnasia
                  a domicilio según tu evolución, siempre priorizando tu seguridad y bienestar.
                  Trabajamos en estrecha colaboración con tu médico si es necesario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Precios Section */}
        <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-5xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Tarifas de Gimnasia a Domicilio
            </h2>

            {/* Módulo de Comparación Individual vs Grupo */}
            <div className="mb-12">
              <h3
                className="text-2xl md:text-3xl font-bold mb-6 text-center"
                style={{ color: 'var(--color-text-white)' }}
              >
                Entrena con vecinos y ahorra
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                  <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-white)' }}>
                    Entrenamiento Personal
                  </h4>
                  <p className="text-4xl font-bold mb-2" style={{ color: 'var(--color-brand-primary)' }}>
                    desde 40€
                  </p>
                  <p className="text-sm mb-4" style={{ color: '#9ca3af' }}>
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
                  <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-white)' }}>
                    Grupo de 3 (Tú + 2 amigos)
                  </h4>
                  <p className="text-4xl font-bold mb-2" style={{ color: 'var(--color-brand-primary)' }}>
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
              <p
                className="text-center mb-6"
                style={{ color: '#e5e7eb', fontSize: '1.125rem' }}
              >
                Forma un grupo con vecinos, amigos o familiares y divide el costo. Misma calidad, mejor precio.
              </p>
            </div>

            {/* Pack Individual Detallado */}
            <div className="max-w-md mx-auto">
              <div
                className="p-8 rounded-lg border-2"
                style={{
                  backgroundColor: 'var(--color-neutral-900)',
                  borderColor: 'var(--color-brand-primary)',
                }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-white)' }}>
                    Pack A Domicilio Individual
                  </h3>
                  <p className="mb-4" style={{ color: '#d1d5db', fontSize: '1.125rem' }}>
                    Sesiones individuales en tu hogar
                  </p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold" style={{ color: 'var(--color-brand-primary)' }}>
                      desde 40€
                    </span>
                    <span className="text-xl ml-2" style={{ color: '#d1d5db' }}>
                      /sesión individual
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Entrenamiento personalizado adaptado a movilidad reducida</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Material incluido (no necesitas equipamiento)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Programa de envejecimiento activo completo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Seguimiento y ajustes continuos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Descuentos para grupos de centros municipales</span>
                  </li>
                </ul>

                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.seniors)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-8 py-5 rounded-lg font-bold transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--color-brand-primary)',
                    color: '#ffffff',
                    minHeight: '56px', // Tamaño mínimo táctil WCAG AAA
                    fontSize: '1.25rem',
                  }}
                >
                  Consultar Disponibilidad
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Comienza tu Camino hacia el Envejecimiento Activo
            </h2>
            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ color: '#e5e7eb', fontSize: '1.25rem' }}
            >
              Si tienes más de 65 años y buscas mejorar tu movilidad reducida, nuestros ejercicios
              para mayores están diseñados para ti. La gimnasia a domicilio te permite mantener
              tu independencia y calidad de vida desde la comodidad de tu hogar.
            </p>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: '#d1d5db', fontSize: '1.125rem' }}
            >
              Ofrecemos una primera sesión de valoración gratuita para conocerte y explicarte
              cómo podemos ayudarte. También ofrecemos servicios especiales para grupos de centros municipales
              para facilitar el acceso a nuestros servicios.
            </p>
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.seniors)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-lg text-xl font-bold transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--color-brand-primary)',
                color: '#ffffff',
                minHeight: '56px', // Tamaño mínimo táctil WCAG AAA
                minWidth: '250px',
              }}
            >
              Solicitar Sesión Gratuita
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
