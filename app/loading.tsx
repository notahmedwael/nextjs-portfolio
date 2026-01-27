// app/loading.tsx
export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-brand-dark">
        <div className="relative flex flex-col items-center">
            {/* Animated Glass Spinner */}
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/10 border-t-white/60 backdrop-blur-md"></div>
            
            {/* Subtle Text */}
            <p className="mt-4 text-sm font-medium tracking-widest text-brand-light/40 uppercase animate-pulse">
            Loading Experience
            </p>
        </div>
        </div>
    )
}