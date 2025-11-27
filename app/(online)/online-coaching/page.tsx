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
  title: "Entrenamiento Online con Corrección de Técnica | Videoanálisis - Dreizeer",
  description: "Planificación personalizada con entrenador humano real. Videoanálisis y corrección de técnica que las apps de IA no pueden ofrecer. Desde 50€/mes.",
  keywords: "corrección de técnica, videoanálisis, planificación personalizada, entrenador humano, entrenamiento online, coaching online",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/online-coaching',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Dreizeer',
    title: 'Entrenamiento Online con Corrección de Técnica | Videoanálisis - Dreizeer',
    description: 'Planificación personalizada con entrenador humano real. Videoanálisis y corrección de técnica que las apps de IA no pueden ofrecer. Desde 50€/mes.',
    url: `${baseUrl}/online-coaching`,
    images: [
      {
        url: `${baseUrl}/online-coaching/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Entrenamiento Online con Videoanálisis - Dreizeer',
      },
    ],
  },
};

export default function OnlineCoachingPage() {
  return (
    <>
      <SchemaScript
        type="online"
        data={{
          name: "Dreizeer - Entrenamiento Online",
          description: "Planificación personalizada con entrenador humano real. Videoanálisis y corrección de técnica que las apps de IA no pueden ofrecer.",
          areaServed: "Global",
          priceRange: "desde 50€/mes",
          url: "https://dreizeer.com/online-coaching",
        }}
      />
      <SchemaScript
        type="breadcrumb"
        data={[
          { name: "Inicio", url: "/" },
          { name: "Entrenamiento Online", url: "/online-coaching" },
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
        <section className="pt-32 pb-16 px-6 relative">
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
                  Entrenamiento Online con <span style={{ color: 'var(--color-brand-primary)' }}>Corrección de Técnica</span> Real
                </h1>
                <p
                  className="text-xl md:text-2xl mb-8 leading-relaxed"
                  style={{
                    color: '#e5e7eb',
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  }}
                >
                  Planificación personalizada con un <strong>entrenador humano</strong> que analiza tus videos,
                  corrige tu técnica y se adapta a tus necesidades reales. No es una app de IA.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.online_page)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-lg text-lg font-bold text-center transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'var(--color-brand-primary)',
                      color: 'var(--color-text-white)',
                    }}
                  >
                    Solicitar Evaluación Gratuita
                  </a>
                  <Link
                    href="/#contacto"
                    className="px-8 py-4 rounded-lg text-lg font-semibold text-center border-2 transition-colors"
                    style={{
                      borderColor: 'var(--color-brand-primary)',
                      color: 'var(--color-brand-primary)',
                    }}
                  >
                    Ver Comparativa Completa
                  </Link>
                </div>
              </div>

              {/* Imagen de ejemplo de análisis */}
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <ImageOptimized
                  src="/images/servicios/analisis-tecnica-video-entrenamiento-online.webp"
                  alt="Ejemplo de corrección postural por vídeo para clientes de coaching online"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              El Problema con las Apps de Fitness con IA
            </h2>
            <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
                Falta de Corrección de Forma: El Punto Débil de las Apps
              </h3>
              <p className="leading-relaxed mb-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                Las aplicaciones de fitness con IA te dan rutinas, pero <strong>no pueden corregir tu técnica</strong>.
                Entrenar con mala forma no solo reduce la efectividad del ejercicio, sino que aumenta el riesgo de lesiones.
              </p>
              <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                Sin <strong>corrección de técnica</strong> real, estás repitiendo errores que pueden convertirse en
                hábitos perjudiciales. Un <strong>entrenador humano</strong> ve lo que una app no puede ver.
              </p>
            </div>
          </div>
        </section>

        {/* Tabla Comparativa */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              App Genérica (IA) vs. Entrenador Online Real
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                    <th
                      className="p-4 text-left font-bold"
                      style={{ color: 'var(--color-text-white)' }}
                    >
                      Característica
                    </th>
                    <th
                      className="p-4 text-center font-bold border-l-2"
                      style={{
                        color: 'var(--color-text-white)',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      App Genérica (IA)
                    </th>
                    <th
                      className="p-4 text-center font-bold border-l-2"
                      style={{
                        color: 'var(--color-brand-primary)',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      Entrenador Online Real
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Fila 1: Corrección de errores */}
                  <tr className="border-t-2" style={{ borderColor: 'var(--color-neutral-600)' }}>
                    <td
                      className="p-4 font-semibold"
                      style={{ color: 'var(--color-text-white)' }}
                    >
                      Corrección de Errores
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: '#ef4444',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      <span className="text-xl">✗</span> No
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: 'var(--color-brand-primary)',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      <span className="text-xl">✓</span> Análisis de video detallado
                    </td>
                  </tr>

                  {/* Fila 2: Adaptación a lesiones */}
                  <tr className="border-t-2" style={{ borderColor: 'var(--color-neutral-600)' }}>
                    <td
                      className="p-4 font-semibold"
                      style={{ color: 'var(--color-text-white)' }}
                    >
                      Adaptación a Lesiones
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: '#f59e0b',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      Limitada
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: 'var(--color-brand-primary)',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      <span className="text-xl">✓</span> Total
                    </td>
                  </tr>

                  {/* Fila 3: Motivación */}
                  <tr className="border-t-2" style={{ borderColor: 'var(--color-neutral-600)' }}>
                    <td
                      className="p-4 font-semibold"
                      style={{ color: 'var(--color-text-white)' }}
                    >
                      Motivación
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: '#9ca3af',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      Notificaciones automáticas
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: 'var(--color-brand-primary)',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      <span className="text-xl">✓</span> Mensajes personales
                    </td>
                  </tr>

                  {/* Fila 4: Planificación */}
                  <tr className="border-t-2" style={{ borderColor: 'var(--color-neutral-600)' }}>
                    <td
                      className="p-4 font-semibold"
                      style={{ color: 'var(--color-text-white)' }}
                    >
                      Planificación Personalizada
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: '#9ca3af',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      Rutinas genéricas
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: 'var(--color-brand-primary)',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      <span className="text-xl">✓</span> Adaptada a ti
                    </td>
                  </tr>

                  {/* Fila 5: Videoanálisis */}
                  <tr className="border-t-2" style={{ borderColor: 'var(--color-neutral-600)' }}>
                    <td
                      className="p-4 font-semibold"
                      style={{ color: 'var(--color-text-white)' }}
                    >
                      Videoanálisis de Técnica
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: '#ef4444',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      <span className="text-xl">✗</span> No disponible
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: 'var(--color-brand-primary)',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      <span className="text-xl">✓</span> Análisis detallado semanal
                    </td>
                  </tr>

                  {/* Fila 6: Ajustes en tiempo real */}
                  <tr className="border-t-2" style={{ borderColor: 'var(--color-neutral-600)' }}>
                    <td
                      className="p-4 font-semibold"
                      style={{ color: 'var(--color-text-white)' }}
                    >
                      Ajustes en Tiempo Real
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: '#9ca3af',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      Algoritmo fijo
                    </td>
                    <td
                      className="p-4 text-center border-l-2"
                      style={{
                        color: 'var(--color-brand-primary)',
                        borderColor: 'var(--color-neutral-600)',
                      }}
                    >
                      <span className="text-xl">✓</span> Entrenador humano disponible
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cómo Funciona Section */}
        <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-6xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Cómo Funciona el Entrenamiento Online con Entrenador Humano
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-white)' }}>
                  Evaluación Inicial
                </h3>
                <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  Videollamada inicial para conocerte, evaluar tu condición física y establecer objetivos reales.
                </p>
              </div>

              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-white)' }}>
                  Planificación Personalizada
                </h3>
                <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  Recibes tu rutina personalizada a través de la app, diseñada específicamente para ti por tu entrenador humano.
                </p>
              </div>

              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-white)' }}>
                  Videoanálisis Semanal
                </h3>
                <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  Envías videos de tus entrenamientos. Tu entrenador analiza tu técnica y te envía correcciones detalladas.
                </p>
              </div>

              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-white)' }}>
                  Corrección de Técnica
                </h3>
                <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  Recibes feedback personalizado con correcciones específicas de tu técnica para evitar lesiones y maximizar resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Precios Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Plan de Entrenamiento Online
            </h2>
            <div className="max-w-md mx-auto">
              <div
                className="p-8 rounded-lg border-2"
                style={{
                  backgroundColor: 'var(--color-neutral-800)',
                  borderColor: 'var(--color-brand-primary)',
                }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-white)' }}>
                    Plan Online Completo
                  </h3>
                  <p className="mb-4" style={{ color: '#d1d5db', fontSize: '1.125rem' }}>
                    Con entrenador humano real
                  </p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold" style={{ color: 'var(--color-brand-primary)' }}>
                      desde 50€
                    </span>
                    <span className="text-xl ml-2" style={{ color: '#d1d5db' }}>
                      /mes
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Planificación personalizada adaptada a ti</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Videoanálisis semanal con corrección de técnica</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Entrenador humano disponible para consultas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ajustes continuos según tu progreso</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mensajes personales de motivación y seguimiento</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-brand-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Adaptación total a lesiones o limitaciones</span>
                  </li>
                </ul>

                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.online_page)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 rounded-lg font-bold transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--color-brand-primary)',
                    color: 'var(--color-text-white)',
                  }}
                >
                  Comenzar Plan Online
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Valor Diferencial Section */}
        <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Por Qué Elegir un Entrenador Humano sobre una App de IA
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
                  Corrección de Técnica que las Apps No Pueden Ofrecer
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  El <strong>videoanálisis</strong> realizado por un <strong>entrenador humano</strong> detecta
                  errores sutiles que una IA no puede identificar. Cada corrección de técnica está basada en
                  años de experiencia y conocimiento real del movimiento humano.
                </p>
                <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  No es solo ver si haces el ejercicio: es entender <em>cómo</em> lo haces y <em>por qué</em>
                  puede estar limitando tus resultados o aumentando el riesgo de lesión.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
                  Planificación Personalizada que Se Adapta a Ti
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  Mientras las apps ofrecen rutinas genéricas, tu <strong>planificación personalizada</strong>
                  se ajusta semana a semana según tu progreso real, tus lesiones, tu disponibilidad y tus
                  objetivos cambiantes.
                </p>
                <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  Un <strong>entrenador humano</strong> entiende el contexto completo de tu vida, no solo
                  los datos que introduces en una app.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
                  Motivación Real, No Notificaciones Automáticas
                </h3>
                <p className="leading-relaxed" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  Recibirás <strong>mensajes personales</strong> de tu entrenador, celebrando tus logros,
                  animándote en los días difíciles y ajustando el plan cuando sea necesario. No es una
                  notificación automática: es una relación real de coaching.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              ¿Listo para Entrenar con un Entrenador Humano Real?
            </h2>
            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ color: '#e5e7eb', fontSize: '1.25rem' }}
            >
              Deja atrás las apps genéricas. Obtén <strong>corrección de técnica</strong> real,
              <strong>videoanálisis</strong> detallado y <strong>planificación personalizada</strong> con un
              <strong>entrenador humano</strong> que se preocupa por tus resultados.
            </p>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: '#d1d5db', fontSize: '1.125rem' }}
            >
              Ofrecemos una evaluación inicial gratuita para explicarte cómo funciona nuestro sistema
              y cómo podemos ayudarte a alcanzar tus objetivos de forma segura y efectiva.
            </p>
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.online_page)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-lg font-bold transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--color-brand-primary)',
                color: 'var(--color-text-white)',
              }}
            >
              Solicitar Evaluación Gratuita
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
