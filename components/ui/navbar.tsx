import Image from "next/image";
import Link from "next/link";

import StaggeredMenu from '@/components/reactbits/StaggeredMenu';

const menuItems = [
{ label: 'Education', ariaLabel: 'Learn about my education', link: '#education' },
{ label: 'Experience', ariaLabel: 'View my experience', link: '#experience' },
{ label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
{ label: 'Contact', ariaLabel: 'Reach out', link: '#contact' }
];

const socialItems = [
{ label: 'X', link: 'https://x.com/notahmedwael' },
{ label: 'GitHub', link: 'https://github.com/notahmedwael' },
{ label: 'LinkedIn', link: 'https://www.linkedin.com/in/ahmed-wael-9a6389284' }
];


export default function Navbar(){
    return (
        <nav id="nav" className="my-5 w-[90%] mx-auto text-brand-light h-20 flex justify-between items-center">
            
            {/* Staggered Menu Side For Smaller Devices */}
            <div className="block lg:hidden">
            <StaggeredMenu
                position="right"
                isFixed = {true}
                items={menuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={true}
                logoUrl="/favicon.ico"
                menuButtonColor="#eeeeee"
                openMenuButtonColor="#fff"
                changeMenuColorOnOpen={true}
                colors={['#05ab6b', '#367A60']}
                accentColor="#05ab6b"
            />
            </div>


            {/* Larger Screens Version */}
            {/* Left Side */}
            <div className="hidden lg:block">
                <div>
                    <Link href="#nav" className="">
                        <Image src="/favicon.ico" width={64} height={64} alt="logo"></Image>
                    </Link>
                </div>
            </div>

            {/* Middle Side */}
            <ul className="hidden lg:flex flex-row gap-10">
                <li className="hover:text-brand-accent duration-500">
                    <Link href="#education">
                    Education
                    </Link>
                </li>
                <li className="hover:text-brand-accent duration-500">
                    <Link href="#experience">
                    Experience
                    </Link>
                </li>
                <li className="hover:text-brand-accent duration-500">
                    <Link href="#projects">
                    Projects
                    </Link>
                </li>
                <li className="hover:text-brand-accent duration-500">
                    <Link href="#contact">
                    Contact
                    </Link>
                </li>
            </ul>

            {/* Right Side */}
            <div className="hidden lg:block" >
            <a href="mailto:notahmedwael888@gmail.com">
                <button type="button" className="p-2 bg-brand-light rounded-br-xl rounded-tl-xl text-brand-dark font-medium hover:bg-brand-accent hover:text-brand-light hover:cursor-pointer transition  duration-300">
                    Let&apos;s Talk!
                </button>
            </a>
            </div>

        </nav>
    )
}