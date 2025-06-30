import Reviews from "@/components/reviews"
import ReviewForm from "@/components/review-form"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const detailedReviews = [
  {
    name: "Rajesh Kumar",
   
    rating: 5,
    comment:
      "Excellent laser therapy treatment for my chronic back pain. The Doctor Active Plus Center provided outstanding home service. Highly recommend!",
    treatment: "Laser Therapy - Back Pain",
    
  },
  
  {
    name: "Amit Patel",
    
    rating: 5,
    comment:
      "Recovered from ACL tear with excellent rehabilitation program. The sports treatment protocol was comprehensive and helped me return to playing cricket safely.",
    treatment: "Sports Treatment - ACL Tear",
   
  },
  {
    name: "Sunita Devi",
    
    rating: 5,
    comment:
      "Great treatment for my arthritis and knee pain. The home service made it so convenient for me. Very caring and professional staff.",
    treatment: "Joint Treatment - Arthritis",
    
  },
  {
    name: "Vikram Singh",
    
    rating: 5,
    comment:
      "Excellent spinal decompression therapy for my herniated disc. The progressive treatment worked wonderfully. I can now move freely without pain.",
    treatment: "Spine Treatment - Herniated Disc",
    
  },
  {
    name: "Meera Joshi",
    
    rating: 5,
    comment:
      "The varicose vein treatment was very effective. Professional approach and great results. The home service option was perfect for my busy schedule.",
    treatment: "Venous Treatment - Varicose Veins",
   
  },
]

export default function ReviewsPage() {
  return (
    <main className="pt-20">
      <div className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Patient Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our patients have to say about their treatment experience and recovery journey with Doctor Active Plus.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Reviews Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {detailedReviews.map((review, index) => (
                  <Card
                    key={index}
                    className="animate-slide-up hover:shadow-xl transition-all duration-500"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <Quote className="h-6 w-6 text-primary/30" />
                      </div>

                      <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>

                      <div className="border-t pt-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-gray-900">{review.name}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-primary font-medium">{review.treatment}</p>
                            
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Review Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ReviewForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </main>
  )
}
