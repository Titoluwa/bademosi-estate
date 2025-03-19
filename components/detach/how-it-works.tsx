import { MapPin, Key, Home } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Find Location",
      description: "Choose from our wide range of prime locations",
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "Book a Property",
      description: "Select and book your perfect property",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Enjoy your Stay",
      description: "Move in and enjoy your new home",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF5A3C] text-white mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

