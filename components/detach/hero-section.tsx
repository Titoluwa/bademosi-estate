import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative bg-gray-100 py-20 bg-cover" style={{
      backgroundImage: `url('/images/heroimage.png')`,
    }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 text-black">Buy, Sell, Rent.</h1>
          <p className="text-xl text-gray-600 mb-8">The best deals, for both Realtors and Customers.</p>
          <Button variant="default" className="bg-[#FF5A3C] hover:bg-[#ff4524]">
            Explore More →
          </Button>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg max-w-4xl">
          <h2 className="text-lg font-semibold mb-4">WHAT DO YOU NEED?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <select className="p-2 border rounded">
              <option>Select Category</option>
            </select>
            <select className="p-2 border rounded">
              <option>Select Location</option>
            </select>
            <Button className="bg-[#FF5A3C] hover:bg-[#ff4524]">
              <Search className="mr-2 h-4 w-4" />
              Search Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

