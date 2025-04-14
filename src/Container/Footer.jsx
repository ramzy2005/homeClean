import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className=" text-sm bg-gray-100 py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">
                        <span className="text-Primary">Clean</span>
                        <span className="text-gray-800">Home</span>
                        <span className="text-secondary">.</span>
                    </h1>
                    <p className="text-gray-600" >
                        At HomeClean, we are dedicated to providing top-notch cleaning services that leave your home spotless and refreshed. 
                        Our team of professionals ensures every corner is cleaned with precision and care. 
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
                    <div className="flex flex-col gap-2">
                        <a href="#home" className="text-gray-600 hover:text-primary">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-primary">About</a>
                        <a href="#services" className="text-gray-600 hover:text-primary">Services</a>
                        <a href="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</a>
                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Media</h3>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-Primary hover:text-primary text-2xl">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-Primary hover:text-primary text-2xl">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-Primary hover:text-primary text-2xl">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-Primary hover:text-primary text-2xl">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-400 pt-2 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} HomeClean. All rights reserved.
            </div>
        </footer>
    );
}