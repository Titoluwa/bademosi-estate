"use client"
import { FaRegBookmark } from "react-icons/fa";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div id="home" className="relative bg-gray-100 py-20 absolute inset-0 bg-cover bg-center animate-fade-in" 
      style={{ backgroundImage: `url('/images/heroimage.png')` }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div  className="max-w-3xl pt-56 py-9" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <motion.h1 className="text-5xl font-bold mb-4 text-[#1E2A49]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
            Stay, Relax,&nbsp;
            <motion.span className="text-[#FF5A3C]"  initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  transition={{ delay: 0.5, duration: 0.5 }}>
              Enjoy!
            </motion.span>
          </motion.h1>

          <motion.p className="text-xl text-gray-600 mb-8 mt-5"initial={{ opacity: 0 }}animate={{ opacity: 1 }}transition={{ delay: 0.5, duration: 0.5 }}>
            Find the perfect shortlet for your next stay—seamless booking, unbeatable comfort.
          </motion.p>

          <motion.div className="mt-14" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.3 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#rooms">
            <Button variant="default" className="bg-[#FF5A3C] text-white font-[400] hover:text-[#1E2A49] hover:bg-transparent hover:border-[#FF5A3C] border border-[#1E2A49]">
              Book Now <FaRegBookmark />
            </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
// Your perfect short-term rental experience starts here. 
{/* <motion.div className="max-w-7xl mx-auto px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
  <div className="max-w-3xl pt-56 animate-slide-up">
    <h1 className="text-5xl font-bold mb-4 animate-fade-in">
      Stay, Relax, <span className="text-[#FF5A3C]">Enjoy!</span>
    </h1>
    <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-200">
      Find the perfect shortlet for your next stay—seamless booking, unbeatable comfort.
    </p>
    <Button variant="default" className="mt-12 bg-[#FF5A3C] hover:bg-transparent hover:border-[#FF5A3C] border border-[#1E2A49] animate-bounce-once">
      Book Now <ArrowBigRightDash />
    </Button>
  </div>        
</motion.div> */}
{/* <motion.div  className="max-w-3xl pt-56" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
<motion.h1 className="text-5xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
  Stay, Relax, 
  <motion.span   className="text-[#FF5A3C]"  initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  transition={{ delay: 0.8, duration: 0.5 }}>
     Enjoy!
  </motion.span>
</motion.h1>

<motion.p className="text-xl text-gray-600 mb-8"initial={{ opacity: 0 }}animate={{ opacity: 1 }}transition={{ delay: 0.5, duration: 0.8 }}>
  Find the perfect shortlet for your next stay—seamless booking, unbeatable comfort.
</motion.p>

<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button variant="default" className="bg-[#FF5A3C] hover:bg-transparent hover:border-[#FF5A3C] border border-[#1E2A49]">
    Explore More <ArrowBigRightDash/>
  </Button>
</motion.div>
</motion.div>

<motion.div className="mt-12 p-6 rounded-lg shadow-2xl max-w-4xl pb-12 bg-white"initial={{ opacity: 0, y: 30 }}animate={{ opacity: 1, y: 0 }}transition={{ delay: 0.9, duration: 0.8 }}>
<motion.h2 className="text-lg font-semibold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }}>
  WHAT DO YOU NEED?
</motion.h2>

<div className="grid md:grid-cols-3 gap-4">
  <motion.select className="p-2 border rounded" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: 0.5 }} whileFocus={{ scale: 1.02 }}>
    <option>Select Category</option>
    <option value="Lagos">Lagos</option>
    <option value="Osun">Osun</option>
    <option value="Abuja">Abuja</option>
  </motion.select>
  
  <motion.select className="p-2 border rounded"initial={{ opacity: 0, x: 0 }}animate={{ opacity: 1, x: 0 }}transition={{ delay: 1.5, duration: 0.5 }}whileFocus={{ scale: 1.02 }}>
    <option>Select Location</option>
    <option value="Lagos">Lagos</option>
    <option value="Osun">Osun</option>
    <option value="Abuja">Abuja</option>
  </motion.select>
  
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.7, duration: 0.5 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button className="bg-[#FF5A3C] hover:bg-[#ff4524]">
      <Search className="mr-2 h-4 w-4" />
      Search Now
    </Button>
  </motion.div>
</div>
</motion.div> */}