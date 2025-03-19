export default function Stats() {
    return (
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#FF5A3C]">40+</div>
              <div className="text-gray-600">Apartments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF5A3C]">4.9/5</div>
              <div className="text-gray-600">Guest Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF5A3C]">500+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF5A3C]">20+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </div>
        </div>
      </section>
    )
}
  