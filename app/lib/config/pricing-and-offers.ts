/**
 * Configuración Centralizada de Precios y Ofertas
 * 
 * Este archivo actúa como "cerebro" centralizado para gestionar todos los precios
 * y ofertas rotativas de Dreizeer, evitando hardcodear valores en múltiples archivos.
 * 
 * Precios actuales del proyecto:
 * - Individual: desde 40€/sesión
 * - Grupo: desde 25€/persona (pack desde 75€)
 * - Online: desde 50€/mes
 */

export type PricingPlanType = 'individual' | 'group' | 'online';

export interface PricingPlan {
  id: string;
  title: string;
  precioMostrado: string; // Texto para mostrar en UI
  precioSchema: string; // Precio numérico para Schema.org (minPrice)
  detalles: string; // Descripción adicional
  tipo: PricingPlanType;
}

/**
 * Planes de precios disponibles
 * 
 * IMPORTANTE: Estos son los precios actuales del proyecto.
 * Si cambias precios aquí, se actualizarán en toda la aplicación.
 */
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'group',
    title: 'Small Group Training',
    precioMostrado: 'Desde 25€/persona',
    precioSchema: '25.00',
    detalles: 'Pack mensual desde 75€',
    tipo: 'group',
  },
  {
    id: 'individual',
    title: 'Entrenamiento 1:1',
    precioMostrado: 'Desde 40€/sesión',
    precioSchema: '40.00',
    detalles: 'Sesión individual personalizada',
    tipo: 'individual',
  },
  {
    id: 'online',
    title: 'Asesoría Híbrida',
    precioMostrado: 'Desde 50€/mes',
    precioSchema: '50.00',
    detalles: 'Coaching online con videoanálisis',
    tipo: 'online',
  },
];

export interface MonthlyOffer {
  title: string;
  value: string; // Valor monetario del servicio regalado
  description: string; // Descripción corta
  validThrough: string; // Fecha ISO 8601 del último día del mes actual
}

/**
 * Obtiene la oferta del mes actual según la estrategia rotativa
 * 
 * Estrategia:
 * - Meses IMPARES (Enero, Marzo, Mayo, Julio, Septiembre, Noviembre):
 *   → Evaluación Funcional GRATIS (Valorada en 40€)
 * 
 * - Meses PARES (Febrero, Abril, Junio, Agosto, Octubre, Diciembre):
 *   → 2ª Sesión de Técnica GRATIS (Valorada en 50€)
 * 
 * @returns {MonthlyOffer} Oferta del mes actual con fecha de validez
 */
export function getCurrentMonthlyOffer(): MonthlyOffer {
  const now = new Date();
  const currentMonth = now.getMonth() + 1; // getMonth() retorna 0-11, necesitamos 1-12
  const currentYear = now.getFullYear();

  // Calcular último día del mes actual
  // new Date(year, month, 0) retorna el último día del mes anterior
  // Para obtener el último día del mes actual, usamos currentMonth (que ya es 1-12)
  const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Formatear fecha en ISO 8601 (YYYY-MM-DD) sin problemas de zona horaria
  const validThroughISO = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(lastDayOfMonth).padStart(2, '0')}`;

  // Determinar si el mes es impar o par
  const isOddMonth = currentMonth % 2 === 1;

  if (isOddMonth) {
    // Meses IMPARES: Evaluación Funcional GRATIS
    return {
      title: 'Evaluación Funcional GRATIS',
      value: '40€',
      description: 'Incluida con tu primera sesión',
      validThrough: validThroughISO,
    };
  } else {
    // Meses PARES: Clase Extra GRATIS
    return {
      title: 'Clase Extra GRATIS',
      value: '40€',
      description: 'Al contratar tu primer bono mensual',
      validThrough: validThroughISO,
    };
  }
}

/**
 * Helper para obtener un plan por ID
 */
export function getPricingPlanById(id: string): PricingPlan | undefined {
  return PRICING_PLANS.find((plan) => plan.id === id);
}

/**
 * Helper para obtener el plan destacado según el tipo de barrio
 * 
 * @param neighborhood - Nombre del barrio normalizado
 * @returns ID del plan a destacar
 */
export function getFeaturedPlanIdByNeighborhood(neighborhood: string): string {
  const normalized = neighborhood.toLowerCase();

  // Rivas (Futura, Covibar) → Destacar Grupos
  if (normalized.includes('futura') || normalized.includes('covibar') || normalized.includes('rivas')) {
    return 'group';
  }

  // Madrid Centro (Salamanca, Chamberí, Retiro) → Destacar Individual
  if (
    normalized.includes('salamanca') ||
    normalized.includes('chamberí') ||
    normalized.includes('chamberi') ||
    normalized.includes('retiro')
  ) {
    return 'individual';
  }

  // Por defecto, no destacar ninguno
  return '';
}

