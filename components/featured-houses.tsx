import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaBath, FaBed, FaCar } from "react-icons/fa6"

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
]

export default function FeaturedHouses() {
  return (
    <section id="rooms" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center mb-12">
        <h2 className="text-3xl font-bold text-center text-[#1E2A49] relative">
          Rooms
          <span className="absolute bottom-0 left-1/3 hover:left-1/2 transform -translate-x-1/2 w-4/6 h-[3px] bg-[#FF5722]"></span>
        </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <Card key={index} className="overflow-hidden shadow-none border border-transparent hover:drop-shadow-xl hover:shadow-xl">
              <div className="relative h-96 m-3">
                <Image src={property.image || "/images/placeholder.svg"} alt={property.title} fill className="object-cover h-20 w-10 rounded-lg" />
              </div>
              <div className="p-4 text-center text-[#1E2A49]">
                <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                <p className="text-[#FF5A3C] font-bold mb-4">{property.price}</p>
                <div className="flex justify-around text-[#1E2A49]">
                  <span className="flex items-center gap-1">
                    <FaBed className="h-4 w-4" />
                    {property.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBath className="h-4 w-4" />
                    {property.baths}
                  </span>
                  {/* <span className="flex items-center gap-1">
                    <FaCar className="h-4 w-4" />
                    {property.parking}
                  </span> */}
                </div>
                <Button className="w-full mt-4 text-white font-[500] bg-[#FF5A3C] hover:bg-[#ff4524]">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

