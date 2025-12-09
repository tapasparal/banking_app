import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaGlobe,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white pt-10 pb-6 px-6">

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Column 1 - About */}
                <div>
                    <h3 className="font-bold text-lg mb-4">ABOUT US</h3>
                    <p className="text-sm leading-6 text-gray-300">
                        Murshidabad District Central Co-Operative Bank Ltd. provides
                        transparent and trusted banking services to the people of the district.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 text-xl">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Column 2 - Internal Links */}
                <div>
                    <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/product" className="hover:text-white">Products</Link></li>
                        <li><Link to="/downloads" className="hover:text-white">Downloads</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3 - External / Important Links */}
                <div>
                    <h3 className="font-bold text-lg mb-4">IMPORTANT LINKS</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">

                        <li>
                            <a
                                href="https://www.rbi.org.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                Reserve Bank of India (RBI)
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.nabard.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                NABARD
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://coopwb.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                Cooperative WB
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://uidai.gov.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                UIDAI (Aadhaar)
                            </a>
                        </li>

                             <li>
                            <a
                                href="https://www.rupay.co.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                RuPay
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://india.gov.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                National Portal of India
                            </a>
                        </li>

                    </ul>
                </div>

                {/* Column 4 - Contact */}
                <div>
                    <h3 className="font-bold text-lg mb-4">CONTACT</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li>Head Office</li>
                        <li>Murshidabad, West Bengal</li>
                        <li>Email: info@mdccb.in</li>
                        <li>Phone: +91 7605-071-507</li>
                    </ul>

                    {/* Official Website */}
                    <a
                        href="https://mdccb.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-gray-200 hover:text-white text-sm"
                    >
                        <FaGlobe /> Visit Official Website
                    </a>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
                © {new Date().getFullYear()} Murshidabad District Central Co-Operative Bank Ltd.
                All Rights Reserved.
            </div>

        </footer>
    );
}
