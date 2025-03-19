"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaStar } from "react-icons/fa6"

export default function Reviews() {
  const [activeSlide, setActiveSlide] = useState(0)

  const testimonials = [
    {
        id: 1,
        quote: "The Most Comfortable Place Ever",
        text: "For a long time, I have been trying to find a place I could de-stress for my new condo at Atlanta. I found Bademosi and they are very comfortable, I never have to leave my work or home.",
        author: "Paul Cooper",
        role: "Landlord.",
        avatar: "/images/ihome.svg?height=50&width=50",
        rate: 5
    },
    {
        id: 2,
        quote: "Reliable, Friendly, Professionals.",
        text: "I recently moved into town, and tried getting a new apartment. I have met with a couple of 'Agents' and they couldn't provide what I needed, then I came across MiCasa one day, and got a new apartment in less than a week.",
        author: "Shelly Ann",
        role: "Tenant.",
        avatar: "/images/ihome.svg?height=50&width=50",
        rate: 5
    },
    {
        id: 3,
        quote: "Exceptional Service",
        text: "Bademosi has transformed how I view my rest. The apatment is intuitive and their support team is always available when I need assistance.",
        author: "James Wilson",
        role: "Traveler.",
        avatar: "/images/ihome.svg?height=50&width=50",
        rate: 4
    },
    // {
    //     id: 4,
    //     quote: "Beautiful Enviroment",
    //     text: "Bademosi has transformed how I view my rest. The apatment is intuitive and their support team is always available when I need assistance.",
    //     author: "Adewale Wilson",
    //     role: "Tourist.",
    //     avatar: "/images/ihome.svg?height=50&width=50",
    //     rate: 4
    //   },
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

                <div className="relative mx-4">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {testimonials.slice(activeSlide, activeSlide + 2).map((testimonial, index) => (
                        <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-lg flex-1">
                            <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rate)].map((_, j) => (
                                <FaStar key={j} className="h-5 w-5 fill-primary text-[#FF5A3C]" />
                            ))}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{testimonial.quote}</h3>
                            <p className="text-gray-700 mb-6 text-justify italic">&ldquo;{testimonial.text}&rdquo;</p>
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
                    ))}
                    </div>

                    <div className="flex justify-center mt-12 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-2 h-2 rounded-full ${index === activeSlide ? "bg-orange-500" : "bg-gray-300"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}