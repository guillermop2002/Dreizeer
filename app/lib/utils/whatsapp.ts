/**
 * Genera un enlace de WhatsApp con un mensaje predefinido.
 * 
 * @param message - El mensaje que aparecerá pre-relleno en el chat.
 * @returns La URL completa de WhatsApp (wa.me).
 */
export function getWhatsAppLink(message: string): string {
    const phoneNumber = '34637453753';
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Mensajes predefinidos para diferentes contextos de la web.
 */
export const WHATSAPP_MESSAGES = {
    general: "Hola, me gustaría información sobre entrenamiento personal.",
    pricing_group: "Hola, me interesa el plan de Small Group Training (desde 20€). ¿Me das más info?",
    pricing_individual: "Hola, me interesa el plan de Entrenamiento 1:1 (desde 30€). ¿Me das más info?",
    pricing_online: "Hola, me interesa la Asesoría Híbrida Online (desde 50€). ¿Me das más info?",
    hero: "Hola, me interesa empezar a entrenar. Me gustaría más información.",
    footer: "Hola, me gustaría agendar una sesión de valoración gratuita.",
    seniors: "Hola, busco información sobre gimnasia para tercera edad.",
    online_page: "Hola, quiero saber más sobre el coaching online.",
    about_me: "Hola, he leído tu historia y me gustaría entrenar contigo.",
    neighborhood_default: "Hola, me gustaría solicitar una sesión gratuita en tu zona.",
};
