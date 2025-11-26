import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

// Definición de la URL base con fallback seguro
// En producción, usar NEXT_PUBLIC_SITE_URL (ej: "dreizeer.com" sin https://)
// En desarrollo, usar localhost:3000
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dreizeer - Entrenador Personal en Madrid | A Domicilio y Online",
    template: "%s | Dreizeer",
  },
  description: "Entrenador personal especializado en Madrid y Rivas-Vaciamadrid. Entrenamiento a domicilio, al aire libre y online con corrección de técnica. Precios desde 20€/persona en grupos, desde 30€/sesión individual.",
  keywords: "entrenador personal Madrid, entrenador personal Rivas, entrenamiento a domicilio, entrenamiento online, corrección de técnica, biomecánica",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Dreizeer',
    title: 'Dreizeer - Entrenador Personal en Madrid | A Domicilio y Online',
    description: 'Entrenador personal especializado en Madrid y Rivas-Vaciamadrid. Entrenamiento a domicilio, al aire libre y online con corrección de técnica.',
    url: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), var(--font-family-base)", margin: 0, padding: 0 }}>
        {/* Schema.org Global - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Entrenador Personal Dreizeer",
              "image": `${baseUrl}/images/hero/entrenador-personal-madrid-cliente-testimonio-1.jpg`,
              "url": baseUrl,
              "telephone": "+34637453753",
              "priceRange": "20€ - 50€",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Servicio a Domicilio y Aire Libre",
                "addressLocality": "Madrid",
                "addressRegion": "Madrid",
                "postalCode": "28001",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.416775,
                "longitude": -3.703790
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Madrid"
                },
                {
                  "@type": "City",
                  "name": "Rivas-Vaciamadrid"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/dreizeer/",
                "https://www.tiktok.com/@dreizeer"
              ]
            })
          }}
        />
        <Header />
        <main style={{ marginTop: '80px', paddingTop: 0 }}>
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
