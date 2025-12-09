import { useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
    const [openMain, setOpenMain] = useState(false);
    const [openSub, setOpenSub] = useState(null);

    const isDesktop = window.innerWidth >= 768;

    return (
        <div
            className="relative"
            onMouseEnter={() => isDesktop && setOpenMain(true)}
            onMouseLeave={() => isDesktop && setOpenMain(false)}
        >
            {/* PRODUCT BUTTON */}
            <button
                className="text-white font-semibold tracking-wide flex items-center gap-1 md:cursor-pointer"
                onClick={() => !isDesktop && setOpenMain(!openMain)} // Mobile click
            >
                PRODUCT <span className="text-sm">▼</span>
            </button>

            {/* MAIN DROPDOWN */}
            {openMain && (
                <div className="absolute md:left-0 md:top-full bg-blue-800 text-white rounded shadow-lg 
                                w-48 py-2 z-[9999] md:block hidden">
                    {/* Desktop Menu */}
                    <div
                        className="px-4 py-2 hover:bg-blue-700 cursor-pointer flex justify-between"
                        onMouseEnter={() => setOpenSub("loans")}
                    >
                        LOANS <span>›</span>
                    </div>

                    <div
                        className="px-4 py-2 hover:bg-blue-700 cursor-pointer flex justify-between"
                        onMouseEnter={() => setOpenSub("deposit")}
                    >
                        DEPOSIT <span>›</span>
                    </div>

                    <div
                        className="px-4 py-2 hover:bg-blue-700 cursor-pointer flex justify-between"
                        onMouseEnter={() => setOpenSub("card")}
                    >
                        CARD <span>›</span>
                    </div>
                </div>
            )}

            {/* MOBILE MENU */}
            {!isDesktop && openMain && (
                <div className="bg-blue-900 text-white mt-2 rounded overflow-hidden">
                    <div
                        className="px-4 py-2 flex justify-between cursor-pointer hover:bg-blue-700"
                        onClick={() => setOpenSub(openSub === "loans" ? null : "loans")}
                    >
                        LOANS <span>+</span>
                    </div>
                    {openSub === "loans" && (
                        <div className="bg-blue-800">
                            <Link to="/home-loan" className="block px-6 py-2 hover:bg-blue-700">HOME LOAN</Link>
                            <Link to="/vehicle-loan" className="block px-6 py-2 hover:bg-blue-700">VEHICLE LOAN</Link>
                        </div>
                    )}

                    <div
                        className="px-4 py-2 flex justify-between cursor-pointer hover:bg-blue-700"
                        onClick={() => setOpenSub(openSub === "deposit" ? null : "deposit")}
                    >
                        DEPOSIT <span>+</span>
                    </div>
                    {openSub === "deposit" && (
                        <div className="bg-blue-800">
                            <Link to="/savings" className="block px-6 py-2 hover:bg-blue-700">SAVINGS ACCOUNT</Link>
                            <Link to="/current" className="block px-6 py-2 hover:bg-blue-700">CURRENT ACCOUNT</Link>
                        </div>
                    )}

                    <div
                        className="px-4 py-2 flex justify-between cursor-pointer hover:bg-blue-700"
                        onClick={() => setOpenSub(openSub === "card" ? null : "card")}
                    >
                        CARD <span>+</span>
                    </div>
                    {openSub === "card" && (
                        <div className="bg-blue-800">
                            <Link to="/atm-card" className="block px-6 py-2 hover:bg-blue-700">ATM CARD</Link>
                            <Link to="/rupay" className="block px-6 py-2 hover:bg-blue-700">RUPAY CARD</Link>
                        </div>
                    )}
                </div>
            )}

            {/* DESKTOP SUBMENUS */}
            {isDesktop && openMain && openSub === "loans" && (
                <div className="absolute left-48 top-0 bg-blue-800 text-white rounded shadow-lg w-64 py-2 z-[9999]">
                    <Link to="/home-loan" className="block px-4 py-2 hover:bg-blue-700">HOME LOAN</Link>
                    <Link to="/vehicle-loan" className="block px-4 py-2 hover:bg-blue-700">VEHICLE LOAN</Link>
                </div>
            )}

            {isDesktop && openMain && openSub === "deposit" && (
                <div className="absolute left-48 top-12 bg-blue-800 text-white rounded shadow-lg w-64 py-2 z-[9999]">
                    <Link to="/savings" className="block px-4 py-2 hover:bg-blue-700">SAVINGS ACCOUNT</Link>
                    <Link to="/current" className="block px-4 py-2 hover:bg-blue-700">CURRENT ACCOUNT</Link>
                </div>
            )}

            {isDesktop && openMain && openSub === "card" && (
                <div className="absolute left-48 top-24 bg-blue-800 text-white rounded shadow-lg w-56 py-2 z-[9999]">
                    <Link to="/atm-card" className="block px-4 py-2 hover:bg-blue-700">ATM CARD</Link>
                    <Link to="/rupay" className="block px-4 py-2 hover:bg-blue-700">RUPAY CARD</Link>
                </div>
            )}
        </div>
    );
}
