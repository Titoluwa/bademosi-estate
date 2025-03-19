import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1E2A49] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              {/* MI<span className="text-[#FF5A3C]">Casa</span> */}
              BA<span className="text-[#FF5A3C]">demosi</span>
            </h3>
            <div className="flex flex-col space-y-2 text-gray-400 font-">
              <p>Copyrights Bademosi Homes and Properties</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-4 text-gray-400">
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
                 Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A3C]">
                  Pricing
                </a>
              </li><li>
                <a href="#" className="hover:text-[#FF5A3C]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-4 text-gray-400">
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
            <div className="flex space-x-5 mb-4">
              <a href="#" className="hover:text-[#FF5A3C]">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FF5A3C]">
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FF5A3C]">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}