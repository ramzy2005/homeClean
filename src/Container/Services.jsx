import CardService from "../components/CardService";
import cleaningImage from "../images/service1.jpg";
import housekeepingImage from "../images/service2.jpg";
import maidImage1 from "../images/service4.jpg";
import maidImage2 from "../images/service5.jpg";
import maidImage3 from "../images/service6.jpg";
import maidImage4 from "../images/service7.jpg";
import maidImage5 from "../images/service8.jpg";

export default function Services() {
    const allImages1 = [cleaningImage, housekeepingImage, maidImage1];
    const allImages2 = [maidImage2, maidImage3, maidImage4];
    const allImages3 = [maidImage5, cleaningImage, housekeepingImage];

    return (
        <div id="service" className="p-6 md:p-10 lg:p-12 flex flex-col items-center">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
                Services
            </h1>
            {/* Services Row */}
            <div
                className="flex overflow-x-scroll snap-x snap-mandatory gap-8 w-full"
                style={{
                    scrollBehavior: "smooth", 
                }}
            >
                <div className="snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                    <CardService
                        images={allImages1}
                        title="Premium Cleaning Service"
                        cleanerName="John Doe"
                        rating={8.5}
                        buttonText="Book Now"
                    />
                </div>
                <div className="snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                    <CardService
                        images={allImages2}
                        title="Deep Cleaning Service"
                        cleanerName="Jane Smith"
                        rating={9.0}
                        buttonText="Book Now"
                    />
                </div>
                <div className="snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                    <CardService
                        images={allImages3}
                        title="Office Cleaning Service"
                        cleanerName="Michael Brown"
                        rating={8.0}
                        buttonText="Book Now"
                    />
                </div>
                <div className="snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                    <CardService
                        images={allImages1}
                        title="Apartment Cleaning Service"
                        cleanerName="Emily Davis"
                        rating={8.7}
                        buttonText="Book Now"
                    />
                </div>
                <div className="snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                    <CardService
                        images={allImages2}
                        title="Move-In Cleaning Service"
                        cleanerName="Sarah Wilson"
                        rating={9.2}
                        buttonText="Book Now"
                    />
                </div>
                <div className="snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                    <CardService
                        images={allImages3}
                        title="Spring Cleaning Service"
                        cleanerName="Chris Johnson"
                        rating={8.9}
                        buttonText="Book Now"
                    />
                </div>
            </div>
        </div>
    );
}