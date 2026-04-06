import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Stack from "@/components/reactbits/Stack";
import Image from "next/image";
import { graduationProject } from "@/data/graduationProject";

export default function Projects() {

    const mintishSrc = `https://cdn.corner.inc/place-photo/AciIO2f6WnGUM31ZiDgi9JKLaJ8Yis1v0NKmOwD0t3i2AXNEOrFvK-fc6zdSnK1klME89cvLMyL4VfEUijZyxbrRfOnthJ3jEo13nDYRoeGX8P1IX2XjCkYJfHfXlyEGZ2Ka4f8KtdgNwcnUoZKVW5xGLtLNUO1wZXju0ig8ezMrm_5CKtorMSfzUPHd2I6TGgoSKJT1XDfYEhkQxACvbOaz8Efr9BjodPhYjogwV1y6wXe9gNrH-zIrTXh5ezD3L3VvLvC3FNaST2Sr3j0bAgJt0LfpU5XFKJt9QRXgx2H2ap3NMl0pTPabHncGFRHe1gkwhE8smwhEKWEib52AYKbaU1goTqbh8BPXTIAL3i8H6TZvM6u-EKKjYaMKY2ktofNHW1Nc0IfroPl1QjYXTnPWH1pLEiYJw2fo5S8Bb_WlsIz8B1kGFPin3qlvHTJ89Irk.jpeg`;
    const bookmaniaSrc = `https://static01.nyt.com/images/2015/10/24/opinion/24manguel/24manguel-articleLarge.jpg?quality=75&auto=webp&disable=upscale`;
    const mldlSrc = `https://cdn.prod.website-files.com/66817171a08a935845b83645/68db97c050642b88fee9f39d_6720377fb1aad73bbc9930a2_Neural%2520Networks.png`;
    const osSrc = `https://images.intellipaat.com/wp-content/uploads/2025/06/Architecture-of-UNIX-Operating-System.jpg`;
    const dataCompressionSrc = `https://familytreemagazine.com/wp-content/uploads/2016/10/library-repository-archive-feature.png`;
    const yourQuoteOfTheDaySrc = `https://cdn.searchenginejournal.com/wp-content/uploads/2018/05/creative-sources.png`;
    const chickenInvadersJsSrc = `https://play-lh.googleusercontent.com/R_iXIGBNCPi_LwMUnvAwa6QFPR3XqCbZlDGYETPpb_M8xKDyJL401j5FwpMtsUZP16U`;

    return (
        <section id="projects" className="py-16 lg:py-32 w-[95%] md:w-[90%] mx-auto min-h-screen flex flex-col gap-12 md:gap-20 text-brand-light">
            {/* Section Header */}
            <div>
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-white">
                    Previous Work
                </h2>
                <div className="h-1.5 w-20 md:w-24 bg-brand-accent mt-4 shadow-[0_0_15px_rgba(5,171,107,0.5)]"></div>
                    <a
                    href="https://github.com/notahmedwael?tab=repositories"
                    target='_blank'
                    rel='noreferrer noopener'>
                    <h3 className='text-muted-foreground hover:text-brand-light hover:underline duration-500 cursor-pointer mt-4'>
                        Link to all of my repos
                    </h3>
                    </a>
                </div>

            {/* Graduation Project Card */}
            <div className="grid grid-cols-1 gap-8 md:gap-12">
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
                            
                            <p className="mb-5">
                                <a
                                    href="https://github.com/notahmedwael/fake-image-react"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-brand-accent hover:underline font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Visit Repo
                                </a>
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['React.js', 'TypeScript', 'Tailwind' , 'Python', 'FastAPI', 'Tensorflow'].map((tech) => (
                                    <span key={tech} className="text-[10px] md:text-[11px] font-semibold text-white/40 border border-white/10 px-2 py-1 rounded md:group-hover:border-brand-accent/30 transition-colors bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </SpotlightCard>
            </div>



            {/* ML/DL Card */}
            <div className="grid grid-cols-1 gap-8 md:gap-12">
                <SpotlightCard
                    className="border border-white/10 bg-white/3 backdrop-blur-sm rounded-3xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-brand-accent/30"
                    spotlightColor="rgba(5, 171, 107, 0.15)"
                >
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Visual Side */}

                        <div className="relative w-full lg:w-[45%] h-64 sm:h-80 md:h-100 bg-linear-to-br from-brand-medium/20 to-transparent flex items-center justify-center p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            {/* Inner container with a slight tilt for "Perspective" */}
                            <div className="relative w-full h-full max-w-50 sm:max-w-64 md:max-w-75 max-h-50 sm:max-h-64 md:max-h-75 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                                
                                {/* Decorative Glow behind the image */}
                                <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <Image
                                        fill
                                        src={mldlSrc}
                                        alt="Neural Networks"
                                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 300px, 500px"
                                    />
                                    
                                </div>
                            </div>
                        </div>

                        {/* Content Side: Better Spacing for Mobile */}
                        <div className="p-6 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 md:px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                        2025 - Uni Assignments
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
                                Artificial Intelligence Projects
                            </h3>
                            <p className="text-brand-accent/80 font-medium text-base md:text-lg italic mb-6">
                                Cairo University - Faculty of Computers & AI
                            </p>
                            
                            <p className="text-brand-light/70 leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                                This repo has a list of some machine learning and deep learning projects. Which focused on different tasks like classification, detection.
                            </p>
                            <p className="mb-5">
                                <a
                                    href="https://github.com/notahmedwael/ml-dl-projects"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-brand-accent hover:underline font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Visit Repo
                                </a>
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['Python', 'Tensorflow', 'Jupyter Notebooks', 'Kaggle', 'Google Colab'].map((tech) => (
                                    <span key={tech} className="text-[10px] md:text-[11px] font-semibold text-white/40 border border-white/10 px-2 py-1 rounded md:group-hover:border-brand-accent/30 transition-colors bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </SpotlightCard>
            </div>




            {/* OS Card */}
            <div className="grid grid-cols-1 gap-8 md:gap-12">
                <SpotlightCard
                    className="border border-white/10 bg-white/3 backdrop-blur-sm rounded-3xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-brand-accent/30"
                    spotlightColor="rgba(5, 171, 107, 0.15)"
                >
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Visual Side */}

                        <div className="relative w-full lg:w-[45%] h-64 sm:h-80 md:h-100 bg-linear-to-br from-brand-medium/20 to-transparent flex items-center justify-center p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            {/* Inner container with a slight tilt for "Perspective" */}
                            <div className="relative w-full h-full max-w-50 sm:max-w-64 md:max-w-75 max-h-50 sm:max-h-64 md:max-h-75 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                                
                                {/* Decorative Glow behind the image */}
                                <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <Image
                                        fill
                                        src={osSrc}
                                        alt="Operating System"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 300px, 500px"
                                    />
                                    
                                </div>
                            </div>
                        </div>

                        {/* Content Side: Better Spacing for Mobile */}
                        <div className="p-6 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 md:px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                        2023 - Uni Assignments
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
                                Operating Systems
                            </h3>
                            <p className="text-brand-accent/80 font-medium text-base md:text-lg italic mb-6">
                                Cairo University - Faculty of Computers & AI
                            </p>
                            
                            <p className="text-brand-light/70 leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                                This repo has multiple programs that I built during Uni. It has a terminal simulation, synchronization with semaphores, also a CPU scheduling simulator using various scheduling algorithms like round robin, priority, etc..
                            </p>
                            <p className="mb-5">
                                <a
                                    href="https://github.com/notahmedwael/operating-systems"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-brand-accent hover:underline font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Visit Repo
                                </a>
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['Java', 'Algorithms', 'Data Structures'].map((tech) => (
                                    <span key={tech} className="text-[10px] md:text-[11px] font-semibold text-white/40 border border-white/10 px-2 py-1 rounded md:group-hover:border-brand-accent/30 transition-colors bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </SpotlightCard>
            </div>


            {/* Data Compression Card */}
            <div className="grid grid-cols-1 gap-8 md:gap-12">
                <SpotlightCard
                    className="border border-white/10 bg-white/3 backdrop-blur-sm rounded-3xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-brand-accent/30"
                    spotlightColor="rgba(5, 171, 107, 0.15)"
                >
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Visual Side */}

                        <div className="relative w-full lg:w-[45%] h-64 sm:h-80 md:h-100 bg-linear-to-br from-brand-medium/20 to-transparent flex items-center justify-center p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            {/* Inner container with a slight tilt for "Perspective" */}
                            <div className="relative w-full h-full max-w-50 sm:max-w-64 md:max-w-75 max-h-50 sm:max-h-64 md:max-h-75 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                                
                                {/* Decorative Glow behind the image */}
                                <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <Image
                                        fill
                                        src={dataCompressionSrc}
                                        alt="Archiving"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 300px, 500px"
                                    />
                                    
                                </div>
                            </div>
                        </div>

                        {/* Content Side: Better Spacing for Mobile */}
                        <div className="p-6 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 md:px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                        2023 - Uni Assignments
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
                                Data Compression
                            </h3>
                            <p className="text-brand-accent/80 font-medium text-base md:text-lg italic mb-6">
                                Cairo University - Faculty of Computers & AI
                            </p>
                            
                            <p className="text-brand-light/70 leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                                This repo has multiple data compression techniques implemented in Java.
                            </p>
                            <p className="mb-5">
                                <a
                                    href="https://github.com/notahmedwael/data-compression"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-brand-accent hover:underline font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Visit Repo
                                </a>
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['Java', 'Algorithms', 'Data Structures'].map((tech) => (
                                    <span key={tech} className="text-[10px] md:text-[11px] font-semibold text-white/40 border border-white/10 px-2 py-1 rounded md:group-hover:border-brand-accent/30 transition-colors bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </SpotlightCard>
            </div>



            {/* Bookmania Card */}
            <div className="grid grid-cols-1 gap-8 md:gap-12">
                <SpotlightCard
                    className="border border-white/10 bg-white/3 backdrop-blur-sm rounded-3xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-brand-accent/30"
                    spotlightColor="rgba(5, 171, 107, 0.15)"
                >
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Visual Side */}

                        <div className="relative w-full lg:w-[45%] h-64 sm:h-80 md:h-100 bg-linear-to-br from-brand-medium/20 to-transparent flex items-center justify-center p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            {/* Inner container with a slight tilt for "Perspective" */}
                            <div className="relative w-full h-full max-w-50 sm:max-w-64 md:max-w-75 max-h-50 sm:max-h-64 md:max-h-75 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                                
                                {/* Decorative Glow behind the image */}
                                <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <Image
                                        fill
                                        src={bookmaniaSrc}
                                        alt="Library"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 300px, 500px"
                                    />
                                    
                                </div>
                            </div>
                        </div>

                        {/* Content Side: Better Spacing for Mobile */}
                        <div className="p-6 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 md:px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                        2023 - Group Project
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
                                Bookmania
                            </h3>
                            <p className="text-brand-accent/80 font-medium text-base md:text-lg italic mb-6">
                                Cairo University - Faculty of Computers & AI
                            </p>
                            
                            <p className="text-brand-light/70 leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                                This project focused on building a full stack library with admins and users.
                            </p>
                            <p className="mb-5">
                                <a
                                    href="https://github.com/notahmedwael/bookmania"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-brand-accent hover:underline font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Visit Repo
                                </a>
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['HTML', 'CSS', 'Javascript', 'Python', 'Django'].map((tech) => (
                                    <span key={tech} className="text-[10px] md:text-[11px] font-semibold text-white/40 border border-white/10 px-2 py-1 rounded md:group-hover:border-brand-accent/30 transition-colors bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </SpotlightCard>
            </div>


            {/* Your Quote Of The Day Card */}
            <div className="grid grid-cols-1 gap-8 md:gap-12">
                <SpotlightCard
                    className="border border-white/10 bg-white/3 backdrop-blur-sm rounded-3xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-brand-accent/30"
                    spotlightColor="rgba(5, 171, 107, 0.15)"
                >
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Visual Side */}

                        <div className="relative w-full lg:w-[45%] h-64 sm:h-80 md:h-100 bg-linear-to-br from-brand-medium/20 to-transparent flex items-center justify-center p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            {/* Inner container with a slight tilt for "Perspective" */}
                            <div className="relative w-full h-full max-w-50 sm:max-w-64 md:max-w-75 max-h-50 sm:max-h-64 md:max-h-75 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                                
                                {/* Decorative Glow behind the image */}
                                <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <Image
                                        fill
                                        src={yourQuoteOfTheDaySrc}
                                        alt="Inspirational"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 300px, 500px"
                                    />
                                    
                                </div>
                            </div>
                        </div>

                        {/* Content Side: Better Spacing for Mobile */}
                        <div className="p-6 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 md:px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                        2025 - Personal Project
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
                                Your Quote Of The Day
                            </h3>
                            <p className="text-brand-accent/80 font-medium text-base md:text-lg italic mb-6">
                                Personal
                            </p>
                            
                            <p className="text-brand-light/70 leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                                This personal project aimed to sharpen my React.js skills as I used multiple react concepts like hooks and conditional rendering.
                            </p>
                            <p className="mb-5">
                                <a
                                    href="https://your-quote-of-the-day.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-brand-accent hover:underline font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Visit Website
                                </a>
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['React.js', 'Typescript', 'Tailwind', 'Vercel'].map((tech) => (
                                    <span key={tech} className="text-[10px] md:text-[11px] font-semibold text-white/40 border border-white/10 px-2 py-1 rounded md:group-hover:border-brand-accent/30 transition-colors bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </SpotlightCard>
            </div>

            {/* Mintish Card */}
            <div className="grid grid-cols-1 gap-8 md:gap-12">
                <SpotlightCard
                    className="border border-white/10 bg-white/3 backdrop-blur-sm rounded-3xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-brand-accent/30"
                    spotlightColor="rgba(5, 171, 107, 0.15)"
                >
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Visual Side */}

                        <div className="relative w-full lg:w-[45%] h-64 sm:h-80 md:h-100 bg-linear-to-br from-brand-medium/20 to-transparent flex items-center justify-center p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            {/* Inner container with a slight tilt for "Perspective" */}
                            <div className="relative w-full h-full max-w-50 sm:max-w-64 md:max-w-75 max-h-50 sm:max-h-64 md:max-h-75 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                                
                                {/* Decorative Glow behind the image */}
                                <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <Image
                                        fill
                                        src={mintishSrc}
                                        alt="Mintish Coffeehouse"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 300px, 500px"
                                    />
                                    
                                </div>
                            </div>
                        </div>

                        {/* Content Side: Better Spacing for Mobile */}
                        <div className="p-6 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 md:px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                        2025 - Freelancing
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 w-fit">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-tighter">Maintaining</span>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                                Mintish Coffeehouse
                            </h3>
                            <p className="text-brand-accent/80 font-medium text-base md:text-lg italic mb-6">
                                Seattle - USA
                            </p>
                            
                            <p className="text-brand-light/70 leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                                This project focused on providing a seamless ui/ux for a coffee house based in Seattle, USA.
                            </p>
                            <p className="mb-5">
                                <a
                                    href="https://mintishcoffee.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-brand-accent hover:underline font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Visit Website
                                </a>
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['React.js', 'TypeScript', 'Tailwind', 'Netlify', 'CDN'].map((tech) => (
                                    <span key={tech} className="text-[10px] md:text-[11px] font-semibold text-white/40 border border-white/10 px-2 py-1 rounded md:group-hover:border-brand-accent/30 transition-colors bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </SpotlightCard>
            </div>

            {/* Bookmania Card */}

            <div className="grid grid-cols-1 gap-8 md:gap-12">
                <SpotlightCard
                    className="border border-white/10 bg-white/3 backdrop-blur-sm rounded-3xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-brand-accent/30"
                    spotlightColor="rgba(5, 171, 107, 0.15)"
                >
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Visual Side */}

                        <div className="relative w-full lg:w-[45%] h-64 sm:h-80 md:h-100 bg-linear-to-br from-brand-medium/20 to-transparent flex items-center justify-center p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            {/* Inner container with a slight tilt for "Perspective" */}
                            <div className="relative w-full h-full max-w-50 sm:max-w-64 md:max-w-75 max-h-50 sm:max-h-64 md:max-h-75 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                                
                                {/* Decorative Glow behind the image */}
                                <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <Image
                                        fill
                                        src={chickenInvadersJsSrc}
                                        alt="Chicken Invaders"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 300px, 500px"
                                    />
                                    
                                </div>
                            </div>
                        </div>

                        {/* Content Side: Better Spacing for Mobile */}
                        <div className="p-6 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 md:px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                        2026 - Group Project
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
                                Chicken Invaders
                            </h3>
                            <p className="text-brand-accent/80 font-medium text-base md:text-lg italic mb-6">
                                ITI - Client Side Technologies Project
                            </p>
                            
                            <p className="text-brand-light/70 leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                                This project is a group project that I did with my colleagues in the ITI which focused on providing a smooth gameplay experience using vanilla JS.
                            </p>
                            <p className="mb-5">
                                <a
                                    href="https://github.com/asaadmansour/ChickenInvadersJs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-brand-accent hover:underline font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Visit Repo
                                </a>
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['HTML', 'CSS', 'Javascript', 'Canvas', 'Netlify'].map((tech) => (
                                    <span key={tech} className="text-[10px] md:text-[11px] font-semibold text-white/40 border border-white/10 px-2 py-1 rounded md:group-hover:border-brand-accent/30 transition-colors bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </SpotlightCard>
            </div>

                       {/* Bookmania Card */}

            <div className="grid grid-cols-1 gap-8 md:gap-12">
                <SpotlightCard
                    className="border border-white/10 bg-white/3 backdrop-blur-sm rounded-3xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-brand-accent/30"
                    spotlightColor="rgba(5, 171, 107, 0.15)"
                >
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Visual Side */}

                        <div className="relative w-full lg:w-[45%] h-64 sm:h-80 md:h-100 bg-linear-to-br from-brand-medium/20 to-transparent flex items-center justify-center p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            {/* Inner container with a slight tilt for "Perspective" */}
                            <div className="relative w-full h-full max-w-50 sm:max-w-64 md:max-w-75 max-h-50 sm:max-h-64 md:max-h-75 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                                
                                {/* Decorative Glow behind the image */}
                                <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <Image
                                        fill
                                        src={bookmaniaSrc}
                                        alt="Bookmania"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 300px, 500px"
                                    />
                                    
                                </div>
                            </div>
                        </div>

                        {/* Content Side: Better Spacing for Mobile */}
                        <div className="p-6 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 md:px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                        2026 - Group Project
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
                                Folio&Co
                            </h3>
                            <p className="text-brand-accent/80 font-medium text-base md:text-lg italic mb-6">
                                ITI - MEAN Stack Project
                            </p>
                            
                            <p className="text-brand-light/70 leading-relaxed text-base md:text-lg max-w-2xl mb-8">
                                This project is a group project that I did with my colleagues in the ITI which is an e-commerce app with an admin dashboard for a library website.
                            </p>
                            <p className="mb-5">
                                <a
                                    href="https://iti-mean-frontend.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-brand-accent hover:underline font-semibold hover:gap-4 transition-all duration-300"
                                >
                                    Visit Repo
                                </a>
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['Angular', 'Tailwind', 'Javascript', 'Node', 'Express', 'Mongo', 'Mongoose'].map((tech) => (
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