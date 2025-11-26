/**
 * Generador de Alt Text dinámico para imágenes con SEO geo-localizado
 * Genera descripciones automáticas basadas en el nombre del archivo y contexto
 */

interface AltTextContext {
  city?: string;
  neighborhood?: string;
  serviceType?: 'local' | 'online' | 'tercera-edad' | 'hero' | 'perfil';
  action?: string;
}

/**
 * Extrae keywords del nombre del archivo
 */
function extractKeywordsFromFilename(filename: string): string[] {
  // Remover extensión
  const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '');
  
  // Dividir por guiones y convertir a array
  const keywords = nameWithoutExt
    .split(/[-_\s]+/)
    .map(word => word.toLowerCase())
    .filter(word => word.length > 2); // Filtrar palabras muy cortas
  
  return keywords;
}

/**
 * Genera alt text basado en el nombre del archivo y contexto
 */
export function generateImageAltText(
  imagePath: string,
  context?: AltTextContext
): string {
  // Extraer nombre del archivo de la ruta
  const filename = imagePath.split('/').pop() || imagePath;
  const keywords = extractKeywordsFromFilename(filename);

  // Si hay contexto, usarlo para generar alt más específico
  if (context) {
    const parts: string[] = [];

    // Tipo de servicio
    if (context.serviceType === 'perfil') {
      parts.push('Foto de perfil de');
      parts.push('Dreizeer');
      if (context.city) parts.push(`en ${context.city}`);
      parts.push('entrenador personal especializado');
    } else if (context.serviceType === 'hero') {
      parts.push('Entrenador personal');
      if (context.action) parts.push(context.action);
      if (context.city) parts.push(`en ${context.city}`);
      if (context.neighborhood) parts.push(`${context.neighborhood}`);
    } else if (context.serviceType === 'local') {
      parts.push('Entrenamiento personal');
      if (context.neighborhood) parts.push(`en ${context.neighborhood}`);
      if (context.city) parts.push(`${context.city}`);
    } else if (context.serviceType === 'tercera-edad') {
      parts.push('Gimnasia a domicilio para mayores');
      if (context.city) parts.push(`en ${context.city}`);
      parts.push('con entrenador personal especializado');
    } else if (context.serviceType === 'online') {
      parts.push('Análisis de técnica por video');
      parts.push('para entrenamiento online personalizado');
    }

    return parts.join(' ') + '.';
  }

  // Fallback: Generar alt basado en keywords del nombre
  if (keywords.length > 0) {
    // Detectar tipo de imagen por keywords
    if (keywords.some(k => k.includes('perfil') || k.includes('profile'))) {
      return `Foto de perfil de entrenador personal Dreizeer en Madrid.`;
    }
    
    if (keywords.some(k => k.includes('entren') || k.includes('train'))) {
      const location = keywords.find(k => 
        k.includes('madrid') || k.includes('rivas') || 
        k.includes('retiro') || k.includes('salamanca') ||
        k.includes('vallecas') || k.includes('chamberi')
      );
      
      if (location) {
        return `Entrenamiento personal en ${location} con Dreizeer.`;
      }
      return `Entrenamiento personal con Dreizeer.`;
    }

    if (keywords.some(k => k.includes('grupo') || k.includes('group'))) {
      return `Grupo reducido de entrenamiento personal.`;
    }

    // Alt genérico basado en keywords
    const relevantKeywords = keywords
      .filter(k => !['imagen', 'image', 'foto', 'photo', 'jpg', 'jpeg', 'png'].includes(k))
      .slice(0, 4)
      .join(' ');
    
    return `Imagen de ${relevantKeywords || 'entrenamiento personal'}.`;
  }

  // Fallback final
  return 'Imagen de entrenamiento personal con Dreizeer.';
}

/**
 * Helper para generar alt text específico por página
 */
export function getImageAltForPage(
  pageType: 'home' | 'sobre-mi' | 'online' | 'tercera-edad' | 'local',
  imageType: 'hero' | 'perfil' | 'servicio' | 'testimonio',
  city?: string,
  neighborhood?: string
): string {
  const context: AltTextContext = {
    city,
    neighborhood,
    serviceType: pageType === 'local' ? 'local' : 
                 pageType === 'online' ? 'online' :
                 pageType === 'tercera-edad' ? 'tercera-edad' :
                 pageType === 'sobre-mi' ? 'perfil' : 'hero',
  };

  if (imageType === 'hero') {
    return generateImageAltText('hero', { ...context, action: 'corrigiendo técnica' });
  }

  if (imageType === 'perfil') {
    return generateImageAltText('perfil', context);
  }

  return generateImageAltText('servicio', context);
}

