export default function Loading() {
    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-neutral-900)' }}
        >
            <div className="flex flex-col items-center gap-4">
                <div
                    className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
                    style={{
                        borderColor: 'var(--color-neutral-700)',
                        borderTopColor: 'var(--color-brand-primary)',
                    }}
                />
                <p className="text-sm font-medium" style={{ color: 'var(--color-neutral-400)' }}>
                    Cargando...
                </p>
            </div>
        </div>
    );
}
