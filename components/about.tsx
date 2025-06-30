"use client"

import { Shield, Home, Heart, Award, Users, Target } from "lucide-react"
import { useState, useEffect } from "react"

export default function About() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { number: "20000+", label: "Patients Treated", icon: Users },
    { number: "20+", label: "Years Experience", icon: Award },
    { number: "95%", label: "Success Rate", icon: Target },
    { number: "24/7", label: "Support Available", icon: Heart },
  ]

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-br from-white via-primary/5 to-emerald-50 overflow-hidden relative"
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-30" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content Section */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-emerald-200/30 rounded-full text-primary font-medium mb-8 animate-bounce-in backdrop-blur-sm border border-primary/20">
              <Shield className="h-5 w-5 mr-2 animate-pulse" />
              <span className="text-shimmer">About Our Excellence</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-slide-up leading-tight">
              Advance Spine | {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-primary animate-gradient-x">
                Joint & Laser Center
              </span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-xl text-gray-600 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
                Doctor Active Plus is a pioneering medical facility that redefines pain
                management and rehabilitation through cutting-edge laser technology, innovative therapeutic approaches,
                and compassionate care.
              </p>
              <p className="text-lg text-gray-600 animate-fade-in leading-relaxed" style={{ animationDelay: "0.4s" }}>
                Our revolutionary approach combines state-of-the-art laser therapy with advanced physiotherapy
                techniques and pain management methods, creating personalized healing journeys that deliver exceptional
                results and restore quality of life for our patients.
              </p>
            </div>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-white/20 animate-scale-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-emerald-200 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-primary animate-pulse group-hover:animate-bounce" />
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900 animate-counter">{stat.number}</p>
                      <p className="text-sm text-gray-600 group-hover:text-primary transition-colors">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Home Service Highlight */}
            <div
              className="bg-gradient-to-r from-primary/10 via-emerald-50 to-primary/10 p-8 rounded-3xl animate-scale-in hover:scale-105 transition-all duration-500 border-2 border-primary/20 relative overflow-hidden group max-w-3xl mx-auto"
              style={{ animationDelay: "1s" }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center">
                  <Home className="h-7 w-7 mr-3 animate-pulse group-hover:animate-bounce" />
                  Revolutionary Home Service
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Experience the future of healthcare with our premium home service. We bring state-of-the-art laser
                  therapy equipment and expert care directly to your doorstep, creating a healing sanctuary in your own
                  space.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div
              className="mt-12 p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-primary/10 animate-fade-in"
              style={{ animationDelay: "1.2s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide world-class pain relief and rehabilitation services using the most advanced laser therapy
                technologies, ensuring every patient receives personalized care that addresses their unique needs and
                accelerates their journey to optimal health and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
