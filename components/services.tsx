"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import { servicesData } from "@/data/services"
import Link from "next/link"
import { useState } from "react"

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-emerald-200/30 rounded-full text-primary font-medium mb-6 animate-bounce-in backdrop-blur-sm">
            <Sparkles className="h-5 w-5 mr-2 animate-spin-slow" />
            Our Specialized Treatments
            <Zap className="h-5 w-5 ml-2 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-primary animate-gradient-x">
              Advanced
            </span>{" "}
            Treatment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive pain relief and rehabilitation services with cutting-edge laser therapy and modern treatment
            techniques for optimal recovery.
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="grid gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={service.id}
              className="service-card animate-slide-up hover:shadow-4xl transition-all duration-700 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating Particles */}
              {hoveredCard === service.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              )}

              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl text-primary flex items-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-emerald-200 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-all duration-500">
                    <service.icon className="h-8 w-8 text-primary animate-pulse group-hover:animate-bounce" />
                  </div>
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-emerald-500 transition-all duration-300">
                    {service.name}
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="relative z-10">
                <Link href={`/treatments/${service.id}`}>
                  <Card className="border-l-4 border-l-primary hover:border-l-8 transition-all duration-500 cursor-pointer group/treatment hover:shadow-xl bg-gradient-to-r from-white to-gray-50/30 animate-slide-up relative overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/treatment:translate-x-[200%] transition-transform duration-1000"></div>

                    <CardHeader className="pb-3 relative z-10">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl group-hover/treatment:text-primary transition-colors duration-300 flex items-center">
                          <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse group-hover/treatment:animate-bounce"></div>
                          View All {service.name} Options
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover/treatment:bg-primary group-hover/treatment:scale-110 transition-all duration-300">
                            <ArrowRight className="h-4 w-4 text-primary group-hover/treatment:text-white group-hover/treatment:translate-x-1 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 group-hover/treatment:text-gray-700 transition-colors leading-relaxed">
                        Explore our comprehensive {service.name.toLowerCase()} options and find the perfect treatment
                        for your needs.
                      </p>
                    </CardHeader>
                  </Card>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in">
          <Link href="/treatments">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 rounded-full text-white font-semibold hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-primary/25">
              <Sparkles className="h-5 w-5 mr-2 animate-spin" />
              Explore All Treatments
              <ArrowRight className="h-5 w-5 ml-2 animate-pulse" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
