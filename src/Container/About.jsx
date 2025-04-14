import Card from "../components/CardAbout1";
import CardAbout2 from "../components/CardAbout2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShieldAlt, faCreditCard, faCalendarAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.webp";

export default function About() {
    // Define props for the Card components
    const cards = [
        {
            icon: <FontAwesomeIcon icon={faThumbsUp} className="h-10 w-10 text-Primary" />,
            title: "Easy & Convenient",
            paragraph: "Book trusted cleaning services quickly and easily. Enjoy a seamless experience.",
        },
        {
            icon: <FontAwesomeIcon icon={faShieldAlt} className="h-10 w-10 text-Primary" />,
            title: "Trusted Professionals",
            paragraph: "Our team is highly trained and background-checked for your safety and satisfaction.",
        },
        {
            icon: <FontAwesomeIcon icon={faCreditCard} className="h-10 w-10 text-Primary" />,
            title: "Secure Payment",
            paragraph: "Pay securely with advanced encryption for a safe and reliable transaction.",
        },
        {
            icon: <FontAwesomeIcon icon={faCalendarAlt} className="h-10 w-10 text-Primary" />,
            title: "Flexible Scheduling",
            paragraph: "Choose a time that works best for you with our flexible scheduling options.",
        },
    ];

    return (
        <>
            <div id="About" className="mt-5 w-full px-16 flex flex-col items-center justify-between lg:space-x-10 py-10 md:px-8">
                <h1 className="text-3xl md:text-4xl text-Primary font-bold text-center mb-8">
                    Why Choose Cleaning Rabbit
                </h1>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Render multiple Card components */}
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                paragraph={card.paragraph}
                            />
                        ))}
                    </div>
                </div>
                {/* Separate div for CardAbout2 */}
                <div className="mt-10 w-full flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-4 items-center justify-between lg:space-x-10 py-10 md:px-8">
                    <CardAbout2
                        image={about1}
                        title="Home Cleaning"
                        icon={faArrowRight} // Updated icon
                    />
                    <CardAbout2
                        image={about2}
                        title="Commercial Cleaning"
                        icon={faArrowRight} // Updated icon
                    />
                </div>
            </div>
        </>
    );
}