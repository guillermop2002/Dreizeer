/**
 * Generador de Esquemas JSON-LD para SEO
 * Implementa estrategia híbrida: LocalBusiness y OnlineBusiness
 */

export interface LocalBusinessSchemaParams {
  name: string;
  description: string;
  latitude?: number;
  longitude?: number;
  radius?: number; // Radio en metros para GeoCircle
  priceRange?: string; // '€€' o '30€-50€'
  telephone?: string;
  email?: string;
  url?: string;
  image?: string; // URL de imagen del negocio
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
}

export interface OnlineBusinessSchemaParams {
  name: string;
  description: string;
  areaServed?: string[] | 'Global'; // Lista de países o 'Global'
  priceRange?: string;
  telephone?: string;
  email?: string;
  url?: string;
  image?: string; // URL de imagen del negocio
}

/**
 * Genera esquema JSON-LD para LocalBusiness con geo-targeting
 */
export function generateLocalBusinessSchema(params: LocalBusinessSchemaParams): string {
  const {
    name,
    description,
    latitude,
    longitude,
    radius,
    priceRange = '€€',
    telephone = '+34637453753',
    email = 'dreizeer@gmail.com',
    url = 'https://dreizeer.com',
    image,
    address,
  } = params;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}#business`,
    name,
    description,
    priceRange,
    telephone,
    email,
    url,
  };

  // Imagen opcional
  if (image) {
    schema.image = image;
  }

  // Geo-targeting con GeoCircle si se proporciona radio
  if (latitude && longitude && radius) {
    schema.areaServed = {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude,
        longitude,
      },
      geoRadius: {
        '@type': 'Distance',
        value: radius,
        unitCode: 'MTR', // Metros
      },
    };
  } else if (latitude && longitude) {
    // Si hay coordenadas pero no radio, usar GeoCoordinates
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    };
  }

  // Dirección: Google REQUIERE address para LocalBusiness
  // Si no hay streetAddress, usamos solo ciudad y país (dirección mínima)
  if (address) {
    schema.address = {
      '@type': 'PostalAddress',
      addressLocality: address.addressLocality || 'Madrid',
      addressCountry: address.addressCountry || 'ES',
      // Solo incluimos streetAddress si se proporciona explícitamente
      ...(address.streetAddress && { streetAddress: address.streetAddress }),
      ...(address.postalCode && { postalCode: address.postalCode }),
      ...(address.addressRegion && { addressRegion: address.addressRegion }),
    };
  } else {
    // Si no se proporciona address, usamos valores por defecto mínimos
    schema.address = {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressRegion: 'Comunidad de Madrid',
      addressCountry: 'ES',
    };
  }

  // Horarios de atención: Lunes a Domingo, 07:00 - 22:00
  // Horarios flexibles según disponibilidad y tipo de servicio
  schema.openingHoursSpecification = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:00',
      closes: '22:00',
    },
  ];

  // Nota: Los horarios son flexibles y pueden variar según el tipo de servicio
  // (presencial a domicilio, online, al aire libre) y disponibilidad del entrenador

  // Servicios ofrecidos con precios individuales y grupales
  // Precio individual: desde 30€
  const individualPrice = '30';
  // Precio grupo: desde 60€ total (20€ por persona)
  const groupPriceTotal = '60';
  const groupPricePerPerson = '20';

  schema.hasOfferCatalog = {
    '@type': 'OfferCatalog',
    name: 'Servicios de Entrenamiento Personal',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Entrenamiento Personal Individual',
        itemOffered: {
          '@type': 'Service',
          name: 'Entrenamiento Personal a Domicilio',
          description: 'Entrenamiento personalizado en tu hogar o ubicación preferida',
        },
        price: individualPrice,
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: individualPrice,
          priceCurrency: 'EUR',
          unitCode: 'C62', // Persona (UN/ECE Recommendation 20)
          valueAddedTaxIncluded: true,
        },
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Entrenamiento en Grupo Reducido (3 personas)',
        itemOffered: {
          '@type': 'Service',
          name: 'Entrenamiento Personal en Grupo',
          description: 'Entrenamiento personalizado para grupos de hasta 3 personas',
        },
        price: groupPriceTotal,
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: groupPricePerPerson,
          priceCurrency: 'EUR',
          unitCode: 'C62', // Persona (UN/ECE Recommendation 20)
          valueAddedTaxIncluded: true,
        },
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Entrenamiento Online',
          description: 'Coaching online con videoanálisis y corrección de técnica',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Entrenamiento al Aire Libre',
          description: 'Sesiones de entrenamiento en parques y espacios abiertos',
        },
      },
    ],
  };

  return JSON.stringify(schema, null, 2);
}

