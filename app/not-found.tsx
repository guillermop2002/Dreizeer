import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-neutral-900)' }}
    >
      <div className="text-center space-y-6 px-6">
        <h1 className="text-4xl font-bold" style={{ color: 'var(--color-brand-primary)' }}>
          404 - Página no encontrada
        </h1>
        <p className="text-lg" style={{ color: 'var(--color-neutral-300)' }}>
          La página que buscas no existe
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-lg text-lg font-bold transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--color-brand-primary)',
              color: 'var(--color-text-white)',
            }}
          >
            Volver al inicio
          </Link>
          <Link
            href="/#contacto"
            className="px-8 py-3 rounded-lg text-lg font-semibold border-2 transition-colors"
            style={{
              borderColor: 'var(--color-brand-primary)',
              color: 'var(--color-brand-primary)',
            }}
          >
            Contactar
          </Link>
        </div>
        <div className="mt-8">
          <p className="text-sm mb-4" style={{ color: 'var(--color-neutral-400)' }}>
            Quizás buscabas:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/sobre-mi" className="hover:text-white transition-colors" style={{ color: 'var(--color-brand-primary)' }}>Sobre Mí</Link>
            <Link href="/online-coaching" className="hover:text-white transition-colors" style={{ color: 'var(--color-brand-primary)' }}>Entrenamiento Online</Link>
            <Link href="/tercera-edad" className="hover:text-white transition-colors" style={{ color: 'var(--color-brand-primary)' }}>Tercera Edad</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

