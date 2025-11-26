import type { Metadata } from "next";
import Link from "next/link";
import ImageOptimized from "../../components/ImageOptimized";
import ProfileCarousel from "../../components/ProfileCarousel";
import SchemaScript from "../../components/SchemaScript";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "../../lib/utils/whatsapp";

// Base URL para metadatos
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Sobre Mí - Tu Entrenador Personal en Madrid | Dreizeer",
  description: "Ciencia del Movimiento con Base en Madrid y Alcance Global. Entrenador personal especializado en biomecánica, entrenamiento híbrido y corrección de técnica.",
  keywords: "entrenador personal Madrid, especialista biomecánica, entrenamiento híbrido, corrección técnica, entrenador certificado",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/sobre-mi',
  },
  openGraph: {
    type: 'profile',
    locale: 'es_ES',
    siteName: 'Dreizeer',
    title: 'Sobre Mí - Tu Entrenador Personal en Madrid | Dreizeer',
    description: 'Ciencia del Movimiento con Base en Madrid y Alcance Global. Entrenador personal especializado en biomecánica, entrenamiento híbrido y corrección de técnica.',
    url: `${baseUrl}/sobre-mi`,
    images: [
      {
        url: `${baseUrl}/sobre-mi/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Dreizeer - Entrenador Personal Especializado',
      },
    ],
  },
};

// Timeline de experiencia
const experienceTimeline = [
  {
    year: "2015",
    title: "Inicios en Gimnasio",
    description: "Comienzo del camino en el mundo del fitness y entrenamiento personal.",
  },
  {
    year: "2018",
    title: "Especialización en Biomecánica",
    description: "Formación avanzada en análisis del movimiento y corrección postural.",
  },
  {
    year: "2020",
    title: "Certificación en Entrenamiento Funcional",
    description: "Especialización en entrenamiento funcional y adaptado a diferentes poblaciones.",
  },
  {
    year: "2022",
    title: "Expansión Online",
    description: "Desarrollo del método de coaching online con videoanálisis y corrección técnica.",
  },
  {
    year: "2024",
    title: "Método Híbrido Dreizeer",
    description: "Combinación de entrenamiento presencial en Madrid y Rivas con alcance global online.",
  },
];

// Credenciales y certificaciones
const credentials = [
  "Certificación en Entrenamiento Personal",
  "Especialización en Biomecánica del Movimiento",
  "Formación en Entrenamiento Funcional",
  "Experiencia con Poblaciones Especiales (Tercera Edad)",
  "Metodología de Videoanálisis y Corrección Técnica",
];

// FAQ para GEO
const faqItems = [
  {
    question: "¿Es una app o un entrenador real?",
    answer: "Soy un entrenador humano real. Entreno presencialmente en Madrid (Retiro, Salamanca, Chamberí, Vallecas) y Rivas-Vaciamadrid (Futura, Covibar). Para el servicio online, uso tecnología (videoanálisis) pero siempre con supervisión humana directa.",
  },
  {
    question: "¿Dónde ofrece entrenamiento presencial?",
    answer: "Ofrezco servicio a domicilio y al aire libre en Rivas-Vaciamadrid (Covibar, Futura) y Madrid Centro (Retiro, Salamanca, Chamberí, Vallecas). También trabajo en parques y espacios abiertos para entrenamiento funcional.",
  },
  {
    question: "¿Qué titulación tienes?",
    answer: "Poseo certificaciones en entrenamiento personal, especialización en biomecánica del movimiento y formación continua en entrenamiento funcional y poblaciones especiales. Mi experiencia práctica se ha desarrollado trabajando directamente con clientes desde 2015.",
  },
  {
    question: "¿Cómo funciona el entrenamiento online?",
    answer: "El entrenamiento online incluye planificación personalizada, videoanálisis semanal de tu técnica y corrección detallada. No es una app: soy yo quien analiza tus videos y ajusta tu programa según tu progreso real.",
  },
  {
    question: "¿Trabajas con personas mayores?",
    answer: "Sí, tengo experiencia especializada en gimnasia a domicilio para tercera edad. Trabajo en colaboración con centros municipales y adapto los ejercicios a movilidad reducida, siempre priorizando la seguridad y el bienestar.",
  },
];

export default function SobreMiPage() {
  // Imágenes de perfil para el carrusel
  const profileImages = [
    '/images/perfil/perfil-entrenador-dreizeer-experto-biomecanica.webp',
    '/images/perfil/perfil-entrenador-dreizeer-2.webp',
    '/images/perfil/perfil-entrenador-dreizeer-3.webp',
    '/images/perfil/perfil-entrenador-dreizeer-4.webp',
    '/images/perfil/perfil-entrenador-dreizeer-5.webp',
  ];

  return (
    <>
      <SchemaScript
        type="person"
        data={{
          name: "Dreizeer",
          jobTitle: "Entrenador Personal Especializado",
          description: "Ciencia del Movimiento con Base en Madrid y Alcance Global. Especialista en biomecánica, entrenamiento híbrido y corrección de técnica.",
          url: "https://dreizeer.com/sobre-mi",
          email: "dreizeer@gmail.com",
          telephone: "+34637453753",
        }}
      />
      <SchemaScript
        type="faq"
        data={faqItems}
      />
      <SchemaScript
        type="breadcrumb"
        data={[
          { name: "Inicio", url: "/" },
          { name: "Sobre Mí", url: "/sobre-mi" },
        ]}
      />
      <div
        className="min-h-screen"
        style={{
          backgroundColor: 'var(--color-neutral-900)',
          color: 'var(--color-text-white)',
        }}
      >
        {/* Hero Section con Imagen de Fondo */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0">
            <ImageOptimized
              src="/images/hero/entrenador-personal-hibrido-madrid-online.webp"
              alt="Entrenador personal Dreizeer especialista en biomecánica y entrenamiento híbrido"
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
          <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{
                color: 'var(--color-text-white)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              }}
            >
              Tu Entrenador: <span style={{ color: 'var(--color-brand-primary)' }}>Ciencia del Movimiento</span> con Base en Madrid y Alcance Global
            </h1>
            <p
              className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto"
              style={{
                color: '#e5e7eb',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              }}
            >
              Empecé entrenando en gimnasios y me di cuenta de que las apps fallaban en lo más importante: nadie te miraba. Por eso creé un método híbrido que combina la atención humana presencial con la tecnología para alcanzar a más personas.
            </p>
          </div>
        </section>

        {/* Sección Principal: Layout 2 Columnas */}
        <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Columna Izquierda: Carrusel de Perfil */}
              <div className="md:w-1/3 w-full">
                <ProfileCarousel
                  images={profileImages}
                  altPrefix="Foto de perfil de Dreizeer, especialista en entrenamiento híbrido en Madrid"
                />
              </div>

              {/* Columna Derecha: Contenido */}
              <div className="md:w-2/3 w-full">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  Hola, soy <span style={{ color: 'var(--color-brand-primary)' }}>Dreizeer</span>
                </h2>

                <div className="space-y-6" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                  <p className="leading-relaxed">
                    Apasionado del fitness y el bienestar con años de experiencia ayudando a personas como tú a superar sus límites. Mi misión no es solo que consigas el físico que deseas, sino que adquieras hábitos saludables que te acompañen toda la vida.
                  </p>

                  <p className="leading-relaxed">
                    Creo en un enfoque integral que combina entrenamiento efectivo, nutrición inteligente y la mentalidad correcta para garantizar resultados reales y sostenibles.
                  </p>

                  <p className="leading-relaxed">
                    <strong>Mi conexión híbrida:</strong> Entreno a mayores en Rivas porque creo en la salud real y accesible. Entreno a ejecutivos online porque valoro la eficiencia sin perder calidad. Esto justifica mi modelo de negocio: cada persona merece atención personalizada, ya sea presencial o a distancia.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/#contacto"
                    className="inline-block px-8 py-3 rounded-lg font-semibold transition-colors border-2"
                    style={{
                      borderColor: 'var(--color-brand-primary)',
                      color: 'var(--color-brand-primary)',
                    }}
                  >
                    Hablemos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline de Experiencia */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Mi Trayectoria
            </h2>
            <div className="space-y-8">
              {experienceTimeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  {/* Línea vertical */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                      style={{
                        backgroundColor: 'var(--color-brand-primary)',
                        color: 'var(--color-text-white)',
                      }}
                    >
                      {item.year}
                    </div>
                    {index < experienceTimeline.length - 1 && (
                      <div
                        className="w-1 flex-1 mt-2"
                        style={{ backgroundColor: 'var(--color-neutral-600)' }}
                      />
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 pb-8">
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: 'var(--color-text-white)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: '#e5e7eb', fontSize: '1.125rem' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credenciales */}
        <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Credenciales y Especializaciones
            </h2>
            <ul className="space-y-4">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-4 flex-shrink-0 mt-1"
                    style={{ color: 'var(--color-brand-primary)' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span
                    className="text-lg leading-relaxed"
                    style={{ color: '#e5e7eb' }}
                  >
                    {credential}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Manifiesto Anti-Robot */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div
              className="p-8 rounded-lg border-2"
              style={{
                backgroundColor: 'var(--color-neutral-800)',
                borderColor: 'var(--color-brand-primary)',
              }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold mb-6 text-center"
                style={{ color: 'var(--color-brand-primary)' }}
              >
                Manifiesto "Anti-Robot"
              </h2>
              <div className="space-y-4" style={{ color: '#e5e7eb', fontSize: '1.125rem' }}>
                <p className="leading-relaxed">
                  <strong>Yo analizo tu vídeo.</strong> No un algoritmo. Cada corrección de técnica está basada en años de experiencia y conocimiento real del movimiento humano.
                </p>
                <p className="leading-relaxed">
                  <strong>Yo respondo tu WhatsApp.</strong> No un bot. Cada mensaje es personal, adaptado a tu progreso y a tus necesidades reales.
                </p>
                <p className="leading-relaxed">
                  <strong>No uso bots para tu salud.</strong> Tu bienestar es demasiado importante para dejarlo en manos de una inteligencia artificial que no entiende el contexto completo de tu vida.
                </p>
                <p className="leading-relaxed font-semibold" style={{ color: 'var(--color-brand-primary)' }}>
                  Eres una persona. Mereces atención de persona.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ para GEO */}
        <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-neutral-800)' }}>
          <div className="container mx-auto max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Preguntas sobre mi Método
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: 'var(--color-neutral-900)' }}
                >
                  <summary
                    className="cursor-pointer font-semibold text-lg mb-2"
                    style={{ color: 'var(--color-text-white)' }}
                  >
                    {item.question}
                  </summary>
                  <p
                    className="mt-4 leading-relaxed"
                    style={{ color: '#e5e7eb', fontSize: '1.125rem' }}
                  >
                    {item.answer}
                  </p>
                </details>
              ))}
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
              ¿Listo para entrenar con un entrenador real?
            </h2>
            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ color: '#e5e7eb', fontSize: '1.25rem' }}
            >
              No soy una app. Soy una persona que se preocupa por tus resultados. Hablemos y diseñemos el programa perfecto para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.about_me)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg text-lg font-bold transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-brand-primary)',
                  color: 'var(--color-text-white)',
                }}
              >
                Contactar por WhatsApp
              </a>
              <Link
                href="/#contacto"
                className="px-8 py-4 rounded-lg text-lg font-semibold border-2 transition-colors"
                style={{
                  borderColor: 'var(--color-brand-primary)',
                  color: 'var(--color-brand-primary)',
                }}
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
