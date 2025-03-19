"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // TODO: Integrate with backend or email service
    };

    return (
        <section id="contact" className="relative w-full overflow-auto rounded-md mx-auto max-w-6xl my-24">
            <div 
                className="flex flex-col md:flex-row h-[500px] bg-cover mx-4" 
                style={{ backgroundImage: `url('/images/host-agent.png')` }}
            >
                {/* Left Side - Contact Info */}
                <div className="w-full md:w-1/2 bg-slate-800/60 flex items-center justify-center">
                    <div className="relative z-10 text-center px-8 py-12">
                        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
                        <p className="text-lg text-white mb-6">
                            Have questions about our apartments? <br />
                            Reach out and we'll be happy to help!
                        </p>
                        <Link href="#" className="inline-block px-4 py-3 bg-[#FF5A3C] text-white font-medium rounded-md hover:bg-orange-600 transition">
                            <FaArrowUpRightFromSquare />
                        </Link>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2 overflow:block bg-white flex items-center justify-center p-6">
                    <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-[#1E2A49] font-medium mb-2">Full Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#FF5A3C]"
                            />
                        </div>

                        <div>
                            <label className="block text-[#1E2A49] font-medium mb-2">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#FF5A3C]"
                            />
                        </div>

                        <div>
                            <label className="block text-[#1E2A49] font-medium mb-2">Phone Number</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#FF5A3C]"
                            />
                        </div>

                        <div>
                            <label className="block text-[#1E2A49] font-medium mb-2">Message</label>
                            <textarea 
                                name="message" 
                                rows={4} 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#FF5A3C]"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-[#FF5A3C] text-white py-3 rounded-md hover:bg-orange-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}