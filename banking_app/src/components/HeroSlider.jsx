import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HeroSlider() {
    const slides = [
        "https://www.mdccb.in/Admin/assets/sliders/1596523317_tmpphpsdi4si.png",
        "https://plus.unsplash.com/premium_photo-1719896332851-2e14f690281b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1720524513100-2fa5f656272f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://www.mdccb.in/Admin/assets/sliders/1596523388_tmpphpdd1olp.png"
    ];

    return (
        <section className="h-64 md:h-80">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
            >
                {slides.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="h-64 md:h-80 bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            {/* <div className="h-full w-full bg-black/40 flex items-center justify-center">
                                <div className="text-center text-white px-4">
                                    <h2 className="text-3xl md:text-4xl font-bold">
                                        Welcome to Murshidabad District Central Cooperative Bank
                                    </h2>
                                    <p className="mt-2 max-w-2xl mx-auto">
                                        Serving the community since 1962 — Deposits, Loans, Customer Service & more.
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

