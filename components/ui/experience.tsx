import {
    SiCplusplus, SiOpenjdk, SiHtml5, SiCss, SiTailwindcss, SiBootstrap,
    SiRadixui, SiJavascript, SiReact, SiVite, SiNextdotjs, SiVuedotjs,
    SiPython, SiFastapi, SiDjango, SiPostgresql, SiMysql, SiSqlite,
    SiMongodb, SiLinux, SiGit, SiGithub, SiDocker,
    SiVercel, SiNetlify, SiDart, SiFlutter
} from '@icons-pack/react-simple-icons';

import LogoLoop, { LogoItem } from "@/components/reactbits/LogoLoop";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

import Image from "next/image";

import { certificateData } from '@/data/experience';

export default function Experience() {
    const iconSize = 55;

    const techLogos: LogoItem[] = [
        { node: <SiCplusplus color="default" size={iconSize}/>, title: "C++", href: "https://isocpp.org/" },
        { node: <SiOpenjdk color="default" size={iconSize}/>, title: "Java", href: "https://www.oracle.com/java/" },
        { node: <SiHtml5 color="default" size={iconSize}/>, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { node: <SiCss color="default" size={iconSize}/>, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { node: <SiTailwindcss color="default" size={iconSize}/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiBootstrap color="default" size={iconSize}/>, title: "Bootstrap", href: "https://getbootstrap.com" },
        { node: <SiRadixui color="default" size={iconSize}/>, title: "RadixUI", href: "https://www.radix-ui.com" },
        { node: <SiJavascript color="default" size={iconSize}/>, title: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { node: <SiReact color="default" size={iconSize}/>, title: "React", href: "https://react.dev" },
        { node: <SiVite color="default" size={iconSize}/>, title: "Vite", href: "https://vitejs.dev" },
        { node: <SiNextdotjs color="default" size={iconSize}/>, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiVuedotjs color="default" size={iconSize}/>, title: "Vue.js", href: "https://vuejs.org" },
        { node: <SiPython color="default" size={iconSize}/>, title: "Python", href: "https://www.python.org" },
        { node: <SiFastapi color="default" size={iconSize}/>, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
        { node: <SiDjango color="default" size={iconSize}/>, title: "Django", href: "https://www.djangoproject.com" },
        { node: <SiPostgresql color="default" size={iconSize}/>, title: "PostgreSQL", href: "https://www.postgresql.org" },
        { node: <SiMysql color="default" size={iconSize}/>, title: "MySQL", href: "https://www.mysql.com" },
        { node: <SiSqlite color="default" size={iconSize}/>, title: "SQL Lite", href: "https://www.sqlite.org" },
        { node: <SiMongodb color="default" size={iconSize}/>, title: "MongoDB", href: "https://www.mongodb.com" },
        { node: <SiLinux color="default" size={iconSize}/>, title: "Linux", href: "https://www.linux.org" },
        { node: <SiGit color="default" size={iconSize}/>, title: "Git", href: "https://git-scm.com" },
        { node: <SiGithub color="default" size={iconSize}/>, title: "GitHub", href: "https://github.com" },
        { node: <SiDocker color="default" size={iconSize}/>, title: "Docker", href: "https://www.docker.com" },
        { node: <SiVercel color="default" size={iconSize}/>, title: "Vercel", href: "https://vercel.com" },
        { node: <SiNetlify color="default" size={iconSize}/>, title: "Netlify", href: "https://www.netlify.com" },
        { node: <SiDart color="default" size={iconSize}/>, title: "Dart", href: "https://dart.dev/" },
        { node: <SiFlutter color="default" size={iconSize}/>, title: "Flutter", href: "https://flutter.dev/" },
    ];

    
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
                        Link to all my certificates
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