import { servicesData } from "@/data/services"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const service = servicesData.find((s) => s.id === params.category)

  if (!service) {
    notFound()
  }

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <Link href="/treatments">
            <Button variant="outline" className="mb-4 hover:scale-105 transition-transform">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Treatments
            </Button>
          </Link>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-emerald-200 rounded-3xl flex items-center justify-center animate-bounce-in">
                <service.icon className="h-10 w-10 text-primary animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-slide-up">{service.name}</h1>
            <p className="text-xl text-gray-600 animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
              {service.description}
            </p>
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.treatments.map((treatment, index) => (
            <Link key={treatment.id} href={`/treatment/${treatment.id}`}>
              <Card
                className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group bg-gradient-to-br from-white to-gray-50/50 border-2 border-transparent hover:border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 flex items-center justify-between">
                    <span>{treatment.name}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {treatment.shortDescription}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
