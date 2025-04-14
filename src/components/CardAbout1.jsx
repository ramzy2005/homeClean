export default function CardAbout1({ icon, title, paragraph }) {
    return (
        <div className=" flex flex-col items-center p-6 bg-white rounded-lg  transition duration-300 border border-gray-300">
            {/* Icon */}
            <div className="text-Primary mb-4">
                {icon}
            </div>
            {/* Title */}
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
            {/* Paragraph */}
            <p className="text-sm text-gray-600 text-center">
                {paragraph}
            </p>
        </div>
    );
}