import About from "@/components/about"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Heart, Award, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Professional Care",
      description: "Highest standards of physiotherapy care with evidence-based treatments",
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Personalized treatment plans tailored to individual patient needs",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional results and patient satisfaction",
    },
    {
      icon: Users,
      title: "Home Service",
      description: "Convenient home visits for patients who need care in their comfort zone",
    },
  ]

  return (
    <main className="pt-20">
      <About />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us to provide the best physiotherapy care</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
