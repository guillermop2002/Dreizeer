import { ImageResponse } from 'next/og';
import { capitalize } from '../../../lib/utils/text';

export const runtime = 'edge';
export const alt = 'Entrenador Personal';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

type Props = {
  params: {
    city: string;
    neighborhood: string;
  };
};

export default async function Image({ params }: Props) {
  const city = decodeURIComponent(params.city);
  const neighborhood = decodeURIComponent(params.neighborhood);
  const displayCity = capitalize(city);
  const displayNeighborhood = capitalize(neighborhood);

  // Determinar precio según el barrio usando los precios actuales del proyecto
  // Precios centralizados: Grupos desde 25€/persona, Individual desde 40€/sesión
  const normalizedNeighborhood = neighborhood.toLowerCase();
  const isRivas = city.toLowerCase().includes('rivas');
  const isGroupNeighborhood = normalizedNeighborhood.includes('futura') ||
    normalizedNeighborhood.includes('covibar') ||
    normalizedNeighborhood.includes('rivas') ||
    normalizedNeighborhood.includes('vallecas');

  // Rivas y Vallecas: Grupos (desde 25€/persona)
  // Madrid Centro: Individual (desde 40€/sesión)
  const price = isGroupNeighborhood
    ? 'Desde 25€/persona'
    : 'Desde 40€/sesión';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #10b981 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Título Principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Entrena en {displayNeighborhood}
          </h1>

          <h2
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#10b981',
              marginBottom: '30px',
            }}
          >
            {price}
          </h2>

          <p
            style={{
              fontSize: '28px',
              color: '#e5e7eb',
              marginTop: '20px',
            }}
          >
            Entrenador Personal en {displayCity}
          </p>
        </div>

        {/* Logo/Marca */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#10b981',
            }}
          >
            DREIZEER
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

