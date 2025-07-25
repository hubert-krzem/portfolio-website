import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-black">
            <div className="grid grid-cols-3 max-w-6xl mx-auto items-center p-4 w-full"> 
                {/* LEFT: Logo */}
                <Link href="/">
                    <Image
                        src="/logo-hk.svg"
                        alt="Site logo, lowercase h and k"
                        className="h-15 w-auto object-contain cursor-pointer"
                    />
                </Link>

                {/* CENTER: Nav links */}
                <ul className="flex justify-center space-x-10 text-black text-xs font-bold">
                    <li><a href="/about">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/Hubert_Krzemieniewski_CV.pdf">Resume</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

                {/* RIGHT: Socials */}
                <ul className="flex justify-end space-x-3 text-black text-xs font-bold">
                    <li><a href="#socials">Socials</a></li>
                </ul>
            </div>
        </nav>
    )
}