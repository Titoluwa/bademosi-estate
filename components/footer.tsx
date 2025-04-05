import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 }}};
  
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 }}};
  
  const linkVariants = { initial: { color: "#9CA3AF" }, hover: { color: "#FF5A3C", x: 5, transition: { duration: 0.2 }}};
  
  const socialIconVariants = { initial: { scale: 1 }, hover: { scale: 1.2, color: "#FF5A3C", transition: { type: "spring", stiffness: 300 }}};

  const logoVariants = { initial: { opacity: 1 }, hover: { transition: {duration: 0.3,yoyo: Infinity, ease: "easeInOut" }}};
  
  return (
    <motion.footer className="bg-[#1E2A49] text-white py-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div className="grid md:grid-cols-5 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="col-span-2" variants={itemVariants}>
            <motion.h3 className="text-3xl mb-4" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <motion.span className="font-black" variants={logoVariants} whileHover={{ y: -3 }} >
                K
              </motion.span>
              <motion.span className="text-[#FF5A3C] italic font-thin" variants={logoVariants} whileHover={{ y: -3 }}>
                RAD
              </motion.span>
            </motion.h3>
            <motion.div className="flex flex-col space-y-2 text-white" variants={itemVariants}>
              <motion.p variants={itemVariants}>Apartments and Suites</motion.p>
              <motion.p variants={itemVariants}>Onflow Street, Off Industrial Estate</motion.p>
              <motion.p variants={itemVariants}>Idi-Iroko Road, Ota.</motion.p>
              <motion.p variants={itemVariants}>Contact: +234 811 577 9999</motion.p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4 className="font-semibold mb-4" variants={itemVariants}>
              Company
            </motion.h4>
            <motion.ul className="space-y-4 text-gray-400" variants={containerVariants} initial="hidden" whileInView="visible">
              {["About Us", "Blog", "Careers", "Testimonials", "Pricing", "Contact Us"].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <motion.a  href={`#${item.toLowerCase().replace(" ", "")}`} variants={linkVariants} initial="initial" whileHover="hover">
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4 className="font-semibold mb-4" variants={itemVariants}>
              Support
            </motion.h4>
            <motion.ul className="space-y-4 text-gray-400" variants={containerVariants} initial="hidden" whileInView="visible">
              {["Help Center", "Terms of Service", "Legal", "Privacy Policy"].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <motion.a  href={`#${item.toLowerCase().replace(" ", "")}`} variants={linkVariants} initial="initial" whileHover="hover">
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4 className="font-semibold mb-4" variants={itemVariants} >
              Stay up to date
            </motion.h4>
            <motion.div className="flex space-x-5 mb-4"variants={containerVariants}initial="hidden"whileInView="visible">
              {[
                { Icon: FaFacebookF, ariaLabel: "Facebook" },
                { Icon: FaXTwitter, ariaLabel: "X Twitter" },
                { Icon: FaInstagram, ariaLabel: "Instagram" }
              ].map(({ Icon, ariaLabel }) => (
                <motion.a key={ariaLabel}href="#"aria-label={ariaLabel}variants={itemVariants}>
                  <motion.div variants={socialIconVariants} initial="initial" whileHover="hover" whileTap={{ scale: 0.9 }}>
                    <Icon className="h-5 w-5" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}