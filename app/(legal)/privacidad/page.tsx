import type { Metadata } from "next";

// Base URL para metadatos
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Política de Privacidad | Dreizeer",
  description: "Política de privacidad y protección de datos de Dreizeer Entrenador Personal.",
  alternates: {
    canonical: '/privacidad',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Dreizeer',
    title: 'Política de Privacidad | Dreizeer',
    description: 'Política de privacidad y protección de datos de Dreizeer Entrenador Personal.',
    url: `${baseUrl}/privacidad`,
  },
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen py-20 px-6" style={{ backgroundColor: 'var(--color-neutral-900)', color: 'var(--color-text-white)' }}>
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--color-brand-primary)' }}>
          Política de Privacidad
        </h1>

        <div className="space-y-6 text-lg" style={{ color: '#e5e7eb' }}>
          <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>1. Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de sus datos personales es Dreizeer.
              Puede contactar con nosotros en: <a href="mailto:dreizeer@gmail.com" className="underline hover:text-red-500">dreizeer@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>2. Finalidad del Tratamiento</h2>
            <p>
              Tratamos la información que nos facilita con el fin de prestarle el servicio solicitado, realizar la facturación del mismo y enviarle comunicaciones relacionadas con nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es la ejecución del contrato de prestación de servicios de entrenamiento personal (presencial u online) o el consentimiento prestado al contactar con nosotros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>4. Destinatarios</h2>
            <p>
              Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>5. Derechos</h2>
            <p>
              Usted tiene derecho a obtener confirmación sobre si en Dreizeer estamos tratando sus datos personales por tanto tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