/**
 * Genera esquema JSON-LD para OnlineBusiness (coaching online)
 */
export function generateOnlineBusinessSchema(params: OnlineBusinessSchemaParams): string {
  const {
    name,
    description,
    areaServed = ['ES'], // Por defecto España
    priceRange = '€€',
    telephone = '+34637453753',
    email = 'dreizeer@gmail.com',
    url = 'https://dreizeer.com',
    image,
  } = params;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'OnlineBusiness',
    '@id': `${url}#online-business`,
    name,
    description,
    priceRange,
    telephone,
    email,
    url,
  };

  // Imagen opcional
  if (image) {
    schema.image = image;
  }

  // Area served: Global o lista de países
  if (areaServed === 'Global') {
    schema.areaServed = {
      '@type': 'Place',
      name: 'Global',
    };
  } else if (Array.isArray(areaServed)) {
    schema.areaServed = areaServed.map((country) => ({
      '@type': 'Country',
      name: country,
    }));
  }

  // Horarios de disponibilidad online (más flexibles)
  schema.hoursAvailable = {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '07:00',
    closes: '22:00',
  };

  // Servicios online
  schema.hasOfferCatalog = {
    '@type': 'OfferCatalog',
    name: 'Servicios de Entrenamiento Online',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Coaching Online con Videoanálisis',
          description: 'Planificación personalizada con corrección de técnica mediante videoanálisis',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Planificación Personalizada Online',
          description: 'Rutinas adaptadas con seguimiento continuo por entrenador humano',
        },
      },
    ],
  };

  return JSON.stringify(schema, null, 2);
}

/**
 * Genera esquema de Person (entrenador)
 */
export function generatePersonSchema(params: {
  name: string;
  jobTitle: string;
  description?: string;
  url?: string;
  email?: string;
  telephone?: string;
  image?: string;
}): string {
  const {
    name,
    jobTitle,
    description,
    url = 'https://dreizeer.com',
    email = 'dreizeer@gmail.com',
    telephone = '+34637453753',
    image,
  } = params;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${url}#person`,
    name,
    jobTitle,
    email,
    telephone,
    url,
  };

  if (description) {
    schema.description = description;
  }

  if (image) {
    schema.image = image;
  }

  // SameAs para redes sociales
  schema.sameAs = [
    'https://www.instagram.com/dreizeer/',
    'https://www.tiktok.com/@dreizeerfit',
  ];

  return JSON.stringify(schema, null, 2);
}

/**
 * Genera esquema de Service específico para entrenamiento personal
 */
export function generateServiceSchema(params: {
  name: string;
  description: string;
  provider: string;
  areaServed?: string | { '@type': 'GeoCircle' };
  priceRange?: string;
  offers?: Array<{
    name: string;
    price: string;
    priceCurrency: string;
    availability?: string;
  }>;
}): string {
  const {
    name,
    description,
    provider,
    areaServed,
    priceRange = '€€',
    offers = [],
  } = params;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
    },
    priceRange,
  };

  if (areaServed) {
    schema.areaServed = typeof areaServed === 'string'
      ? areaServed
      : areaServed;
  }

  if (offers.length > 0) {
    schema.offers = offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      price: offer.price,
      priceCurrency: offer.priceCurrency || 'EUR',
      availability: offer.availability || 'https://schema.org/InStock',
    }));
  }

  return JSON.stringify(schema, null, 2);
}

/**
 * Helper para determinar si usar LocalBusiness u OnlineBusiness
 */
export function generateBusinessSchema(
  isOnline: boolean,
  params: LocalBusinessSchemaParams | OnlineBusinessSchemaParams
): string {
  if (isOnline) {
    return generateOnlineBusinessSchema(params as OnlineBusinessSchemaParams);
  }
  return generateLocalBusinessSchema(params as LocalBusinessSchemaParams);
}

/**
 * Genera esquema JSON-LD para BreadcrumbList (navegación jerárquica)
 */
export function generateBreadcrumbSchema(items: Array<{ name: string, url: string }>): string {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return '';
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
    : 'http://localhost:3000';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item?.name || '',
      item: item?.url?.startsWith('http') ? item.url : `${baseUrl}${item?.url || ''}`,
    })),
  };

  return JSON.stringify(schema, null, 2);
}

/**
 * Genera esquema JSON-LD para FAQPage
 */
export function generateFAQSchema(faqs: Array<{ question: string, answer: string }>): string {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return '';
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs
      .filter(faq => faq?.question && faq?.answer)
      .map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
  };

  return JSON.stringify(schema, null, 2);
}

