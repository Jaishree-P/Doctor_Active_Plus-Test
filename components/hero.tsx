"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Home, Star, Users, Award, Play, Sparkles } from "lucide-react"
import { useBooking } from "./booking-context"
import { useState, useEffect } from "react"

export default function Hero() {
  const { openBooking } = useBooking()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // FIXED: Random dot generation moved to useEffect
  const [dots, setDots] = useState<
    { left: string; top: string; animationDelay: string; animationDuration: string }[]
  >([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const generateDots = () =>
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }))
    setDots(generateDots())
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-emerald-50 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Animated Particles (hydration-safe) */}
      <div className="absolute inset-0">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={dot}
          />
        ))}
      </div>

      {/* Interactive Cursor Effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            {/* Floating Badge with Pulse Effect */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-emerald-200/30 rounded-full text-primary font-medium mb-8 animate-bounce-in backdrop-blur-sm border border-primary/20">
              <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
              <Star className="h-4 w-4 mr-2 animate-spin-slow" />
              <span className="text-shimmer">Trusted by 20000+ Patients</span>
              <Sparkles className="h-4 w-4 ml-2 animate-pulse" />
            </div>

            {/* Main Heading with Typewriter Effect */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight animate-slide-up">
              Advanc{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-primary animate-gradient-x">
                  Spine |
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-lg blur opacity-30 animate-pulse"></div>
              </span>{" "}
              Joint & Laser Center
            </h1>

            {/* Animated Description */}
            <p
              className="text-xl text-gray-600 mt-8 leading-relaxed animate-fade-in max-w-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Revolutionary pain management with cutting-edge laser therapy and physiotherapy techniques. We bring
              advanced healing technology to your doorstep with our comprehensive home service treatments.
            </p>

            {/* Interactive Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <Button
                onClick={openBooking}
                size="lg"
                className="gradient-bg group hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-primary/25 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>

              
            </div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              {[
                { icon: Shield, title: "Expert Care", subtitle: "Advanced Technology", delay: "0.7s" },
                { icon: Clock, title: "Quick Recovery", subtitle: "Fast Results", delay: "0.9s" },
                { icon: Home, title: "Home Service", subtitle: "At Your Doorstep", delay: "1.1s" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-bounce-in group cursor-pointer"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-125 transition-all duration-500 group-hover:rotate-12 shadow-lg hover:shadow-xl">
                    <item.icon className="h-10 w-10 text-primary animate-pulse group-hover:animate-bounce" />
                  </div>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="animate-slide-left">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:scale-105">
                <img
                  src="https://th.bing.com/th/id/OIP.N6J060fd8mtSS1gLSRltTgHaG9?rs=1&pid=ImgDetMain" //Home page image
                  alt="Advance Spine | Joint & Laser Center"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  
                </div>
              </div>

              <div
                className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl animate-scale-in hover:scale-110 transition-all duration-500 border border-white/20"
                style={{ animationDelay: "1.3s" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-emerald-200 rounded-2xl flex items-center justify-center">
                    <Users className="h-7 w-7 text-primary animate-heartbeat" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900 animate-counter" data-target="500">
                      20000+
                    </p>
                    <p className="text-sm text-gray-600">Successfully Treated</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-8 -right-8 bg-gradient-to-br from-primary to-emerald-500 p-6 rounded-2xl shadow-2xl animate-rotate-in hover:rotate-12 transition-all duration-500 text-white"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 animate-spin-slow" />
                  <div>
                    <span className="font-bold text-lg">20+ Years</span>
                    <p className="text-xs opacity-90">Experience</p>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/10 to-emerald-200/20 rounded-3xl transform rotate-3 animate-pulse"></div>
              <div
                className="absolute -z-20 -top-8 -left-8 w-full h-full bg-gradient-to-br from-emerald-200/10 to-primary/10 rounded-3xl transform -rotate-3 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Scroll Down</p>
        </div>
      </div>
    </section>
  )
}
