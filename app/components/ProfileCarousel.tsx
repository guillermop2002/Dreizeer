'use client';

import { useState, useEffect } from 'react';
import ImageOptimized from './ImageOptimized';

interface ProfileCarouselProps {
  images: string[];
  altPrefix?: string;
}

export default function ProfileCarousel({ images, altPrefix = 'Foto de perfil de Dreizeer' }: ProfileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative rounded-lg shadow-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
      {/* Imagen actual */}
      <div className="relative w-full h-full">
        <ImageOptimized
          src={images[currentIndex]}
          alt={currentIndex === 0 ? altPrefix : `${altPrefix} - Imagen ${currentIndex + 1}`}
          fill
          priority={currentIndex === 0}
          className="object-cover"
        />
      </div>

      {/* Navegación con puntos */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-3 h-3'
                  : 'w-2 h-2 opacity-50'
              }`}
              style={{
                backgroundColor: index === currentIndex 
                  ? 'var(--color-brand-primary)' 
                  : 'rgba(255, 255, 255, 0.5)',
              }}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

