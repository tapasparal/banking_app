import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDropdown() {
    const [openMain, setOpenMain] = useState(false);
    const [subMenu, setSubMenu] = useState(null);

    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSub, setMobileSub] = useState(null);

    const menu = {
        LOANS: [
            "HOME LOAN",
            "VEHICLE LOAN",
            "CASH CREDIT LOAN",
            "PERSONAL LOAN",
            "ECCS LOAN",
            "SHG LOAN",
            "KCC LOAN",
            "WORK ORDER LOAN",
            "TERM LOAN",
            "LOAN AGAINST NSC/ KVP/ LIC",
            "LOAN AGAINST DEPOSIT",
        ],
        DEPOSIT: [
            "SAVINGS ACCOUNT",
            "CURRENT ACCOUNT",
            "FIXED DEPOSIT",
            "CASH CERTIFICATE",
            "RECURRING DEPOSIT",
            "MIS",
        ],
        CARD: ["RuPay DEBIT Cum ATM", "KISHAN CREDIT CARD"],
    };

    return (
        <>
            {/* ================== DESKTOP ================== */}
            <div
                className="relative hidden md:block"
                onMouseEnter={() => setOpenMain(true)}
                onMouseLeave={() => {
                    setOpenMain(false);
                    setSubMenu(null);
                }}
            >
                <button className="px-4 py-2 font-semibold text-white hover:text-black transition">
                    PRODUCT ▾
                </button>

                {/* Main Dropdown */}
                {openMain && (
                    <div className="absolute left-0 mt-1 bg-blue-900 text-white w-48 shadow-xl rounded-sm z-50">
                        {Object.keys(menu).map((item) => (
                            <div
                                key={item}
                                onMouseEnter={() => setSubMenu(item)}
                                className="px-4 py-3 border-b border-blue-700 hover:bg-blue-800 cursor-pointer flex justify-between items-center"
                            >
                                <span>{item}</span>
                                <span className="text-gray-300">›</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Sub Dropdown */}
                {subMenu && (
                    <div className="absolute left-48 top-0 mt-1 bg-blue-800 text-white w-64 shadow-xl rounded-sm p-2 z-50">
                        {menu[subMenu].map((item) => (
                            <Link
                                key={item}
                                className="block px-4 py-2 hover:bg-blue-700 rounded-sm"
                                to={"/" + item.toLowerCase().replace(/\s+/g, "_")}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* ================== MOBILE ================== */}
            <div className="md:hidden">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="w-full flex justify-between items-center px-4 py-3 font-semibold text-white bg-blue-600"
                >
                    PRODUCT
                    <span>{mobileOpen ? "▲" : "▼"}</span>
                </button>

                {/* Mobile Main List */}
                {mobileOpen && (
                    <div className="bg-blue-800 text-white px-4 py-2">
                        {Object.keys(menu).map((item) => (
                            <div key={item} className="mb-2">
                                {/* Section Button */}
                                <button
                                    onClick={() =>
                                        setMobileSub(mobileSub === item ? null : item)
                                    }
                                    className="w-full flex justify-between items-center py-2 font-semibold hover:text-gray-200"
                                >
                                    {item}
                                    <span>{mobileSub === item ? "▲" : "▼"}</span>
                                </button>

                                {/* Sub Items */}
                                {mobileSub === item && (
                                    <div className="pl-4">
                                        {menu[item].map((sub) => (
                                            <Link
                                                key={sub}
                                                className="block py-2 text-sm hover:text-gray-300"
                                                to={"/" + sub.toLowerCase().replace(/\s+/g, "_")}
                                            >
                                                {sub}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
