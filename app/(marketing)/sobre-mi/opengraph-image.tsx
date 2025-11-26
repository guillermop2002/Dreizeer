import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Sobre Mí - Dreizeer Entrenador Personal';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#171717',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            opacity: 0.2,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              marginBottom: 20,
              color: '#ef4444',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            DREIZEER
          </div>
          <div
            style={{
              fontSize: 70,
              fontWeight: 900,
              marginBottom: 20,
              color: '#f3f4f6',
              lineHeight: 1.1,
            }}
          >
            SOBRE MÍ
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#9ca3af',
              marginTop: 10,
              maxWidth: '800px',
            }}
          >
            Conoce a tu entrenador personal y empieza tu transformación
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
