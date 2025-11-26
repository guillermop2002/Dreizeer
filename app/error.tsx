'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-neutral-900)' }}
    >
      <div className="text-center space-y-6 px-6">
        <h1 className="text-4xl font-bold" style={{ color: 'var(--color-brand-primary)' }}>
          Algo salió mal
        </h1>
        <p className="text-lg" style={{ color: 'var(--color-neutral-300)' }}>
          Ha ocurrido un error inesperado
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 rounded-lg text-lg font-bold transition-transform duration-300 hover:scale-105"
          style={{
            backgroundColor: 'var(--color-brand-primary)',
            color: 'var(--color-text-white)',
          }}
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}

