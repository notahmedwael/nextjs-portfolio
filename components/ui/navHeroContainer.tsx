import Navbar from "./navbar"
import Hero from "./hero"
import DarkVeil from "@/components/reactbits/DarkVeil"
export default function NavHeroContainer(){
    return(
        <header className="relative w-full md:h-screen overflow-hidden">
            {/* The Background Container */}
            <div className="absolute inset-0 z-0">
                <DarkVeil
                hueShift={55}
                noiseIntensity={0.02}
                speed={0.5}
                resolutionScale={1}
                />
            </div>

            {/* Navbar +  Hero Content */}
            <div className="relative z-10 flex flex-col h-full text-brand-light">
                <Navbar />
                <Hero />
            </div>
    </header>
    )
}