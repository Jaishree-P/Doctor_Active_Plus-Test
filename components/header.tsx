"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin, Stethoscope } from "lucide-react"
import { useBooking } from "./booking-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openBooking } = useBooking()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "Doctor", href: "/doctor" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>+91 9262727272</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Home Service Available</span>
              </div>
              <div className="flex items-center">
                <span>www.dranilkumarpt.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Doctor Active Plus
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/doctor-login"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1"
            >
              <Stethoscope className="h-4 w-4" />
              Doctor Login
            </Link>
            <Button onClick={openBooking} className="gradient-bg">
              Book Appointment
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-primary">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/doctor-login"
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Stethoscope className="h-4 w-4" />
                Doctor Login
              </Link>

              <Button onClick={openBooking} className="w-full mt-4 gradient-bg">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
