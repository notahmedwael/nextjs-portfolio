import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Stack from "@/components/reactbits/Stack";
import Image from "next/image";
import { graduationProject } from "@/data/graduationProject";

export default function Projects() {
    return (
        <section id="projects" className="py-16 lg:py-32 w-[95%] md:w-[90%] mx-auto min-h-screen">
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-white">
                    Previous Work
                </h2>
                <div className="h-1.5 w-20 md:w-24 bg-brand-accent mt-4 shadow-[0_0_15px_rgba(5,171,107,0.5)]"></div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:gap-12">
                {/* Project Card */}
                <SpotlightCard
                    className="border border-white/10 bg-white/3 backdrop-blur-sm rounded-3xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-brand-accent/30"
                    spotlightColor="rgba(5, 171, 107, 0.15)"
                >
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Visual Side */}
                        <div className="relative w-full lg:w-[45%] h-64 sm:h-80 md:h-100 bg-linear-to-br from-brand-medium/20 to-transparent flex items-center justify-center p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            
                            <div className="w-full h-full max-w-50 sm:max-w-64 md:max-w-75 max-h-50 sm:max-h-64 md:max-h-75">
                                <Stack
                                    randomRotation={false}
                                    sensitivity={100}
                                    sendToBackOnClick={true}
                                    cards={graduationProject.map((src, i) => (
                                        <div key={i} className="w-full h-full rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl">
                                            <Image
                                                fill
                                                src={src}
                                                alt={`Project preview ${i + 1}`}
                                                className="object-cover"
                                                sizes="(max-width: 768px) 200px, 300px"
                                            />
                                        </div>
                                    ))}
                                        autoplay
                                        autoplayDelay={2000}
                                        pauseOnHover
                                />
                            </div>
                        </div>

                        {/* Content Side: Better Spacing for Mobile */}
                        <div className="p-6 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 md:px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                        2025 - Graduation Project
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 w-fit">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-tighter">Completed</span>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                                Fake Image / Video Detection
                            </h3>
                            <p className="text-brand-accent/80 font-medium text-base md:text-lg italic mb-6">
                                Cairo University - Faculty of Computers & AI
                            </p>
                            
                            <p className="text-brand-light/70 leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                                This project focused on detecting humans, animals, scenery and then classifying these images or videos into real or fake. For images we achieved a stunning accuracy of 99.8% using Xception model after fine tuning multiple times on multiple data sets.
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['React.js', 'TypeScript', 'Python', 'FastAPI', 'Tensorflow'].map((tech) => (
                                    <span key={tech} className="text-[10px] md:text-[11px] font-semibold text-white/40 border border-white/10 px-2 py-1 rounded md:group-hover:border-brand-accent/30 transition-colors bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </SpotlightCard>
            </div>
        </section>
    );
}