import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";
import { useRef } from "react";

export default function CardService({ images, title, cleanerName, rating, buttonText }) {
    const swiperRef = useRef(null);

    const slidePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
            {/* Image Section with Swiper */}
            <div className="relative w-full h-64">
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) =>
                            `<span class="${className} bg-white"></span>`,
                    }}
                    loop={true}
                    className="h-full"
                    onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Slide Buttons */}
                <button
                    onClick={slidePrev}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-Primary p-3 rounded-full hover:bg-gray-300 z-10"
                >
                    &#8249;
                </button>
                <button
                    onClick={slideNext}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-Primary p-3 rounded-full hover:bg-gray-300 z-10"
                >
                    &#8250;
                </button>
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mt-4 px-4">{title}</h3>
            {/* Cleaner Name */}
            <p className="text-sm text-gray-600 px-4">By {cleanerName}</p>
            {/* Rating Section */}
            <div className="flex items-center px-4 mt-2">
                {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={`h-4 w-4 ${index < Math.round(rating) ? "text-yellow-500" : "text-gray-300"}`}
                    />
                ))}
                <span className="text-sm text-gray-600 ml-2">({rating})</span>
            </div>
            {/* Book Now Button */}
            <div className="px-4 mt-4 mb-4">
                <button className="w-full bg-Primary text-white py-2 rounded-lg hover:bg-opacity-90 transition">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}