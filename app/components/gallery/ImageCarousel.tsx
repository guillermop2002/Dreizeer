'use client';

import { useState, useEffect, useRef } from 'react';
import ImageOptimized from '../ImageOptimized';

const galleryImages = [
    {
        src: '/images/hero/grupo-entrenamiento-funcional-retiro-madrid.jpg',
        alt: 'Grupo de entrenamiento funcional en el Parque del Retiro, Madrid',
    },
    {
        src: '/images/hero/entrenador-personal-domicilio-salamanca.jpg',
        alt: 'Entrenador personal a domicilio en Barrio de Salamanca',
    },
    {
        src: '/images/hero/entrenamiento-fuerza-aire-libre-madrid-rio.jpg',
        alt: 'Entrenamiento de fuerza al aire libre en Madrid Río',
    },
    {
        src: '/images/hero/clase-grupal-fitness-rivas-vaciamadrid.jpg',
        alt: 'Clase grupal de fitness en Rivas-Vaciamadrid',
    },
    {
        src: '/images/hero/entrenador-personal-one-on-one-madrid.jpg',
        alt: 'Sesión individual one-on-one con entrenador personal en Madrid',
    },
    {
        src: '/images/hero/rutina-ejercicios-personalizada-madrid.jpg',
        alt: 'Rutina de ejercicios personalizada para cliente en Madrid',
    },
    {
        src: '/images/hero/gimnasio-aire-libre-madrid-arganzuela.jpg',
        alt: 'Gimnasio al aire libre en Arganzuela, Madrid',
    },
    {
        src: '/images/hero/entrenamiento-resistencia-parque-oeste-moncloa.jpg',
        alt: 'Entrenamiento de resistencia en el Parque del Oeste, Moncloa',
    },
];

export default function ImageCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll effect
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const speed = 1; // Pixels per frame
        let animationId: number;

        const step = () => {
            if (!isPaused && scrollContainer) {
                // Check if we've scrolled past the first set of images
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    // Reset to 0 instantly for seamless loop
                    scrollContainer.scrollLeft = 0;
                } else {
                    // Increment scroll position
                    scrollContainer.scrollLeft += speed;
                }
            }
            animationId = requestAnimationFrame(step);
        };

        animationId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    // Duplicate images for infinite loop effect
    const displayImages = [...galleryImages, ...galleryImages];

    return (
        <div
            className="relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-hidden whitespace-nowrap"
                style={{
                    scrollBehavior: 'auto', // Disable smooth scroll for JS animation
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                {displayImages.map((image, index) => (
                    <div
                        key={`${image.src}-${index}`}
                        className="flex-shrink-0 relative h-64 w-80 md:w-96 rounded-lg overflow-hidden inline-block"
                    >
                        <ImageOptimized
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
                        />
                    </div>
                ))}
            </div>

            {/* Gradient Overlays for smooth fade effect */}
            <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[var(--color-neutral-900)] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[var(--color-neutral-900)] to-transparent pointer-events-none" />
        </div>
    );
}
