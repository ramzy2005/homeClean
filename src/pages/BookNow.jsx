import { useState } from "react";
import Navbar from "../Container/Navbar";
import Footer from "../Container/Footer";
import BookNowCard from "../components/BookNowCard";

export default function BookNow() {
    const cardsData = [
        {
            imgUrl: "https://media.gettyimages.com/id/1417833172/photo/professional-cleaner-holding-a-basket-of-cleaning-products.jpg?s=612x612&w=0&k=20&c=bqhz1jDqSxEQB1OAvm9DP_7SWNKR2F8t7Mzfr4Hchm4=",
            title: "Professional Cleaner",
            rating: 4.5,
            description: "Experienced cleaner with 5+ years of service. Book now to enjoy a spotless home or office!",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/1358089804/photo/beautiful-smiling-young-woman-cleaning-and-wiping-window-with-spray-bottle-and-rag-stock-photo.jpg?s=612x612&w=0&k=20&c=1OCBbZeIxBHAsrm6K7FTXgST91xb9TCaHYc74y1bq8s=",
            title: "Residential Cleaning",
            rating: 4.8,
            description: "Specialized in residential cleaning with attention to detail and customer satisfaction.",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/1417833200/photo/happy-professional-cleaners-cleaning-a-bathroom-at-an-apartment.jpg?s=612x612&w=0&k=20&c=98suJNqwaQnlzReilcdcfGDz_G7QNGUmha2Gm-6Yzug=",
            title: "Office Cleaning Expert",
            rating: 4.7,
            description: "Keep your office spotless with our professional cleaning services.",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/1500033268/photo/interracial-hotel-maids-having-fun-conversation-in-laundry.jpg?s=612x612&w=0&k=20&c=1lbjbkp7iahb3EwdlSJ10GCXmB-OkdtE4B0gGQS_lJA=",
            title: "Move-In/Move-Out Cleaning",
            rating: 4.6,
            description: "Make your move stress-free with our thorough cleaning services.",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/1194917923/photo/portrait-of-beautiful-female-cleaner-holding-a-bucket-with-cleaning-supplies-at-an-office.jpg?s=612x612&w=0&k=20&c=Q1s5NXfMplkOUnce-KBcO7eJ2HVZaTgOFL9KzSpn8kI=",
            title: "Deep Cleaning Specialist",
            rating: 4.9,
            description: "We specialize in deep cleaning to ensure every corner is spotless.",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/1141930279/photo/apartment-cleaning.jpg?s=612x612&w=0&k=20&c=cY4DioMzaWcKbOKyP59QzZZuZ9LiWa393b2tjyBFCbY=",
            title: "Eco-Friendly Cleaning",
            rating: 4.4,
            description: "Using eco-friendly products to keep your home clean and safe.",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/157721934/photo/vacuum-cleaner.jpg?s=612x612&w=0&k=20&c=PrZiz2ltYoE7tDoZ-Z_NRCLh8MYbZhRE03qzG7FJBdM=",
            title: "Post-Construction Cleaning",
            rating: 4.7,
            description: "We handle the mess after construction with our expert cleaning services.",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/1608040948/photo/young-woman-cleaning-the-dining-table-surface.jpg?s=612x612&w=0&k=20&c=-2ekjjmEQHqWSWC87V-0TsFKgceHK8ik-0SDWN9cwww=",
            title: "Spring Cleaning",
            rating: 4.3,
            description: "Refresh your home with our comprehensive spring cleaning services.",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/1194917917/photo/beautiful-cleaning-woman-with-her-team-at-an-office-holding-a-bucket-with-cleaning-products.jpg?s=612x612&w=0&k=20&c=KNJ-N7MZwckh-5OROps-B21q6vme0u6dSm8Akplo040=",
            title: "Window Cleaning",
            rating: 4.8,
            description: "Crystal-clear windows with our streak-free cleaning services.",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/1417833124/photo/professional-cleaner-cleaning-a-table-at-a-house.jpg?s=612x612&w=0&k=20&c=WNc3TvhLIETMdAZTa4dALGvkZGXWaDHG9CihXID31F4=",
            title: "Kitchen Cleaning",
            rating: 4.5,
            description: "We ensure your kitchen is spotless and hygienic.",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/1743036636/photo/teenage-girl-cleaning-balcony-door.jpg?s=612x612&w=0&k=20&c=g-yRH8GI7OHQH8dYXxupbqpy-OZUHftynvXz28eedQ8=",
            title: "Bathroom Cleaning",
            rating: 4.7,
            description: "Deep cleaning for a sparkling and sanitized bathroom.",
        },
        {
            imgUrl: "https://media.gettyimages.com/id/162353089/photo/window-cleaning.jpg?s=612x612&w=0&k=20&c=HUXLEt9RI6Jr3ZxVU54K-k6rvcCIZZrPww7pUi2ow9g=",
            title: "Customized Cleaning",
            rating: 4.9,
            description: "Tailored cleaning services to meet your specific needs.",
        },
    ];

    const [searchTerm, setSearchTerm] = useState(""); // State for search input
    const filteredCards = cardsData.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); // Filter cards based on search term

    return (
        <div>
            <Navbar />
            {/* Search Bar Section */}
            <div className="p-6 sm:p-4 bg-gray-100">
                <div className="max-w-3xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search for cleaning services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                        className="w-full p-4 sm:p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-Primary focus:border-transparent"
                    />
                </div>
            </div>
            {/* Cards Section */}
            <div className="py-6 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCards.length > 0 ? (
                    filteredCards.map((card, index) => (
                        <div key={index} className="flex justify-center">
                            <BookNowCard
                                imgUrl={card.imgUrl}
                                title={card.title}
                                rating={card.rating}
                                description={card.description}
                                className="border border-gray-300 rounded-lg p-4"
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">
                        No results found.
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
