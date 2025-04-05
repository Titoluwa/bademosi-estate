"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import HeroSection from "@/components/hero-section";
import FeaturedHouses from "@/components/featured-houses";
import Stats from "@/components/stats";
import Footer from "@/components/footer";
import FloatingBubblesBackground from "@/components/floating-bubbles";
import Reviews from "@/components/reviews";
import Amenities from "@/components/amenities";
import ContactUs from "@/components/contact-us";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const logoVariants = { initial: { opacity: 1 }, hover: { transition: { duration: 0.3, yoyo: Infinity, ease: "easeInOut"  }}};

  return (
    <div className="min-h-screen bg-white text-black">

      {/* Animated Navbar */}
      <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-[#1E2A49] text-white px-4 py-4 shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.h1 className="text-4xl" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
            <motion.span className="font-black" variants={logoVariants} whileHover={{ y: -3 }} >
              K
            </motion.span>
            <motion.span className="text-[#FF5A3C] italic font-thin" variants={logoVariants} whileHover={{ y: -3 }}>
              RAD
            </motion.span>
          </motion.h1>

          {/* <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-2xl">
             K<span className="text-[#FF5A3C] italic font-[700]">RAD</span> 
            <span className="font-black">K</span><span className="text-[#FF5A3C] italic font-thin">RAD</span>
          </motion.h1> */}

          {/* Desktop Nav */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="hidden md:flex space-x-7">
            {["Home", "Apartments", "Amenities", "Reviews", "Contact Us"].map((item, index) => (
              <motion.a key={index} href={`#${item.toLowerCase().replace(" ", "")}`} whileHover={{ scale: 1.1, color: "#FF5A3C" }} transition={{ duration: 0.3 }} className="cursor-pointer">
                {item}
              </motion.a>
            ))}
          </motion.div>
          <div>

          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="text-white text-3xl" />
            ) : (
              <FiMenu className="text-white text-3xl" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, ease: "easeOut" }} className="md:hidden bg-[#1E2A49] absolute top-16 left-0 w-full py-6 shadow-lg">
              <div className="flex flex-col space-y-5 text-center">
                {["Home", "Apartments", "Amenities", "Reviews", "Contact Us"].map((item, index) => (
                  <motion.a key={index} href={`#${item.toLowerCase().replace(" ", "")}`} whileHover={{ scale: 1.1, color: "#FF5A3C" }} transition={{ duration: 0.3 }} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        {/* Hero Section with Floating Effect */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <HeroSection />
        </motion.div>

        {/* Floating Background Effect */}
        <FloatingBubblesBackground />

        {/* Staggered Section Animations */}
        <motion.section initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }, }}>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <FeaturedHouses />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Amenities />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Reviews />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Stats />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <ContactUs />
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}