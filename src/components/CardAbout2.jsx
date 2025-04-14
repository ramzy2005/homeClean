import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardAbout2({ image, title, icon }) {
    return (
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg group">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            {/* Content */}
            <div className="w-full pr-10 absolute bottom-4 left-4 text-white flex items-center justify-between space-x-4">
                {/* Icon and Title Inline */}
                <h3 className="text-xl font-bold">{title}</h3>
                <FontAwesomeIcon
                    icon={icon}
                    className="h-8 w-8 text-Primary transform transition-transform duration-300 hover:translate-x-1"
                />
            </div>
        </div>
    );
}