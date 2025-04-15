import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="mx-auto py-4 px-4 md:px-8 sticky top-0 bg-white z-50">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold md:text-3xl">
                        <span className="text-Primary">Clean</span>
                        <span className="text-gray-800">Home</span>.
                    </h1>

                    {/* Hamburger Menu for Mobile */}
                    <button
                        className="lg:hidden text-gray-800 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 transform transition-transform duration-300 ${
                                isOpen ? "rotate-90" : "rotate-0"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex lg:space-x-5 lg:items-center">
                        <Link
                            to="/"
                            className="py-2 px-4 text-gray-700 hover:text-Primary"
                        >
                            Commercial & Residential Cleaning
                        </Link>
                        <Link
                            to="/profile-creation"
                            className="py-2 px-4  text-gray-700 hover:text-Primary"
                        >
                            Profile Creation
                        </Link>
                        
                        <button className="border-2 border-Primary rounded-xl text-Primary px-4 py-2 hover:bg-Primary hover:text-white transition duration-300">
                            We're Cleaners!
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 bg-white/50 backdrop-blur-md shadow-md rounded-lg">
                        <Link
                            to="/"
                            className="block py-2 px-4 text-gray-700 hover:text-Primary border-b border-gray-200"
                        >
                            Commercial & Residential Cleaning
                        </Link>
                        <Link
                            to="/profile-creation"
                            className="block py-2 px-4 text-gray-700 hover:text-Primary border-b border-gray-200"
                        >
                            Profile Creation
                        </Link>
                        
                        <button className="block w-full border-2 border-Primary rounded-xl text-Primary px-4 py-2 mt-2 hover:bg-Primary hover:text-white transition duration-300">
                            We're Cleaners!
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
}