import Image from "next/image"

export default function MobileApp() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Manage your projects from your Mobile.</h2>
            <p className="text-gray-600 mb-8">
              Download the app to manage your projects, keep track of your progress and complete tasks without
              procastinating.
            </p>
            <div className="flex gap-4">
              <a href="#" className="inline-block">
                <Image
                  src="/placeholder.svg"
                  alt="Download on App Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/placeholder.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </a>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image src="/placeholder.svg" alt="Mobile app screenshot" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

