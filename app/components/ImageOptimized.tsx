import Image from 'next/image';
import { generateImageAltText } from '../utils/imageAltGenerator';

interface ImageOptimizedProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * Componente optimizado de imagen con SEO automático
 * Usa next/image para optimización automática (WebP, lazy loading, etc.)
 */
export default function ImageOptimized({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  style,
  fill = false,
  sizes,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
}: ImageOptimizedProps) {
  // Generar alt text automático si no se proporciona
  const finalAlt = alt || generateImageAltText(src);

  // Si es fill, no necesita width/height
  if (fill) {
    return (
      <Image
        src={src}
        alt={finalAlt}
        fill
        priority={priority}
        className={className}
        style={style}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
      />
    );
  }

  // Si no es fill, width y height son requeridos
  if (!width || !height) {
    throw new Error('ImageOptimized: width and height are required when fill is false');
  }

  return (
    <Image
      src={src}
      alt={finalAlt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={style}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
    />
  );
}

