import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1E2A49] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {/* MI<span className="text-[#FF5A3C]">Casa</span> */}
              K<span className="text-[#FF5A3C]">RAD</span>
            </h3>
            <p className="text-gray-400">Apartment and Suites</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FF5A3C]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A3C]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A3C]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A3C]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FF5A3C]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A3C]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A3C]">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A3C]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay up to date</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-[#FF5A3C]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FF5A3C]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FF5A3C]">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

