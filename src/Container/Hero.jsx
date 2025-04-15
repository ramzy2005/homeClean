import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import hero from "../images/hero.webp";

export default function Hero() {
    const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSearch = () => {
        navigate("/book-now"); // Navigate to the "Book Now" page
    };

    return (
        <>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:space-x-10 py-10 px-4 md:px-8">
                <div className="">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                        Find Your <span className="text-Primary">Perfect</span> Cleaning Match!
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 mt-2">
                        Connect with trusted Cleaning professionals instantly. Book, chat, and pay securely, all in one place.
                    </p>
                    <div className="relative mt-4 lg:w-2/3">
                        
                        <input
                            type="text"
                            placeholder="Find the Cleaner"
                            value={searchTerm}
                            onClick={handleSearch} // Navigate to the "Book Now" page when clicked
                            onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
                            className="w-full py-3 lg:py-3 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 ring-Primary shadow-md"
                        />
                        <button
                            onClick={handleSearch} // Trigger navigation on click
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-Primary hover:scale-75 p-2 rounded-full transition duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                        <link></link>
                    </div>
                </div>
                <div>
                    <img
                        src={hero}
                        alt="Hero Image"
                        className="w-full h-auto mt-10 lg:mt-0 rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </>
    );
}