import CardFanctionality from "../components/CardFanctionality";

export default function Fanctionality() {
    return (
        <div id="work" className="px-4 md:px-10 ">
            <div className="p-6 md:px-10 lg:px-12 flex flex-col items-center  shadow-2xl rounded-2xl ">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CardFanctionality
                    number="1"
                    title="Step 1"
                    description="Choose the cleaning service you need and schedule it at your convenience."
                    circleColor="#3B82F6" 
                    ringClass="ring-2 ring-offset-2 ring-blue-500" 
                />
                <CardFanctionality
                    number="2"
                    title="Step 2"
                    description="A professional cleaner will arrive at your location on time."
                    circleColor="#FACC15" 
                    ringClass="ring-2 ring-offset-2 ring-yellow-400" 
                />
                <CardFanctionality
                    number="3"
                    title="Step 3"
                    description="Relax and enjoy your spotless home after the service is completed."
                    circleColor="#22C55E" 
                    ringClass="ring-2 ring-offset-2 ring-green-500" 
                />
            </div>
        </div>
        </div>
    );
}