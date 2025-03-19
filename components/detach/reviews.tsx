"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Sample Testimonials Data
const testimonials = [
    {
        id: 1,
        rate: 5,
        quote: "Best experience ever!",
        text: "This is the best place I have ever stayed. The service was amazing.",
        avatar: "/images/ihome.svg?height=50&width=50",
        author: "John Doe",
        role: "Businessman",
    },
    {
        id: 2,
        rate: 4,
        quote: "Lovely place!",
        text: "The ambiance was beautiful. Highly recommended!",
        avatar: "/images/ihome.svg?height=50&width=50",
        author: "Jane Smith",
        role: "Tourist",
    },
    {
        id: 3,
        rate: 5,
        quote: "Perfect for vacations",
        text: "I had a great time. The staff was very friendly.",
        avatar: "/images/ihome.svg?height=50&width=50",
        author: "Chris Johnson",
        role: "Traveler",
    },
    {
        id: 4,
        rate: 4,
        quote: "Nice and comfortable",
        text: "Clean rooms and good service. Would visit again!",
        avatar: "/images/ihome.svg?height=50&width=50",
        author: "Emma Brown",
        role: "Freelancer",
    },
];

export default function Reviews() {
    return (
        <div className="relative mx-4">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
                }}
                className="py-10"
            >
                {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="flex justify-center">
                    <div className="bg-white rounded-lg p-8 shadow-lg min-h-80 max-h-80">
                    <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rate)].map((_, j) => (
                        <FaStar key={j} className="h-5 w-5 text-[#FF5A3C]" />
                        ))}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{testimonial.quote}</h3>
                    <p className="text-gray-700 mb-6 text-justify italic">
                        &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center mt-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            width={50}
                            height={50}
                            className="object-cover w-full h-full"
                        />
                        </div>
                        <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
