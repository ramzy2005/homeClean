export default function CardFanctionality({ number, title, description, circleColor, ringClass }) {
    return (
        <div className="w-full max-w-md p-6 bg-white rounded-lg ">
            {/* Circle with Number and Adaptive Ring */}
            <div
                className={`flex items-center justify-center w-16 h-16 text-white text-2xl font-bold rounded-full mx-auto ${ringClass}`}
                style={{
                    backgroundColor: circleColor,
                }}
            >
                {number}
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-center text-gray-800 mt-4">
                {title}
            </h3>
            {/* Paragraph */}
            <p className="text-sm text-center text-gray-600 mt-2">
                {description}
            </p>
        </div>
    );
}