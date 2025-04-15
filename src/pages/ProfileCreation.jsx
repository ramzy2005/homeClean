import { useState } from "react";
import Footer from "../Container/Footer";
import Navbar from "../Container/Navbar";
import user from "../images/user.png";

export default function ProfileCreation() {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
        service: "",
    });
    const [passwordStrength, setPasswordStrength] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "password") {
            evaluatePasswordStrength(value);
        }
    };

    const evaluatePasswordStrength = (password) => {
        if (password.length < 6) {
            setPasswordStrength("Weak");
        } else if (password.length < 10) {
            setPasswordStrength("Medium");
        } else {
            setPasswordStrength("Strong");
        }
    };

    const handleSave = () => {
        setMessage("The creation of the account is still under work.");
        setShowPopup(true); // Show the pop-up
    };

    return (
        <div>
            <Navbar />
            {/* Background Section */}
            <div className="absolute top-0 left-0 w-full h-3/4 bg-gray-100 z-0"></div>

            <div className="relative z-10 p-6 md:p-10 lg:p-12">
                {/* Create Account Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 md:text-4xl mb-4">Create Account</h1>
                    <h4 className="text-sm font text-gray-800">Edit your name, avatar, etc.</h4>
                </div>

                {/* Two Column Layout */}
                <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-lg rounded-lg bg-white">
                    {/* Left Column */}
                    <div>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-gray-700 font-bold">Your Name</h2>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="border-2 border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <h2 className="text-gray-700 font-bold">Password</h2>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="border-2 border-gray-300 rounded-lg p-2 w-full"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                {passwordStrength && (
                                    <p
                                        className={`text-sm mt-1 ${
                                            passwordStrength === "Weak"
                                                ? "text-red-500"
                                                : passwordStrength === "Medium"
                                                ? "text-yellow-500"
                                                : "text-green-500"
                                        }`}
                                    >
                                        Password Strength: {passwordStrength}
                                    </p>
                                )}
                            </div>
                            <div>
                                <h2 className="text-gray-700 font-bold">Email Address</h2>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="border-2 border-gray-300 rounded-lg p-2 w-full"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <h2 className="text-gray-700 font-medium">Service we offer</h2>
                                <div className="relative">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full flex justify-between items-center border-2 border-gray-300 rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        {formData.service || "Select a Service"}
                                        <svg
                                            className={`h-5 w-5 transform transition-transform duration-300 ${
                                                isOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    {isOpen && (
                                        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div className="py-1">
                                                {["Residential Cleaning", "Commercial Cleaning", "Move-In/Move-Out Cleaning", "Deep Cleaning", "Post-Construction Cleaning"].map(
                                                    (option) => (
                                                        <a
                                                            key={option}
                                                            href="#"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setFormData({ ...formData, service: option });
                                                                setIsOpen(false);
                                                            }}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            {option}
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Delete Your Account Section */}
                        <div className="mt-8 border-b-2 md:border-b-0  border-gray-400 pb-4">
                            <div className="text-start">
                                <h1 className="text-Primary font-semibold">Delete your account</h1>
                                <p className="text-sm text-gray-600">
                                    You will receive an email to confirm your decision. <br />
                                    Please note that all boards you have created will be permanently erased.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:space-x-2 mt-4 space-y-2 sm:space-y-0">
                                <button
                                    className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition w-full sm:w-auto"
                                    onClick={() => setMessage("")}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-6 py-2 rounded-lg bg-Primary text-white hover:bg-Primary/90 transition w-full sm:w-auto"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center justify-center space-y-6 h-full">
                        <div className="flex flex-col items-center text-center">
                            <img src={user} alt="User Avatar" className="w-32 h-32 rounded-full opacity-80 object-cover mb-4" />
                            <button
                                className="px-20 py-3 bg-Primary rounded-md text-white hover:bg-Primary/90 transition"
                                onClick={() => {
                                    setMessage("The creation of the account is still under work.");
                                    setShowPopup(true); // Show the pop-up
                                }}
                            >
                                Upload a Picture
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pop-up Message */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-bold text-red-500 mb-4 text-center">Notice</h2>
                        <p className="text-gray-700 text-center">{message}</p>
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

            <Footer />
        </div>
    );
}