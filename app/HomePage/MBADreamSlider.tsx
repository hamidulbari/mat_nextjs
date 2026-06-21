"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const swiperData = {
    slides: [
        {
            id: 1,
            title: "Flexible Test Modes",
            description:
                "Choose Paper Based or Computer Based Test Mode as per your convenience."
        },
        {
            id: 2,
            title: "Multiple Attempts in a year",
            description:
                "Take MAT in February, May, September, or December — maximize your chances."
        },
        {
            id: 3,
            title: "Use Your Best Score",
            description:
                "Submit your highest MAT score, unlock opportunities with top MBA and PGDM institutes."
        },
        {
            id: 4,
            title: "One-Year Score Validity",
            description:
                "Unlock Admissions to Leading B-Schools with a MAT Score Valid for One year."
        },
        {
            id: 5,
            title: "Apply Widely with One Exam",
            description:
                "Reach multiple B-Schools across India with just a single MAT attempt."
        },
        {
            id: 6,
            title: "Save on Fees",
            description:
                "Get fee concessions when you choose both PBT and CBT exam modes."
        }
    ]
};


const MBADreamSlider: React.FC = () => {
    return (
        <>
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
                        <div className="w-full min-h-[200px] flex flex-col justify-between p-[20px] rounded-lg shadow bg-white">
                            <h3 className="text-xl font-semibold !text-xl primary-color">{item.title}</h3>
                            <p className="mt-2">{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="navigationButton text-heading ">
                    <button className="prev-btn absolute top-[50%]  z-[2332] -translate-y-1/2 cursor-pointer
       left-0">
                        <FaChevronLeft size={24} className="primary-color" />
                    </button>

                    <button className="next-btn cursor-pointer absolute top-[50%]  z-[2332] -translate-y-1/2 right-0">
                        <FaChevronRight size={24} className="primary-color" />
                    </button>
                </div>
            </Swiper>
        </>
    )

}

export default MBADreamSlider;