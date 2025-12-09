import React, { useState } from "react";
import TopInfoBar from "../components/TopInfoBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryImages = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <>
            <div>
                <TopInfoBar />
                <Header />
                <Navbar />
            </div>
            <div className="w-full bg-gray-100 py-10">
                <div className="max-w-7xl mx-auto bg-white shadow-sm p-10">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-700">Gallery</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className="w-full overflow-hidden rounded cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img}
                                    alt="gallery"
                                    className="w-full h-64 object-cover hover:scale-105 duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="enlarged"
                                className="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
                            />
                            <button
                                className="absolute top-2 right-2 text-white text-2xl font-bold"
                                onClick={() => setSelectedImage(null)}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
