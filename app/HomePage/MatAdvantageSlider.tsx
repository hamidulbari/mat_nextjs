"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";




const MatAdvantageSlider: React.FC = () => {
    const swiperData = {
        slides: [
            {
                id: 1,
                title: "Proven Legacy",
                description: "Over 35 years as a Trusted gateway to management education."
            },
            {
                id: 2,
                title: "Massive Reach",
                description:
                    "Chosen by over 30 lakh candidates, spanning decades of excellence and trust across generations."
            },
            {
                id: 3,
                title: "Nationwide Acceptance",
                description:
                    "MAT Scores are accepted by 600+ Top & Leading B-Schools across India."
            },
            {
                id: 4,
                title: "Government Recognition",
                description:
                    "Approved by the Ministry of Education, Govt. of India."
            },
            {
                id: 5,
                title: "Exam Flexibility",
                description:
                    "Available in Paper Based and Computer Based Test Modes."
            },
            {
                id: 6,
                title: "Value for Aspirants",
                description:
                    "Affordable fees with high return in opportunities and access."
            }
        ]
    };

    return (
        <Swiper
            modules={[Navigation]}
            navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
            }}
        >
            {swiperData.slides.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="w-full text-white min-h-[200px] flex flex-col justify-between p-[20px] rounded-lg shadow bg-[#F7F7F724]">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2">{item.description}</p>
                    </div>
                </SwiperSlide>
            ))}

            <div className="navigationButton  text-white ">
                <button className="prev-btn absolute top-[50%]  z-[2332] -translate-y-1/2 cursor-pointer
   left-0">
                    <FaChevronLeft size={24} />
                </button>

                <button className="next-btn cursor-pointer absolute top-[50%]  z-[2332] -translate-y-1/2 right-0">
                    <FaChevronRight size={24} />
                </button>
            </div>
        </Swiper>
    );
};

export default MatAdvantageSlider;