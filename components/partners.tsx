export default function Partners() {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Partners</h2>
          <div className="relative w-[300px] h-[300px] mx-auto">
            {/* This would be better implemented with a proper SVG or canvas for the circular diagram */}
            <div className="absolute inset-0 rounded-full -4 border-[#1E2A49]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full bg-[#FF5A3C]" />
            </div>
          </div>
  
          <div className="mt-16 grid grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FF5A3C]">40+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF5A3C]">540+</div>
              <div className="text-gray-600">Properties</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF5A3C]">300</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF5A3C]">25+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </div>
        </div>
      </section>
    )
} 