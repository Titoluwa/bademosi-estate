import { Button } from "@/components/ui/button"

export default function BecomeHost() {
  return (
    <section className="relative py-20 bg-[#1E2A49] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Become a Host</h2>
          <p className="text-gray-300 mb-8">Join our community of hosts and start earning from your property</p>
          <Button className="bg-[#FF5A3C] hover:bg-[#ff4524]">Get Started</Button>
        </div>
      </div>
    </section>
  )
}

