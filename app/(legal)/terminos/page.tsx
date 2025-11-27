import type { Metadata } from "next";

// Base URL para metadatos
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Términos y Condiciones | Dreizeer",
  description: "Términos y condiciones de uso de los servicios de Dreizeer Entrenador Personal.",
  alternates: {
    canonical: '/terminos',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Dreizeer',
    title: 'Términos y Condiciones | Dreizeer',
    description: 'Términos y condiciones de uso de los servicios de Dreizeer Entrenador Personal.',
    url: `${baseUrl}/terminos`,
  },
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen py-20 px-6" style={{ backgroundColor: 'var(--color-neutral-900)', color: 'var(--color-text-white)' }}>
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--color-brand-primary)' }}>
          Términos y Condiciones
        </h1>

        <div className="space-y-6 text-lg" style={{ color: '#e5e7eb' }}>
          <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>1. Objeto</h2>
            <p>
              Las presentes condiciones regulan el uso de los servicios de entrenamiento personal ofrecidos por Dreizeer, tanto en su modalidad presencial como online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>2. Servicios</h2>
            <p>
              Dreizeer ofrece servicios de entrenamiento personal, asesoramiento deportivo y planificación de ejercicios. Los resultados pueden variar de una persona a otra y dependen del compromiso del cliente con el programa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>3. Salud y Responsabilidad</h2>
            <p>
              El cliente declara estar en condiciones físicas aptas para la práctica de ejercicio físico. Se recomienda realizar un reconocimiento médico previo. Dreizeer no se hace responsable de lesiones derivadas de la omisión de información sobre el estado de salud del cliente o de la no ejecución correcta de los ejercicios pautados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>4. Pagos y Cancelaciones</h2>
            <p>
              Los servicios se abonarán por adelantado según las tarifas vigentes. Las cancelaciones de sesiones presenciales deben realizarse con al menos 24 horas de antelación; en caso contrario, la sesión se dará por realizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>5. Propiedad Intelectual</h2>
            <p>
              Los planes de entrenamiento, videos y materiales facilitados son para uso exclusivo del cliente y están protegidos por derechos de propiedad intelectual. Queda prohibida su distribución o comercialización.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
