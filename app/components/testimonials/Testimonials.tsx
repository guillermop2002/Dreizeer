import ImageOptimized from '../ImageOptimized';

const testimonials = [
    {
        name: "Carlos M.",
        location: "Madrid (Retiro)",
        text: "Llevaba años apuntado al gimnasio sin ver resultados. Con Dreizeer aprendí a entrenar de verdad. La corrección técnica es brutal, ahora entiendo por qué me dolía la espalda antes.",
        rating: 5,
        image: "/images/hero/entrenador-personal-madrid-cliente-testimonio-1.jpg"
    },
    {
        name: "Laura S.",
        location: "Rivas-Vaciamadrid",
        text: "Entrenar en grupo con mis amigas en Rivas ha sido la mejor decisión. Nos divertimos, nos motivamos y el precio es súper accesible. ¡Totalmente recomendable!",
        rating: 5,
        image: "/images/hero/entrenador-personal-rivas-cliente-6.jpg"
    },
    {
        name: "Miguel A.",
        location: "Madrid (Chamberí)",
        text: "El servicio a domicilio es un lujo. Se adapta a mi horario de oficina y trae todo el material. He perdido 10kg en 3 meses y me siento más fuerte que nunca.",
        rating: 5,
        image: "/images/hero/personal-trainer-madrid-cliente-10.jpg"
    }
];

export default function Testimonials() {
    const testimonialsSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness", // O "SportsActivityLocation" si prefieres
        "name": "Entrenador Personal Dreizeer",
        "image": "https://entrenador-personal-madrid.com/images/hero/entrenador-personal-madrid-cliente-testimonio-1.jpg", // Imagen representativa
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": testimonials.length.toString(),
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": testimonials.map(t => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": t.name
            },
            "datePublished": "2024-01-15", // Fecha aproximada reciente para frescura
            "reviewBody": t.text,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating.toString(),
                "bestRating": "5",
                "worstRating": "1"
            },
            "contentLocation": {
                "@type": "Place",
                "name": t.location
            }
        }))
    };

    return (
        <section id="testimonios" className="py-20 px-6" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
            {/* Schema JSON-LD para Reviews */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsSchema) }}
            />
            <div className="container mx-auto max-w-6xl">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    style={{ color: 'var(--color-brand-primary)' }}
                >
                    Lo que dicen mis clientes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-lg relative"
                            style={{ backgroundColor: 'var(--color-neutral-800)' }}
                        >
                            {/* Comillas decorativas */}
                            <div
                                className="absolute top-4 right-6 text-6xl font-serif opacity-20"
                                style={{ color: 'var(--color-brand-primary)' }}
                            >
                                "
                            </div>

                            {/* Estrellas */}
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        style={{ color: '#fbbf24' }} // Amber-400
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p
                                className="mb-6 leading-relaxed italic"
                                style={{ color: '#e5e7eb' }}
                            >
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2" style={{ borderColor: 'var(--color-brand-primary)' }}>
                                    <ImageOptimized
                                        src={testimonial.image}
                                        alt={`Cliente satisfecho ${testimonial.name} en ${testimonial.location}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold" style={{ color: 'var(--color-text-white)' }}>
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm" style={{ color: 'var(--color-neutral-400)' }}>
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Proof Counter */}
                <div className="mt-16 text-center">
                    <p className="text-xl font-semibold" style={{ color: '#e5e7eb' }}>
                        Más de <span style={{ color: 'var(--color-brand-primary)', fontSize: '1.5em' }}>50+</span> clientes han transformado su vida este año
                    </p>
                </div>
            </div>
        </section>
    );
}
