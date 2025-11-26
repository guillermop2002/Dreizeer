'use client';

import { PRICING_PLANS, PricingPlan } from '../../lib/config/pricing-and-offers';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../../lib/utils/whatsapp';

interface PricingCardsProps {
  plans?: PricingPlan[];
  featuredPlanId?: string;
  showGroupPack?: boolean;
}

/**
 * Componente de Tarjetas de Precios con SEO
 * 
 * Muestra los planes de precios de forma atractiva e inyecta Schema JSON-LD
 * para que Google muestre los precios en los resultados de búsqueda.
 * 
 * @param plans - Array de planes a mostrar (por defecto usa PRICING_PLANS)
 * @param featuredPlanId - ID del plan a destacar visualmente
 * @param showGroupPack - Si es true, muestra el detalle del pack grupal
 */
export default function PricingCards({
  plans = PRICING_PLANS,
  featuredPlanId,
  showGroupPack = true,
}: PricingCardsProps) {
  /**
   * Genera el Schema JSON-LD para un plan de precios
   */
  const generatePriceSchema = (plan: PricingPlan) => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: plan.title,
      description: plan.detalles,
      offers: {
        '@type': 'Offer',
        price: plan.precioSchema,
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: plan.precioSchema,
          priceCurrency: 'EUR',
          minPrice: plan.precioSchema, // CRÍTICO para SEO: Google lee esto
          valueAddedTaxIncluded: true,
        },
        availability: 'https://schema.org/InStock',
      },
    };

    return JSON.stringify(schema);
  };

  /**
   * Extrae el precio numérico del texto "Desde 20€/pers"
   */
  const extractPriceNumber = (precioMostrado: string): string => {
    const match = precioMostrado.match(/(\d+)/);
    return match ? match[1] : '';
  };

  /**
   * Extrae el sufijo del precio (pers, sesión, mes)
   * Maneja tanto "Desde 20€/pers" como "20€/sesión"
   */
  const extractPriceSuffix = (precioMostrado: string): string => {
    // Buscar el patrón /palabra o / palabra, capturando todo después de la barra hasta el final
    // Esto captura "pers", "sesión", "mes" correctamente
    const match = precioMostrado.match(/\/\s*([^\s€]+)/);
    return match ? match[1] : '';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-visible" id="tarifas" style={{ overflow: 'visible' }}>
      {plans.map((plan) => {
        const isFeatured = plan.id === featuredPlanId;
        // El badge "Oferta disponible" siempre aparece en el plan individual
        const showOfferBadge = plan.id === 'individual';
        const priceNumber = extractPriceNumber(plan.precioMostrado);
        const priceSuffix = extractPriceSuffix(plan.precioMostrado);
        const isGroup = plan.tipo === 'group';

        return (
          <div
            key={plan.id}
            className={`relative rounded-lg transition-transform duration-300 hover:scale-105 ${isFeatured
              ? 'ring-2 ring-offset-2'
              : ''
              }`}
            style={{
              backgroundColor: isFeatured
                ? 'var(--color-neutral-800)'
                : 'var(--color-neutral-900)',
              borderColor: isFeatured ? 'var(--color-brand-primary)' : 'transparent',
              borderWidth: isFeatured ? '2px' : '1px',
              borderStyle: 'solid',
              overflow: 'visible',
            }}
          >
            {/* Schema JSON-LD para SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: generatePriceSchema(plan) }}
            />

            <div className="p-6 min-h-[400px] flex flex-col" style={{ overflow: 'visible' }}>
              {/* Badge de Oferta - Siempre en el plan individual */}
              {showOfferBadge && (
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                  style={{
                    backgroundColor: 'var(--color-brand-primary)',
                    color: 'var(--color-text-white)',
                    width: 'fit-content',
                    maxWidth: '100%',
                  }}
                >
                  🎁 Oferta disponible
                </div>
              )}

              {/* Título */}
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--color-text-white)' }}
              >
                {plan.title}
              </h3>

              {/* Precio Principal */}
              <div className="mb-2" style={{ overflow: 'visible', width: '100%' }}>
                <div className="flex items-baseline gap-1.5 flex-wrap" style={{ overflow: 'visible', width: '100%' }}>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--color-neutral-400)' }}
                  >
                    desde
                  </span>
                  <span
                    className="text-4xl md:text-5xl font-black leading-none"
                    style={{ color: 'var(--color-brand-primary)' }}
                  >
                    {priceNumber}€
                  </span>
                  <span
                    className="text-base md:text-lg"
                    style={{ color: 'var(--color-neutral-400)' }}
                  >
                    /{priceSuffix}
                  </span>
                </div>
              </div>

              {/* Detalle del Pack Grupal (solo para grupos) */}
              {isGroup && showGroupPack && (
                <p
                  className="text-sm mb-4"
                  style={{ color: 'var(--color-neutral-500)' }}
                >
                  {plan.detalles}
                </p>
              )}

              {/* Descripción */}
              {!isGroup && (
                <p
                  className="text-sm mb-4"
                  style={{ color: 'var(--color-neutral-400)' }}
                >
                  {plan.detalles}
                </p>
              )}

              {/* Lista de Características según tipo */}
              <ul className="space-y-2 mb-6">
                {plan.tipo === 'group' && (
                  <>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-brand-primary)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--color-neutral-400)' }}
                      >
                        Hasta 3 personas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-brand-primary)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--color-neutral-400)' }}
                      >
                        Misma calidad, mejor precio
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-brand-primary)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--color-neutral-400)' }}
                      >
                        Ideal para amigos o vecinos
                      </span>
                    </li>
                  </>
                )}

                {plan.tipo === 'individual' && (
                  <>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-brand-primary)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--color-neutral-400)' }}
                      >
                        Atención 100% personalizada
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-brand-primary)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--color-neutral-400)' }}
                      >
                        A domicilio o al aire libre
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-brand-primary)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--color-neutral-400)' }}
                      >
                        Programa adaptado a ti
                      </span>
                    </li>
                  </>
                )}

                {plan.tipo === 'online' && (
                  <>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-brand-primary)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--color-neutral-400)' }}
                      >
                        Videoanálisis semanal
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-brand-primary)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--color-neutral-400)' }}
                      >
                        Corrección de técnica
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-brand-primary)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--color-neutral-400)' }}
                      >
                        Entrenador humano real
                      </span>
                    </li>
                  </>
                )}
              </ul>

              {/* CTA Button */}
              <a
                href={
                  plan.id === 'group'
                    ? getWhatsAppLink(WHATSAPP_MESSAGES.pricing_group)
                    : plan.id === 'individual'
                      ? getWhatsAppLink(WHATSAPP_MESSAGES.pricing_individual)
                      : getWhatsAppLink(WHATSAPP_MESSAGES.pricing_online)
                }
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 rounded-lg font-bold transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundColor: isFeatured
                    ? 'var(--color-brand-primary)'
                    : 'var(--color-neutral-800)',
                  color: isFeatured
                    ? 'var(--color-text-white)'
                    : 'var(--color-brand-primary)',
                  border: isFeatured ? 'none' : '2px solid var(--color-brand-primary)',
                }}
              >
                {isFeatured ? 'Reservar Ahora' : 'Consultar'}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

