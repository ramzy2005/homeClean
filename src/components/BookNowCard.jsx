import { useState } from "react";

export default function BookNowCard({ imgUrl, title, rating, description }) {
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
    const [popupMessage, setPopupMessage] = useState(""); // State to control popup message

    const handlePopup = (message) => {
        setPopupMessage(message); 
        setShowPopup(true); 
    };

    return (
        <div className="w-96 flex items-center flex-col border border-gray-300 rounded-lg p-6">
            {/* Image Section */}
            <div className="flex-shrink-0 mb-4">
                <img
                    src={imgUrl} // Use the image URL passed as a prop
                    alt={title}
                    className="w-24 h-24 rounded-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex-grow flex flex-col justify-center items-center text-center">
                <h1 className="text-lg font-bold text-gray-800 mb-2">{title}</h1>
                <div className="flex items-center space-x-1 mb-2">
                    {/* Render Stars */}
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < Math.floor(rating) ? "currentColor" : "none"}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            className={`w-5 h-5 ${
                                index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
                            }`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                            />
                        </svg>
                    ))}
                    <span className="text-sm text-gray-600">{rating}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-row space-x-2">
                <button
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    onClick={() => handlePopup("Viewing profile is currently under development.")}
                >
                    See Profile
                </button>
                <button
                    className="px-4 py-2 bg-Primary text-white rounded-lg hover:bg-Primary/90 transition"
                    onClick={() => handlePopup("Booking functionality is currently under development.")}
                >
                    Book Now
                </button>
            </div>

            {/* Pop-up Message */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-bold text-red-500 mb-4 text-center">Notice</h2>
                        <p className="text-gray-700 text-center">{popupMessage}</p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="px-6 py-1 bg-red-500 text-white rounded-md hover:bg-red-700 transition w-full sm:w-auto"
                                onClick={() => setShowPopup(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}