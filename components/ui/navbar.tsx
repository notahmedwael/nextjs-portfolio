import Image from "next/image";
import Link from "next/link";
export default function Navbar(){
    return (
        <nav id="nav" className="my-5 w-[90%] mx-auto text-brand-light h-20 flex justify-between items-center">
            
            {/* Left Side */}
            <div>
                <div>
                    <Link href="#nav" className="">
                        <Image src="/favicon.ico" width={64} height={64} alt="logo"></Image>
                    </Link>
                </div>
            </div>

            {/* Middle Side */}
            <ul className="flex flex-row gap-10">
                <li className="hover:text-brand-accent duration-500">
                    <Link href="/">
                        Home
                    </Link>
                </li>
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
            <a href="mailto:notahmedwael888@gmail.com">
                <button type="button" className="p-2 bg-brand-light rounded-br-xl rounded-tl-xl text-brand-dark font-medium hover:bg-brand-accent hover:text-brand-light hover:cursor-pointer transition  duration-500">
                    Let&apos;s Talk!
                </button>
            </a>
        </nav>
    )
}