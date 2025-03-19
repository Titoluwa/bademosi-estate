import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, } from "@/components/ui/card"
import { FaStar } from "react-icons/fa6"

const testimonials = [
  {
    text: "The ideal Realtor website ever! The whole team has been so great to work with, and we're really happy with the results.",
    author: "Tom Green",
    role: "Real Estate Agent",
  },
  {
    text: "Reliable, Friendly, Professional. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    author: "Sarah Lee",
    role: "Client",
  },
]

export default function Testimonials() {
  return (
    <>
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/images/placeholder.svg" />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <section className="max-w-7xl mx-auto bg-muted py-12 md:py-24 px-5">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">What Our Guests Say</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <FaStar key={j} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-6 italic">
                    "The apartment was exactly as described. Clean, modern, and in a perfect location. The booking
                    process was smooth and the host was very responsive."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center text-primary font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">Stayed in Downtown Apartment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}