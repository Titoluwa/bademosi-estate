import HeroSection from "@/components/hero-section"
import FeaturedHouses from "@/components/featured-houses"
import Stats from "@/components/stats"
import Footer from "@/components/footer"
import FloatingBubblesBackground from "@/components/floating-bubbles"
import Reviews from "@/components/reviews"
import Amenities from "@/components/amenities"
import ContactUs from "@/components/contact-us"

// import { Search } from "lucide-react"
// import { Button } from "@/components/ui/button"

// import HowItWorks from "@/components/how-it-works"
// import PopularCities from "@/components/popular-cities"
// import Testimonials from "@/components/testimonials"
// import Partners from "@/components/partners"

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="bg-[#1E2A49] text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            BA<span className="text-[#FF5A3C]">demosi</span>
          </h1>
          <div className="hidden md:flex space-x-7">
            <a href="#home" className="hover:text-[#FF5A3C]">
              Home
            </a>
            <a href="#rooms" className="hover:text-[#FF5A3C]">
              Rooms
            </a>
            <a href="#amenities" className="hover:text-[#FF5A3C]">
              Amenities 
            </a>
            <a href="#reviews" className="hover:text-[#FF5A3C]">
              Reviews
            </a>
            <a href="#contact" className="hover:text-[#FF5A3C]">
              Contact Us
            </a>
          </div>
          <div>
          {/* <Button variant="ghost" className="text-white hover:text-[#FF5A3C]">
              <Search/>
          </Button> */}
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <FloatingBubblesBackground />
        <FeaturedHouses />
        <Amenities />
        <Reviews />
        <Stats />
        <ContactUs />
        

        {/* <Partners /> */}
        {/* <PopularCities /> */}
        {/* <Testimonials /> */}
        {/* <HowItWorks /> */}
      </main>

      <Footer />
    </div>
  )
}

