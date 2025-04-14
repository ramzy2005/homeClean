import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import tv1 from "../images/frame1.svg";

export default function Tag() {
    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: -1000, // 5 seconds delay for slow motion
                    disableOnInteraction: false,
                }}
                loop={true} // Enable infinite looping
                speed={5100} // Set transition speed to 1 second for smooth motion
                className="w-full"
            >
                <SwiperSlide>
                    <img src={tv1} alt="Frame 1" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tv1} alt="Frame 2" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tv1} alt="Frame 3" className="w-full h-auto" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}