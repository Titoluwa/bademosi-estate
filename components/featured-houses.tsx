"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaBath, FaBed } from "react-icons/fa6";
import { useRef } from "react";

const properties = [
  {
    image: "/rooms/bed1.jpg",
    title: "Villa Duplex",
    price: "₦450,000",
    beds: 4,
    baths: 2,
    parking: 1,
  },
  {
    image: "/rooms/bed2.jpg",
    title: "ABC House",
    price: "₦380,000",
    beds: 3,
    baths: 2,
    parking: 1,
  },
  {
    image: "/rooms/bed4.jpg",
    title: "Mystic Lodge",
    price: "₦520,000",
    beds: 5,
    baths: 3,
    parking: 2,
  },
  {
    image: "/rooms/bed3.jpg",
    title: "Cozy Cottage",
    price: "₦290,000",
    beds: 2,
    baths: 1,
    parking: 1,
  },
];

export default function FeaturedHouses() {
  const constraintsRef = useRef(null);

  // Animation variants for improved organization
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <section id="apartments" className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4" ref={constraintsRef}>
        {/* Animated Heading - Using only standard easing values */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut"
          }}
          className="flex flex-col justify-center items-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.2,
              duration: 0.6, 
              type: "spring",
              stiffness: 100
            }}
          >
            <h2 className="text-4xl font-bold text-center text-[#1E2A49] relative pb-3">
              Apartments
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6,
                  duration: 0.8, 
                  ease: "easeOut"
                }}
                className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF5722]"
              />
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-gray-600 mt-4 max-w-2xl text-center text-lg"
          >
            Discover our collection of premium living spaces designed for comfort and luxury.
          </motion.p>
        </motion.div>

        {/* Animated Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                staggerChildren: 0.15,
                delayChildren: 0.2
              } 
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {properties.map((property, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
            >
              <Card className="overflow-hidden shadow-lg border border-transparent hover:border-[#FF5A3C]/70 transition-all duration-300 rounded-xl ">
                <div className="relative h-96 overflow-hidden">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={property.image || "/images/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    {/* Hover overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.3, ease: "easeInOut" }
                      }}
                      className="absolute inset-0 bg-gradient-to-t from-[#1E2A49]/80 to-transparent flex items-end"
                    >
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ 
                          y: 0, 
                          opacity: 1,
                          transition: { delay: 0.1, duration: 0.3, ease: "easeOut" }
                        }}
                        className="p-4 w-full"
                      >
                        <p className="text-white font-medium">Premium Location</p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Price tag */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                    className="absolute top-4 right-4 bg-[#FF5A3C] text-white px-3 py-1 rounded-full shadow-lg"
                  >
                    {property.price}
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-5 text-[#1E2A49]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                >
                  <h3 className="font-bold text-xl mb-3">{property.title}</h3>
                  
                  <motion.div 
                    className="flex justify-between items-center mb-4 text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.span 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.1, color: "#FF5A3C" }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBed className="h-4 w-4" />
                      <span>{property.beds} Beds</span>
                    </motion.span>
                    
                    <motion.span 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.1, color: "#FF5A3C" }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBath className="h-4 w-4" />
                      <span>{property.baths} Baths</span>
                    </motion.span>
                    
                    {/* <motion.span 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.1, color: "#FF5A3C" }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaCar className="h-4 w-4" />
                      <span>{property.parking}</span>
                    </motion.span> */}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 15
                    }}
                  >
                    <Button className="w-full mt-2 py-6 text-white font-medium bg-[#FF5A3C] hover:bg-[#ff4524] rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#FF5A3C]/20 transition-all duration-300">
                      View Details
                    </Button>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* "View All" button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <Button 
            variant="outline" 
            className="rounded-full bg-[#1E2A49] text-white hover:text-[#1E2A49] hover:bg-transparent hover:font-bold py-6 px-9"
          >
            View All Properties
          </Button>
        </motion.div>
      </div>
    </section>
  );
}