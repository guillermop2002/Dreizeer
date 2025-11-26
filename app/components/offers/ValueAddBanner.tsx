import { getCurrentMonthlyOffer } from '../../lib/config/pricing-and-offers';

/**
 * Banner de Oferta de Valor Añadido Rotativa
 * 
 * Server Component que muestra la oferta del mes actual (regalo, no descuento)
 * con Schema JSON-LD para crear urgencia en buscadores.
 * 
 * Estrategia:
 * - Meses IMPARES: Valoración Biomecánica GRATIS (Valorada en 30€)
 * - Meses PARES: Clase Extra GRATIS (Valorada en 35€)
 * 
 * IMPORTANTE: Este es un Server Component para evitar problemas de hidratación
 * al calcular la fecha del mes actual.
 */
export default function ValueAddBanner() {
  const offer = getCurrentMonthlyOffer();

  /**
   * Genera el Schema JSON-LD para la oferta
   */
  const generateOfferSchema = () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: offer.title,
      description: offer.description,
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validThrough: offer.validThrough, // CRÍTICO: Crea urgencia en buscadores
      itemOffered: {
        '@type': 'Service',
        name: offer.title,
        description: `Servicio gratuito valorado en ${offer.value}. ${offer.description}`,
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '0',
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: true,
      },
    };

    return JSON.stringify(schema);
  };

  /**
   * Formatea la fecha para mostrar al usuario
   */
  const formatDateForDisplay = (dateISO: string): string => {
    const date = new Date(dateISO + 'T23:59:59');
    const day = date.getDate();
    const monthNames = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];
    const month = monthNames[date.getMonth()];
    return `${day} de ${month}`;
  };

  return (
    <a
      href="#tarifas"
      className="block relative rounded-lg p-6 mb-8 border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
      style={{
        backgroundColor: 'var(--color-neutral-800)',
        borderColor: 'var(--color-brand-primary)',
        textDecoration: 'none',
      }}
    >
      {/* Schema JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateOfferSchema() }}
      />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Contenido Principal */}
        <div className="flex items-center gap-4 flex-1">
          {/* Icono de Regalo */}
          <div
            className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl"
            style={{
              backgroundColor: 'var(--color-brand-primary-lightest)',
            }}
          >
            🎁
          </div>

          {/* Texto de la Oferta */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-wide mb-1"
              style={{ color: 'var(--color-brand-primary-light)' }}
            >
              OFERTA DE:
            </p>
            <h3
              className="text-xl md:text-2xl font-bold mb-1"
              style={{ color: 'var(--color-text-white)' }}
            >
              {offer.title}
            </h3>
            <p
              className="text-sm"
              style={{ color: 'var(--color-neutral-400)' }}
            >
              {offer.description}
            </p>
          </div>
        </div>

        {/* Badge de Valor */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div
            className="px-4 py-2 rounded-lg"
            style={{
              backgroundColor: 'var(--color-brand-primary)',
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-1 text-center"
              style={{ color: 'var(--color-text-white)' }}
            >
              Valorado en
            </p>
            <p
              className="text-2xl font-black text-center"
              style={{ color: 'var(--color-text-white)' }}
            >
              {offer.value}
            </p>
          </div>

          {/* Fecha de Validez */}
          <p
            className="text-xs font-semibold text-center md:text-right"
            style={{ color: 'var(--color-brand-primary-light)' }}
          >
            ⏰ Solo hasta el {formatDateForDisplay(offer.validThrough)}
          </p>
        </div>
      </div>
    </a>
  );
}
