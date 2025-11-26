import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        backgroundColor: 'var(--color-neutral-900)',
        borderBottom: 'none',
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold"
            style={{ color: 'var(--color-brand-primary)' }}
          >
            DREIZEER
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6" aria-label="Navegación principal">
              <Link
                href="/sobre-mi"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--color-neutral-300)' }}
              >
                Sobre Mí
              </Link>
              <Link
                href="/#servicios"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--color-neutral-300)' }}
              >
                Servicios
              </Link>
              <Link
                href="/#testimonios"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--color-neutral-300)' }}
              >
                Testimonios
              </Link>
              <Link
                href="/#galeria"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--color-neutral-300)' }}
              >
                Galería
              </Link>
            </nav>
            <Link
              href="/#contacto"
              className="px-4 py-2 rounded-md font-semibold transition-colors"
              style={{
                backgroundColor: 'var(--color-brand-primary)',
                color: 'var(--color-text-white)',
              }}
            >
              Contactar
            </Link>
          </div>

          {/* Menú Móvil */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

