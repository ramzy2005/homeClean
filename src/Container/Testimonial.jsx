import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CardTestimonial from "../components/CardTestimonial";
import client1 from "../images/testimonial1.jpg";
import client2 from "../images/testimonial2.jpg";
import client3 from "../images/testimonial3.jpg";
import client4 from "../images/testimanial4.jpg";
import client5 from "../images/testimanial5.jpg";
import { useRef } from "react";

export default function Testimonial() {
    const swiperRef = useRef(null); // Reference to Swiper instance

    return (
        <div className="relative overflow-hidden">
            {/* Shadow Gradient */}
            <div className="absolute top-0 left-0 h-full w-12 pl-20 pointer-events-none"></div>

            <div className="p-8 md:p-12 lg:p-16 flex flex-row items-center justify-between gap-6">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    What Our Clients Say
                </h2>
                {/* Navigation Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()} // Swipe left
                        className="p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-Primary" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()} // Swipe right
                        className="p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="text-Primary" />
                    </button>
                </div>
            </div>

            {/* Testimonial Slider */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
                spaceBetween={20}
                slidesPerView={1.2} 
                breakpoints={{
                    768: {
                        slidesPerView: 2.2, 
                    },
                    1024: {
                        slidesPerView: 3.2, 
                    },
                }}
                className="w-full pl-20"
            >
                <SwiperSlide>
                    <CardTestimonial
                        nm="John Doe"
                        text="The service was excellent! My house has never been this clean. The team was professional, efficient, and very friendly. I will definitely use their services again and recommend them to my friends and family."
                        img={client1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardTestimonial
                        nm="Jane Smith"
                        text="Very professional and on time. Highly recommend their services! The cleaner paid attention to every detail and left my home spotless. I was impressed by their dedication and quality of work."
                        img={client2}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardTestimonial
                        nm="Emily Davis"
                        text="I was amazed by the quality of service. The team was punctual, friendly, and left my house sparkling clean. I highly recommend them to anyone looking for reliable cleaning services."
                        img={client3}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardTestimonial
                        nm="Michael Brown"
                        text="Fantastic service! The cleaners were thorough and efficient. My home looks amazing, and I couldn't be happier with the results."
                        img={client4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardTestimonial
                        nm="Sarah Wilson"
                        text="Highly recommend this cleaning service! They exceeded my expectations and left my home spotless. Great attention to detail!"
                        img={client5}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}