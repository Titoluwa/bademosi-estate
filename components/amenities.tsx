"use client";

import { motion } from "framer-motion";

export default function Amenities() {
    const amenities = [
        {
            icon: "🏡",
            title: "Fully Equipped",
            description: "Relax in a fully-furnished home with all essentials.",
        },
        {
            icon: "🛜",
            title: "Fast Wi-Fi",
            description: "Stay connected with high-speed internet, perfect for work & entertainment.",
        },
        {
            icon: "🔒",
            title: "24/7 Security",
            description: "Enjoy peace of mind with round-the-clock security & concierge service.",
        },
    ];

    return (
        <section id="amenities" className="pb-24 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl font-bold text-gray-800 mb-12"
                >
                    Amenities
                </motion.h2>

                {/* Cards Grid */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                >
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-white rounded-xl shadow-lg p-6 text-center"
                        >
                            <div className="text-5xl mb-4">{amenity.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{amenity.title}</h3>
                            <p className="text-gray-600">{amenity.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}