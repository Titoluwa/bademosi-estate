import { MapPin, Key, Home, MousePointerClick, HandCoins } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <MousePointerClick className="h-8 w-8" />,
      title: "Choose Your Stay",
      description: "Select your dates and check availability",
      // Choose Your Stay – Select your dates and check availability.
    },
    {
      icon: <HandCoins className="h-8 w-8" />,
      title: "Confirm & Pay",
      description: "Secure your booking with easy payment.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Enjoy your Stay",
      description: "Relax in a fully-furnished home",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-5">
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

