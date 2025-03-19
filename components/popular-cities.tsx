import Image from "next/image"

const cities = [
  {
    name: "Lagos",
    image: "/images/lagos2.png",
  },
  {
    name: "Paris",
    image: "/images/paris1.png",
  },
  {
    name: "London",
    image: "/images/england.png",
  },
  {
    name: "Dubai",
    image: "/images/dubai.png",
  },
]

export default function PopularCities() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Popular Cities</h2>
          <button className="text-[#FF5A3C]">Explore More</button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 place-items-center">
          {cities.map((city, index) => (
            <div key={index} className="relative h-[800px] group overflow-hidden">
              <Image
                src={city.image || "/images/placeholder.svg"}
                alt={city.name}
                height={600}
                width={450}
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{city.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}