"use client"
export default function Buttons() {
    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <button
                className="relative overflow-hidden px-6 py-3 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[rgba(197,255,50,0.5)] hover:bg-[var(--color-green-light)] active:scale-95 group"
                style={{ backgroundColor: 'var(--color-green-medium)' }}
            >
                <span className="flex items-center gap-2">
                    <span>Contáctame</span>
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[rgba(197,255,50,0.2)] to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>

            <button
                className="relative overflow-hidden px-6 py-3 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[rgba(82,166,70,0.5)] hover:bg-[var(--color-green-light)] active:scale-95 group"
                style={{ backgroundColor: 'var(--color-green-dark)' }}
            >
                <span className="flex items-center gap-2">
                    <span>Descargar CV</span>
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[rgba(82,166,70,0.2)] to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
        </div>

    )
}
