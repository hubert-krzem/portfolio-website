import Link from "next/link";

export default function Navbar() {
    return (
        <footer className="bg-white border-t border-black">
            <div className="grid grid-cols-2 max-w-6xl mx-auto items-center p-4 w-full">

                {/* LEFT: Logo*/}
                <div className="flex items-center space-x-4">
                    {/* Logo image */}
                        <img
                            src="/logo-hk.svg"
                            alt="Site logo, lowercase h and k"
                            className="h-15 w-auto object-contain"
                        />
                    {/* Copyright disclaimer */}
                    <ul className="text-black text-xs font-bold"> 
                        <li>© 2025 Hubert Krzemieniewski.</li>
                        <li>All rights reserved.</li>
                    </ul>
                </div>

                {/* RIGHT: Links*/}
                <div className="flex justify-end space-x-10 text-black text-xs font-bold text-right underline">
                    <ul> {/* Column 1 */}
                        <li>
                            <a href="https://linkedin.com/in/hubert-krzemieniewski">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/hubert-krzem">Github</a>
                        </li>
                    </ul>

                    <ul> {/* Column 2 */}
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>

                     <ul> {/* Column 3 */}
                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/Hubert_Krzemieniewski_CV.pdf">Resume</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>

                     <ul> {/* Column 4 */}
                        <li>
                            <a href="#top">Back to top</a>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    );
}