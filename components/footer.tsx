import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Doctor Active Plus</h3>
            <p className="text-gray-300 mb-4">
              Professional physiotherapy care with home service available. Your health, our priority. We offer
              physiotherapy naturally.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 9262727272</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@doctoractiveplus.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Home Service Available</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-gray-300 hover:text-primary">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/doctor" className="text-gray-300 hover:text-primary">
                  Doctor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Spine Treatment</span>
              </li>
              <li>
                <span className="text-gray-300">Joint Care</span>
              </li>
              <li>
                <span className="text-gray-300">Sports Injury</span>
              </li>
              <li>
                <span className="text-gray-300">Aesthetic Treatment</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-300 mb-2">Mon-Sat: 9:00 AM - 7:00 PM</p>
            <p className="text-gray-300 mb-4">Sunday: By Appointment</p>
            <p className="text-gray-300">Emergency: Available 24/7</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Doctor Active Plus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
