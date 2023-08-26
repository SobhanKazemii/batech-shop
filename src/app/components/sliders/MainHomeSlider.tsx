"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const MainHomeSlider: FC = () => {
    return (
        <div>
            <Swiper slidesPerView={1} spaceBetween={15}>
                {[1, 2, 3].map((i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-red-300">{i}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MainHomeSlider;
