/**
 * Capitalizes the first letter of each word in a string.
 * Handles hyphens and spaces correctly.
 * Example: "madrid-rio" -> "Madrid Río" (if spaces are passed) or "Madrid-Rio"
 * Example: "madrid río" -> "Madrid Río"
 */
export function capitalize(text: string): string {
    if (!text) return text;

    // Split by common separators (space, hyphen) but keep them to rejoin later?
    // Simpler approach: Split by space, capitalize each word.
    // If the input comes from URL params, it might be "madrid-rio" or "madrid%20rio" (decoded to "madrid rio").

    return text
        .split(' ')
        .map(word => {
            // Handle hyphenated words like "Rivas-Vaciamadrid"
            if (word.includes('-')) {
                return word
                    .split('-')
                    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
                    .join('-');
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}
