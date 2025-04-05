"use client"

import Image from "next/image"
import { useState } from "react"
import { FaStar } from "react-icons/fa6"
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
    const [slider, setSlider] = useState<Slider | null>(null);
    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            },
        },
        ],
    };

    const testimonials = [
        {
            id: 1,
            quote: "The Most Comfortable Place Ever",
            text: "I found Krad and they are very comfortable, I never have to leave my work or home.",
            author: "Paul Cooper",
            role: "Landlord.",
            avatar: "/images/ihome.svg?height=50&width=50",
            rate: 5
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
            quote: "Exceptional Service",
            text: "Krad has transformed how I view on my rest. The apatment is intuitive and their support team is always available when I need assistance.",
            author: "James Wilson",
            role: "Traveler.",
            avatar: "/images/ihome.svg?height=50&width=50",
            rate: 4
        },
        {

            id: 5,
            quote: "Best customer support!",
            text: "They were there every step of the way to assist me. Really appreciate the effort.",
            author: "Sarah Williams",
            role: "Tourist",
            avatar: "/images/ihome.svg?height=50&width=50",
            rate: 5,
        },
        {
            id: 6,
            quote: "I loved every moment!",
            text: "From the moment I arrived, I felt at home. The ambiance was perfect, and the service was top-notch.",
            author: "Michael Brown",
            role: "Frequent Visitor",
            avatar: "/images/ihome.svg?height=50&width=50",
            rate: 4,
        },
        {
            id: 7,
            quote: "Beautiful Enviroment",
            text: "Krad has transformed how I view my rest. The apatment is intuitive and their support team is always available when I need assistance.",
            author: "Adewale Wilson",
            role: "Tourist.",
            avatar: "/images/ihome.svg?height=50&width=50",
            rate: 4
          },
    ]

  return (
    <div className="flex flex-col">
        <section id="reviews" className="w-full bg-[#1E2A49] py-16 pb-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex md:justify-between justify-center items-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Guests Say</h2>
                    <div className="hidden md:block">
                        <span className="text-9xl text-slate-600 leading-none">&rdquo;</span>
                    </div>
                </div>

                {/* Testimonial Slider */}
                <div className="relative mx-6">
                    <Slider ref={setSlider} {...settings}>
                    {testimonials.map((testimonial) => (
                        <motion.div key={testimonial.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="px-3">
                        <div className="bg-white rounded-lg p-8 shadow-lg flex-1 min-h-80 max-h-80">
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
                        </motion.div>
                    ))}
                    </Slider>
                </div>
            </div>
        </section>
    </div>
  )
}