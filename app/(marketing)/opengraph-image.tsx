import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Dreizeer - Entrenador Personal en Madrid';
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
        {/* Background Pattern */}
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
              fontSize: 80,
              fontWeight: 900,
              marginBottom: 20,
              background: 'linear-gradient(to right, #ef4444, #f87171)',
              backgroundClip: 'text',
              color: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '-0.05em',
            }}
          >
            DREIZEER
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              marginBottom: 10,
              color: '#f3f4f6',
            }}
          >
            ENTRENADOR PERSONAL
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#9ca3af',
              marginTop: 10,
            }}
          >
            MADRID • ONLINE • DOMICILIO
          </div>
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <div style={{ fontSize: 24, color: '#ef4444', fontWeight: 600 }}>dreizeer.com</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
