import Link from 'next/link';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../lib/utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Áreas de servicio para SEO local - Organizadas por zonas
  const madridCentro = [
    { name: 'Entrenador Personal Retiro', path: '/madrid/retiro' },
    { name: 'Entrenador Personal Barrio Salamanca', path: '/madrid/salamanca' },
    { name: 'Entrenador Personal Chamberí', path: '/madrid/chamberi' },
    { name: 'Entrenador Personal Vallecas', path: '/madrid/vallecas' },
    { name: 'Entrenador Personal Madrid Río', path: '/madrid/madrid-rio' },
    { name: 'Entrenador Personal Arganzuela', path: '/madrid/arganzuela' },
    { name: 'Entrenador Personal Moncloa', path: '/madrid/moncloa' },
    { name: 'Entrenador Personal Getafe', path: '/madrid/getafe' },
  ];

  const rivasSureste = [
    { name: 'Entrenador Personal Rivas Futura', path: '/rivas-vaciamadrid/futura' },
    { name: 'Entrenador Personal Covibar', path: '/rivas-vaciamadrid/covibar' },
  ];

  const servicios = [
    { name: 'Entrenamiento Online', path: '/online-coaching' },
    { name: 'Gimnasia Tercera Edad', path: '/tercera-edad' },
    { name: 'Grupos Reducidos', path: '/#servicios' },
  ];

  return (
    <footer
      id="contacto"
      className="py-16"
      style={{ backgroundColor: 'var(--color-neutral-900)' }}
    >
      <div className="container mx-auto px-6">
        {/* Sección Principal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-white)' }}>
            ¿Listo para empezar tu cambio?
          </h2>
          <p
            className="mb-8 max-w-xl mx-auto"
            style={{ color: 'var(--color-neutral-400)' }}
          >
            Envíame un mensaje y agenda una primera sesión de valoración gratuita y sin compromiso.
          </p>
          <a
            href={getWhatsAppLink(WHATSAPP_MESSAGES.footer)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg text-lg font-bold transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--color-brand-primary)',
              color: 'var(--color-text-white)',
            }}
          >
            ¡Contactar ahora!
          </a>
        </div>

        {/* Áreas de Servicio - SEO Local */}
        <div className="mb-12">
          {/* Madrid Centro */}
          <nav className="mb-8" aria-label="Madrid Centro">
            <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: 'var(--color-text-white)' }}>
              Madrid Centro
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {madridCentro.map((area) => (
                <li key={area.path}>
                  <Link
                    href={area.path}
                    className="block p-3 rounded-lg text-center transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--color-neutral-800)',
                      color: 'var(--color-brand-primary-light)',
                    }}
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rivas & Sureste */}
          <nav className="mb-8" aria-label="Rivas & Sureste">
            <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: 'var(--color-text-white)' }}>
              Rivas & Sureste
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {rivasSureste.map((area) => (
                <li key={area.path}>
                  <Link
                    href={area.path}
                    className="block p-3 rounded-lg text-center transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--color-neutral-800)',
                      color: 'var(--color-brand-primary-light)',
                    }}
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Servicios */}
          <nav className="mb-8" aria-label="Servicios">
            <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: 'var(--color-text-white)' }}>
              Servicios
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {servicios.map((servicio) => (
                <li key={servicio.path}>
                  <Link
                    href={servicio.path}
                    className="block p-3 rounded-lg text-center transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--color-neutral-800)',
                      color: 'var(--color-brand-primary-light)',
                    }}
                  >
                    {servicio.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Información de Contacto */}
        <div className="mb-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
            <a
              href="tel:+34637453753"
              className="flex items-center gap-2 transition-colors hover:opacity-80"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">+34 637 45 37 53</span>
            </a>
            <a
              href="mailto:dreizeer@gmail.com"
              className="flex items-center gap-2 transition-colors hover:opacity-80"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold">dreizeer@gmail.com</span>
            </a>
          </div>
          <p className="text-sm" style={{ color: 'var(--color-neutral-500)' }}>
            Horario de atención: Lunes a Domingo, 7:00 - 22:00
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.instagram.com/dreizeer/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--color-neutral-400)' }}
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@dreizeerfit"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--color-neutral-400)' }}
            aria-label="TikTok"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>

        {/* Enlaces Legales */}
        <div className="flex justify-center gap-4 mb-6 text-sm">
          <Link
            href="/privacidad"
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--color-neutral-500)' }}
          >
            Política de Privacidad
          </Link>
          <span style={{ color: 'var(--color-neutral-600)' }}>|</span>
          <Link
            href="/terminos"
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--color-neutral-500)' }}
          >
            Términos y Condiciones
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm" style={{ color: 'var(--color-neutral-500)' }}>
          &copy; {currentYear} Dreizeer | Entrenador Personal. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

