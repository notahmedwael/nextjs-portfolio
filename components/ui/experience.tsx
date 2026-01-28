import { techLogos } from '@/data/techLogos';

import LogoLoop from "@/components/reactbits/LogoLoop";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

import Image from "next/image";

import { certificateData } from '@/data/experience';

export default function Experience() {

    return (
        <div id='experience' className='lg:mt-60 py-20 lg:py-0 w-[90%] mx-auto min-h-screen text-brand-light'>
            <div className="mt-24 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
                Skills
                </h2>
                <div className="h-1 w-20 bg-brand-accent mt-2"></div>
            </div>

            <div className='relative overflow-hidden bg-brand-medium/90 rounded-lg'>
                <LogoLoop
                    logos={techLogos}
                    speed={50}
                    direction="left"
                    logoHeight={100}
                    gap={80}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="bg-brand-medium"
                    ariaLabel="Skills"
                />
            </div>

            <div className="mt-20 lg:mt-44 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
                Certificates
                </h2>
                <div className="h-1 w-20 bg-brand-accent mt-2"></div>

                <div className='mt-4'>
                    <a
                    href="https://drive.google.com/drive/u/1/folders/1QD_T6aXCsX2FLoiwYH9Eb4yeRXcxrMSM"
                    target='_blank'
                    rel='noreferrer noopener'>
                    <h3 className='text-muted-foreground hover:text-brand-light hover:underline duration-500 cursor-pointer'>
                        Link to all of my certificates
                    </h3>
                    </a>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificateData.map((item, index) => (
                        <SpotlightCard
                            key={index}
                            className="border border-brand-light/10 bg-brand-medium/10 rounded-br-3xl rounded-tl-3xl overflow-hidden flex flex-col cursor-pointer group"
                            spotlightColor="rgba(5, 171, 107, 0.15)"
                        >
                            {item.image && (
                            <div className="relative w-full aspect-video bg-brand-light/5 flex items-center justify-center p-8">
                                <Image
                                src={item.image}
                                alt={item.title}
                                width={120}
                                height={120}
                                className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                />
                            </div>
                            )}
                            <div className="p-8 flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold mt-2 text-white">{item.title}</h3>
                            <p className="text-brand-light/60 mt-1 italic">{item.from}</p>
                            <p className="mt-4 leading-relaxed text-brand-light/80">{item.content}</p>
                            </div>
                        </SpotlightCard>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}