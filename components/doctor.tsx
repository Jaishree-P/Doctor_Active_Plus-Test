import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Clock, Users } from "lucide-react"

export default function Doctor() {
  return (
    <section id="doctor" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert</h2>
          <p className="text-xl text-gray-600">Experienced physiotherapist dedicated to your recovery</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden animate-slide-up hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src="\images\Doctor-photo\Doctor-image.jpeg"
                    alt="Dr. Active Plus"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 animate-slide-up">Dr. Anil Kumar</h3>
                    <p className="text-primary font-semibold animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      Senior Physiotherapist
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary" className="animate-bounce-in" style={{ animationDelay: "0.3s" }}>
                        Bachelor of Physiotherapy
                      </Badge>
                      <Badge variant="secondary" className="animate-bounce-in" style={{ animationDelay: "0.4s" }}>
                        Master of Physiotherapy
                      </Badge>
                      <Badge variant="secondary" className="animate-bounce-in" style={{ animationDelay: "0.5s" }}>
                        P.G.Diploma in Fitness & Sports
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                    With over 20+ years of experience in physiotherapy, Dr. Anil Kumar specializes in comprehensive
                    rehabilitation services. Expert in treating spine disorders, sports injuries, joint problems, and
                    geriatric care.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center animate-slide-right" style={{ animationDelay: "0.7s" }}>
                      <GraduationCap className="h-5 w-5 text-primary mr-2 animate-pulse" />
                      <span className="text-sm">20+ Years Experience</span>
                    </div>
                    <div className="flex items-center animate-slide-left" style={{ animationDelay: "0.8s" }}>
                      <Award className="h-5 w-5 text-primary mr-2 animate-pulse" />
                      <span className="text-sm">Certified Expert</span>
                    </div>
                    <div className="flex items-center animate-slide-right" style={{ animationDelay: "0.9s" }}>
                      <Users className="h-5 w-5 text-primary mr-2 animate-pulse" />
                      <span className="text-sm">20000+ Patients</span>
                    </div>
                    <div className="flex items-center animate-slide-left" style={{ animationDelay: "1s" }}>
                      <Clock className="h-5 w-5 text-primary mr-2 animate-pulse" />
                      <span className="text-sm">Home Service</span>
                    </div>
                  </div>

                  <div
                    className="bg-primary/10 p-4 rounded-lg animate-scale-in hover:scale-105 transition-transform"
                    style={{ animationDelay: "1.1s" }}
                  >
                    <h4 className="font-semibold text-primary mb-2">Certifications</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="animate-fade-in" style={{ animationDelay: "1.2s" }}>
                        • Certified Advanced Professional in Exercise Science
                      </li>
                      <li className="animate-fade-in" style={{ animationDelay: "1.3s" }}>
                        • Certified Pain Rehabilitation Specialist
                      </li>
                      <li className="animate-fade-in" style={{ animationDelay: "1.4s" }}>
                        • Certified Manual Therapist
                      </li>
                      <li className="animate-fade-in" style={{ animationDelay: "1.5s" }}>
                        • Certified Dry Needling
                      </li>
                      <li className="animate-fade-in" style={{ animationDelay: "1.6s" }}>
                        • Certified Electro Dry Needling
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
