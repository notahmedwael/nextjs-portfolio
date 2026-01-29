"use client";

import Image from "next/image"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="mt-20 mb-10 w-[90%] md:w-[60%] mx-auto text-brand-light">
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Left Side: Contact */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white">
                            Contact
                        </h2>
                        <div className="h-1.5 w-20 md:w-24 mt-4 bg-brand-accent shadow-[0_0_15px_rgba(5,171,107,0.5)]"></div>
                        
                        <div className="mt-12 flex flex-col gap-6 text-lg font-medium md:text-xl">
                            {/* Contact Links */}
                            {[
                                { name: "Discord", img: "/discord.png", href: "https://discordapp.com/users/605552517404688384" },
                                { name: "Github", img: "/github3.png", href: "https://github.com/notahmedwael" },
                                { name: "Linkedin", img: "/linkedin.png", href: "https://www.linkedin.com/in/ahmed-wael-9a6389284/" },
                                { name: "X (Twitter)", img: "/x3.png", href: "https://x.com/notahmedwael" }
                            ].map((link) => (
                                <div key={link.name} className="flex items-center gap-4 group">
                                    <Image src={link.img} alt={link.name} width={28} height={28} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        <p className="hover:underline hover:text-brand-accent transition duration-500">
                                            {link.name}
                                        </p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Status & Quick Info */}
                    <div className="flex flex-col gap-6 md:text-right items-start md:items-end w-full md:w-auto">
                        <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-full px-4 py-1 flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                            </span>
                            <span className="text-sm font-medium text-brand-accent">Available for new projects</span>
                        </div>
                        
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="text-sm hover:text-brand-accent transition-colors flex items-center gap-2 group cursor-pointer"
                        >
                            Back to top <span className="group-hover:-translate-y-1 transition-transform">↑</span>
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="text-center mt-20 border-t border-brand-accent/20 pt-8">
                    <h4 className="text-sm opacity-80 mb-2">
                        Made with ♥️ by <span className="text-white font-semibold">Ahmed Wael</span>
                    </h4>
                    <p className="text-[10px] uppercase tracking-widest opacity-50">
                        Built with Next.js • Tailwind CSS • React Bits
                    </p>
                    <p className="text-[10px] mt-4 opacity-40">
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}