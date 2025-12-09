// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import Product from "../pages/Product";

// export default function Navbar() {
//     const [open, setOpen] = useState(false);

//     return (
//         <nav className="bg-blue-600 text-white shadow-md z-[9999]">
//             <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

//                 {/* Logo */}
//                 <h2 className="text-xl font-bold">MyWebsite</h2>

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex gap-8 font-semibold items-center">
//                     <li><Link to="/">HOME</Link></li>
//                     <li><Link to="/about">ABOUT</Link></li>
//                     <li><Product /></li>
//                     <li><Link to="/services">SERVICES</Link></li>
//                     <li><Link to="/tender">TENDER</Link></li>
//                     <li><Link to="/gallery">GALLERY</Link></li>
//                     <li><Link to="/contact">CONTACT</Link></li>
//                     <li><Link to="/downloads">DOWNLOADS</Link></li>
//                 </ul>

//                 {/* Mobile Menu Button */}
//                 <button className="md:hidden" onClick={() => setOpen(!open)}>
//                     {open ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* Mobile Dropdown */}
//             {open && (
//                 <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 font-semibold bg-blue-600">
//                     <li><Link to="/" onClick={() => setOpen(false)}>HOME</Link></li>
//                     <li><Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link></li>

//                     {/* Mobile Product Menu Simple */}
//                     {/* <li><Link to="/product" onClick={() => setOpen(false)}>PRODUCT</Link></li> */}
//                     <li><Product /></li>
//                     <li><Link to="/services" onClick={() => setOpen(false)}>SERVICES</Link></li>
//                     <li><Link to="/tender" onClick={() => setOpen(false)}>TENDER</Link></li>
//                     <li><Link to="/gallery" onClick={() => setOpen(false)}>GALLERY</Link></li>
//                     <li><Link to="/contact" onClick={() => setOpen(false)}>CONTACT</Link></li>
//                     <li><Link to="/downloads" onClick={() => setOpen(false)}>DOWNLOADS</Link></li>
//                 </ul>
//             )}
//         </nav>
//     );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Product from "../pages/Product";
import ProductDropdown from "../pages/ProductDropdown";

export default function Navbar() {
    const [open, setOpen] = useState(false);              // Mobile menu open
    const [productOpen, setProductOpen] = useState(false); // Product accordion

    return (
        <nav className="bg-blue-700 text-white shadow-lg sticky top-0 z-[9999]">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <h2 className="text-2xl font-bold tracking-wider">
                    MDCB
                </h2>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 font-semibold items-center">

                    <NavItem to="/">HOME</NavItem>
                    <NavItem to="/about">ABOUT</NavItem>

                    {/* PRODUCT ACCORDION
                    <li className="relative">
                        <button
                            onClick={() => setProductOpen(!productOpen)}
                            className="flex items-center gap-1 hover:text-black transition"
                        >
                            PRODUCT
                            <ChevronDown
                                size={18}
                                className={`transition-transform duration-300 
                                    ${productOpen ? "rotate-180" : "rotate-0"}
                                `}
                            />
                        </button>

                        <div
                            className={`absolute left-0 w-48 overflow-hidden transition-all duration-300
                                bg-blue-700 rounded-md shadow-lg
                                ${productOpen ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"}
                            `}
                        >
                            <div className="p-3">
                                <Product />
                            </div>
                        </div>
                    </li> */}
                    <li><ProductDropdown /></li>
                    <NavItem to="/services">SERVICES</NavItem>
                    <NavItem to="/tender">TENDER</NavItem>
                    <NavItem to="/gallery">GALLERY</NavItem>
                    <NavItem to="/contact">CONTACT</NavItem>
                    <NavItem to="/downloads">DOWNLOADS</NavItem>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 font-semibold bg-blue-700 text-white">

                    <MobileItem to="/" setOpen={setOpen}>HOME</MobileItem>
                    <MobileItem to="/about" setOpen={setOpen}>ABOUT</MobileItem>

                    {/* PRODUCT MOBILE ACCORDION */}
                    <li>
                        <button
                            onClick={() => setProductOpen(!productOpen)}
                            className="flex items-center justify-between py-2 w-full hover:text-black transition"
                        >
                            <span>PRODUCT</span>
                            <ChevronDown
                                size={20}
                                className={`transition-transform duration-300 
                                    ${productOpen ? "rotate-180" : "rotate-0"}
                                `}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300
                                ${productOpen ? "max-h-96 mt-2" : "max-h-0"}
                            `}
                        >
                            <div className="bg-blue-600 p-3 rounded-lg">
                                <Product />
                            </div>
                        </div>
                    </li>

                    <MobileItem to="/services" setOpen={setOpen}>SERVICES</MobileItem>
                    <MobileItem to="/tender" setOpen={setOpen}>TENDER</MobileItem>
                    <MobileItem to="/gallery" setOpen={setOpen}>GALLERY</MobileItem>
                    <MobileItem to="/contact" setOpen={setOpen}>CONTACT</MobileItem>
                    <MobileItem to="/downloads" setOpen={setOpen}>DOWNLOADS</MobileItem>
                </ul>
            )}
        </nav>
    );
}

/* ----------------------------------- Reusable Desktop Nav Item ----------------------------------- */
function NavItem({ to, children }) {
    return (
        <li>
            <Link
                to={to}
                className="relative group"
            >
                <span className="transition duration-200 group-hover:text-black">
                    {children}
                </span>

                {/* Underline Effect */}
                <span className="
                    absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white 
                    group-hover:w-full transition-all duration-300
                "></span>
            </Link>
        </li>
    );
}

/* ----------------------------------- Reusable Mobile Nav Item ----------------------------------- */
function MobileItem({ to, setOpen, children }) {
    return (
        <li>
            <Link
                to={to}
                onClick={() => setOpen(false)}
                className="block py-2 px-2 rounded-md hover:bg-blue-500 transition"
            >
                {children}
            </Link>
        </li>
    );
}



