"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Item = {
  id: number;
  url: string;
};

type Props = {
  autoplay?: boolean;
  delay?: number;
  items: Item[];
};

const TestimonialSlider: React.FC<Props> = ({
  autoplay = true,
  delay = 3000,
  items,
}) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={{
        prevEl: ".prev-btn",
        nextEl: ".next-btn",
      }}
      loop={true}
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      autoplay={
        autoplay
          ? {
              delay,
              disableOnInteraction: false,
            }
          : false
      }
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <div dangerouslySetInnerHTML={{ __html: item.url }}></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
