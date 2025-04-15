import { useEffect, useRef } from "react";
import CardService from "../components/CardService";

export default function Services() {
    const allImages1 = [
        "https://media.gettyimages.com/id/1275938073/photo/senior-adult-janitor-mops-floor-at-entry-to-offices.jpg?s=612x612&w=0&k=20&c=p4iyUs9Fh_jo_viX2UcpQ9uHCQeKgrcpx6k37Fg1HB0=",
        "https://media.gettyimages.com/id/530815822/photo/hispanic-woman-housekeeping.jpg?s=612x612&w=0&k=20&c=QDbfmECjDjtZvPIJ7n37oEq6MrRzgMbJ1tBBf6Q7u0c=",
        "https://media.gettyimages.com/id/1369817617/photo/professional-housecleaner-at-work.jpg?s=612x612&w=0&k=20&c=_IPLZwsEEkgr9WmSYzyDw8LoJdlsImzybDmiXC5qdMw=",
    ];
    const allImages2 = [
        "https://media.gettyimages.com/id/518333440/photo/office-cleaning-contractors.jpg?s=612x612&w=0&k=20&c=8L42nfzmz10Bge74TGq5ZR9HuW37Z-3izzHYzg-rAS8=",
        "https://media.gettyimages.com/id/1423628232/photo/sanitation-worker-mopping-the-floor-in-the-classroom.jpg?s=612x612&w=0&k=20&c=J4c-tfQIZQI-UFodjZ_32kecZUU-g8kz772hLUGMnlM=",
        "https://media.gettyimages.com/id/1369817796/photo/professional-housecleaner-at-work.jpg?s=612x612&w=0&k=20&c=Y49_yPCdWI9a94DYvn3SGUZGVBN8wErcEFJbcBnk7_U=",
    ];
    const allImages3 = [
        "https://media.gettyimages.com/id/518332888/photo/office-cleaning-contractors.jpg?s=612x612&w=0&k=20&c=ZY3L2AhCPOxN7VL50ELYx2lE41VQ_n2-wnMvPFsTnx4=",
        "https://media.gettyimages.com/id/1207800465/photo/maid-vacuuming-hotel-hallway.jpg?s=612x612&w=0&k=20&c=pEUr9coTgkpyOIhvb9E_Rg4CkJ1tEl-0iM2OrTzEqu0=",
        "https://media.gettyimages.com/id/2190857608/photo/professional-housecleaners-in-a-home.jpg?s=612x612&w=0&k=20&c=mDTR9kkk8w4Xlo0Gzyh0CQxf7hjZ3DpJvreerRmhA8w=",
    ];

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const interval = setInterval(() => {
            if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
                // Reset to the beginning when reaching the end
                scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Scroll by 300px
                scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
            }
        }, 2000);

        return () => clearInterval(interval); // cleanup interval on component unmount
    }, []);

    return (
        <div id="service" className="p-6 md:p-10 lg:p-12 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
                Services
            </h1>

            <div
                ref={scrollContainerRef}
                className="
                    flex md:grid 
                    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-8 w-full 
                    overflow-x-auto md:overflow-visible 
                    snap-x snap-mandatory md:snap-none 
                    scroll-smooth 
                    pb-4
                    transition-transform duration-700 ease-in-out
                "
            >
                <div className="flex-shrink-0 w-80 snap-center md:w-auto">
                    <CardService
                        images={allImages1}
                        title="Premium Cleaning Service"
                        cleanerName="John Doe"
                        rating={8.5}
                        buttonText="Book Now"
                    />
                </div>
                <div className="flex-shrink-0 w-80 snap-center md:w-auto">
                    <CardService
                        images={allImages2}
                        title="Deep Cleaning Service"
                        cleanerName="Jane Smith"
                        rating={9.0}
                        buttonText="Book Now"
                    />
                </div>
                <div className="flex-shrink-0 w-80 snap-center md:w-auto">
                    <CardService
                        images={allImages3}
                        title="Office Cleaning Service"
                        cleanerName="Michael Brown"
                        rating={8.0}
                        buttonText="Book Now"
                    />
                </div>
                <div className="flex-shrink-0 w-80 snap-center md:w-auto">
                    <CardService
                        images={allImages1}
                        title="Apartment Cleaning Service"
                        cleanerName="Emily Davis"
                        rating={8.7}
                        buttonText="Book Now"
                    />
                </div>
                <div className="flex-shrink-0 w-80 snap-center md:w-auto">
                    <CardService
                        images={allImages2}
                        title="Move-In Cleaning Service"
                        cleanerName="Sarah Wilson"
                        rating={9.2}
                        buttonText="Book Now"
                    />
                </div>
                <div className="flex-shrink-0 w-80 snap-center md:w-auto">
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