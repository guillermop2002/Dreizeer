import { generateLocalBusinessSchema, generateOnlineBusinessSchema, generatePersonSchema, generateBreadcrumbSchema, generateFAQSchema } from '../utils/schemaGenerator';

interface SchemaScriptProps {
  type: 'local' | 'online' | 'person' | 'breadcrumb' | 'faq';
  data: any;
}

/**
 * Componente para inyectar esquemas JSON-LD en las páginas
 */
export default function SchemaScript({ type, data }: SchemaScriptProps) {
  let schemaJson = '';

  switch (type) {
    case 'local':
      schemaJson = generateLocalBusinessSchema(data);
      break;
    case 'online':
      schemaJson = generateOnlineBusinessSchema(data);
      break;
    case 'person':
      schemaJson = generatePersonSchema(data);
      break;
    case 'breadcrumb':
      schemaJson = generateBreadcrumbSchema(data);
      break;
    case 'faq':
      schemaJson = generateFAQSchema(data);
      break;
    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaJson }}
    />
  );
}

