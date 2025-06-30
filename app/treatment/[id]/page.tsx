import { servicesData, detailedTreatments } from "@/data/services"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Target, Shield, Dumbbell, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BookAppointmentButton from "@/components/book-appointment-button"
import { notFound } from "next/navigation"

interface TreatmentPageProps {
  params: {
    id: string
  }
}

export default function TreatmentPage({ params }: TreatmentPageProps) {
  // Find the treatment across all services
  let treatment = null
  let serviceName = ""

  for (const service of servicesData) {
    const foundTreatment = service.treatments.find((t) => t.id === params.id)
    if (foundTreatment) {
      treatment = foundTreatment
      serviceName = service.name
      break
    }
  }

  if (!treatment) {
    notFound()
  }

  // Get detailed treatment data or use default
  const detailedTreatment = detailedTreatments[params.id] || {
    name: treatment.name,
    shortDescription: treatment.shortDescription,
    causes: [
      "Various underlying conditions",
      "Lifestyle factors",
      "Age-related changes",
      "Previous injuries",
      "Genetic predisposition",
    ],
    stages: [
      "Initial assessment and diagnosis",
      "Treatment planning",
      "Active treatment phase",
      "Recovery and rehabilitation",
    ],
    treatmentProcess: [
      "Comprehensive evaluation",
      "Personalized treatment plan",
      "Advanced therapy techniques",
      "Progress monitoring",
      "Follow-up care",
    ],
    exercises: [
      {
        name: "Therapeutic Exercise 1",
        instruction: "Perform gentle movements as directed by your therapist. Follow proper form and technique.",
        image: "/images/exercises/cat-cow-stretch.jpg", //exercise image for Slipped Disc (Herniated Disc)
      },
      {
        name: "Therapeutic Exercise 2",
        instruction: "Continue with prescribed exercises to maintain progress and prevent recurrence.",
        image: "https://media.yogauonline.com/app/uploads/2021/04/06051143/0_how_to_inhabit_your_body_mindfully_while_practicing_yoga_in_childs_pose_balasana-1.webp", //exercise image for Slipped Disc (Herniated Disc)
      },
    ],
    diet: [
      {
        item: "Anti-inflammatory foods",
        foods: ["Turmeric", "Ginger", "Berries", "Leafy greens"],
        image: "https://koala.sh/api/image/v2-pq6j6-ah0yv.jpg?width=1216&height=832&dream", //diet image for Slipped Disc (Herinated Disc)
      },
      {
        item: "Healing nutrients",
        foods: ["Protein-rich foods", "Vitamins", "Minerals", "Healthy fats"],
        image: "https://www.thrivenaija.com/wp-content/uploads/2020/01/healthy-food-high-in-protein.jpg",
      },
    ],
    precautions: [
      "Follow treatment guidelines carefully",
      "Report any unusual symptoms",
      "Maintain regular follow-up appointments",
      "Avoid activities that may worsen condition",
      "Take prescribed medications as directed",
    ],
  }

  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <Link href="/treatments">
            <Button variant="outline" className="mb-4 hover:scale-105 transition-transform">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Treatments
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="secondary" className="mb-2 animate-pulse">
                {serviceName}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">{detailedTreatment.name}</h1>
              <p className="text-xl text-gray-600 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                {detailedTreatment.shortDescription}
              </p>
            </div>
            <div className="mt-4 md:mt-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <BookAppointmentButton />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Equipment Section - Only for laser treatments */}
            {detailedTreatment.equipmentImage && (
              <Card className="animate-slide-up hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Zap className="h-6 w-6 mr-2 animate-pulse" />
                    Advanced Equipment & Technology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={detailedTreatment.equipmentImage || "/placeholder.svg"}
                        alt={`${detailedTreatment.name} Equipment`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 rounded-lg shadow-md"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">State-of-the-Art Technology</h3>
                      <p className="text-gray-700 leading-relaxed">{detailedTreatment.equipmentDescription}</p>
                      <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                        <p className="text-sm text-primary font-medium">✓ FDA Approved Technology</p>
                        <p className="text-sm text-primary font-medium">✓ Non-invasive Treatment</p>
                        <p className="text-sm text-primary font-medium">✓ Proven Clinical Results</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Causes */}
            <Card className="animate-slide-up hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Target className="h-6 w-6 mr-2 animate-pulse" />
                  Causes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  {detailedTreatment.causes.map((cause: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start animate-fade-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{cause}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Stages */}
            <Card
              className="animate-slide-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Clock className="h-6 w-6 mr-2 animate-pulse" />
                  Stages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {detailedTreatment.stages.map((stage: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center animate-fade-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-gray-700">{stage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Treatment Process */}
            <Card
              className="animate-slide-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Shield className="h-6 w-6 mr-2 animate-pulse" />
                  Treatment Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {detailedTreatment.treatmentProcess.map((process: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start animate-fade-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{process}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exercise & Diet Recommendations */}
            <Card
              className="animate-slide-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Dumbbell className="h-6 w-6 mr-2 animate-pulse" />
                  Exercise & Diet Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Exercises Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Therapeutic Exercises</h3>
                    <div className="grid gap-6">
                      {detailedTreatment.exercises.map((exercise: any, idx: number) => (
                        <div
                          key={idx}
                          className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 animate-scale-in"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-lg mb-2 text-primary">{exercise.name}</h4>
                              <p className="text-gray-700 text-sm leading-relaxed">{exercise.instruction}</p>
                            </div>
                            <div className="flex justify-center">
                              <img
                                src={exercise.image || "/placeholder.svg"}
                                alt={exercise.name}
                                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 max-w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Diet Section - only show if diet exists */}
                  {detailedTreatment.diet && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutritional Support</h3>
                      <div className="grid gap-6">
                        {detailedTreatment.diet.map((dietItem: any, idx: number) => (
                          <div
                            key={idx}
                            className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 animate-scale-in"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-lg mb-2 text-primary">{dietItem.item}</h4>
                                <div className="flex flex-wrap gap-2">
                                  {dietItem.foods.map((food: string, foodIdx: number) => (
                                    <Badge
                                      key={foodIdx}
                                      variant="outline"
                                      className="hover:bg-primary hover:text-white transition-colors"
                                    >
                                      {food}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <img
                                  src={dietItem.image || "/placeholder.svg"}
                                  alt={dietItem.item}
                                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 max-w-full h-auto"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="animate-scale-in sticky top-24" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <BookAppointmentButton className="w-full" />
              </CardContent>
            </Card>

            {/* Precautions */}
            <Card
              className="animate-slide-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: "0.6s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Shield className="h-6 w-6 mr-2" />
                  Precautions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {detailedTreatment.precautions.map((precaution: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start animate-fade-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{precaution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="animate-scale-in bg-primary/5" style={{ animationDelay: "0.7s" }}>
              <CardHeader>
                <CardTitle className="text-primary">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about this treatment? Contact us for personalized advice.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Phone:</strong> +91 9262727272
                  </p>
                  <p>
                    <strong>Home Service:</strong> Available
                  </p>
                  <p>
                    <strong>Hours:</strong> Mon-Sat 9AM-7PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
