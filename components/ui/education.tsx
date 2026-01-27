import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Image from "next/image";

import { educationData, currentlyData } from "@/data/education";

export default function Education() {

    return (
        <section id="education" className="py-20 lg:py-0 w-[90%] mx-auto min-h-screen text-brand-light">
        {/* Education Header */}
        <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Education
            </h2>
            <div className="h-1 w-20 bg-brand-accent mt-2"></div>
        </div>

        {/* Education Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationData.map((item, index) => (
            <SpotlightCard
                key={index}
                className="border border-brand-light/10 bg-brand-medium/10 rounded-br-3xl rounded-tl-3xl overflow-hidden flex flex-col cursor-pointer group"
                spotlightColor="rgba(5, 171, 107, 0.15)"
            >
                {item.image && (
                <div className="relative w-full aspect-video bg-brand-light/5 flex items-center justify-center p-8">
                    <Image
                    src={item.image}
                    alt={item.degree}
                    width={120}
                    height={120}
                    className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                <span className="text-brand-accent font-mono text-sm font-bold">{item.year}</span>
                <h3 className="text-2xl font-semibold mt-2 text-white">{item.degree}</h3>
                <p className="text-brand-light/60 mt-1 italic">{item.school}</p>
                <p className="mt-4 leading-relaxed text-brand-light/80">{item.description}</p>
                </div>
            </SpotlightCard>
            ))}
        </div>

        {/* Currently Header */}
        <div className="mt-60 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Currently
            </h2>
            <div className="h-1 w-20 bg-brand-accent mt-2"></div>
        </div>

        {/* Currently Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentlyData.map((item, index) => (
            <SpotlightCard
                key={index}
                className="border border-brand-light/10 bg-brand-medium/10 rounded-br-3xl rounded-tl-3xl overflow-hidden flex flex-col md:flex-row items-center group cursor-pointer"
                spotlightColor="rgba(5, 171, 107, 0.2)"
            >
                {/* Image/Logo Side */}
                <div className="relative w-full md:w-1/3 aspect-square bg-brand-light/5 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-brand-light/10">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="object-contain transition-all duration-700 scale-90 group-hover:scale-100"
                />
                </div>

                {/* Text Content Side */}
                <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-brand-accent font-mono text-sm font-bold bg-brand-accent/10 px-3 py-1 rounded-full">
                    {item.year}
                    </span>
                    <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-light/50 font-bold">Live</span>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-brand-accent font-medium italic">{item.place}</p>
                <p className="mt-4 leading-relaxed text-brand-light/70">{item.description}</p>
                </div>
            </SpotlightCard>
            ))}
        </div>
        </section>
    );
}