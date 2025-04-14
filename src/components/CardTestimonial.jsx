export default function CardTestimonial({ nm, text, img }) {
    return (
        <div className=" flex flex-col   bg-white p-6 rounded-lg border border-P">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                    src={img}
                    alt={nm}
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{nm}</h3>
            <p className="text-gray-600  mt-2 ">{text}</p>
        </div>
    );
}