import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Car } from "lucide-react"

const properties = [
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Villa Duplex",
    price: "$450,000",
    beds: 4,
    baths: 2,
    parking: 1,
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "ABC House",
    price: "$380,000",
    beds: 3,
    baths: 2,
    parking: 1,
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Mystic Lodge",
    price: "$520,000",
    beds: 5,
    baths: 3,
    parking: 2,
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Cozy Cottage",
    price: "$290,000",
    beds: 2,
    baths: 1,
    parking: 1,
  },
]

export default function FeaturedHouses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Houses</h2>
          <div className="flex gap-2">
            <Button variant="outline">All</Button>
            <Button variant="outline">For Sale</Button>
            <Button variant="outline">For Rent</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                <p className="text-[#FF5A3C] font-bold mb-4">{property.price}</p>
                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    {property.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    {property.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Car className="h-4 w-4" />
                    {property.parking}
                  </span>
                </div>
                <Button className="w-full mt-4 bg-[#FF5A3C] hover:bg-[#ff4524]">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

