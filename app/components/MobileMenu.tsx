'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón Hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2"
        style={{ color: 'var(--color-text-white)' }}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Menú Móvil */}
      {isOpen && (
        <div
          className="md:hidden px-6 pb-4 mt-4"
          style={{ backgroundColor: 'rgba(17, 24, 39, 0.95)' }}
        >
          <Link
            href="/sobre-mi"
            onClick={() => setIsOpen(false)}
            className="block py-2 transition-colors hover:opacity-80"
            style={{ color: 'var(--color-neutral-300)' }}
          >
            Sobre Mí
          </Link>
          <Link
            href="/#servicios"
            onClick={() => setIsOpen(false)}
            className="block py-2 transition-colors hover:opacity-80"
            style={{ color: 'var(--color-neutral-300)' }}
          >
            Servicios
          </Link>
          <Link
            href="/#contacto"
            onClick={() => setIsOpen(false)}
            className="block mt-2 px-4 py-2 rounded-md font-semibold text-center transition-colors"
            style={{
              backgroundColor: 'var(--color-brand-primary)',
              color: 'var(--color-text-white)',
            }}
          >
            Contactar
          </Link>
        </div>
      )}
    </>
  );
}

