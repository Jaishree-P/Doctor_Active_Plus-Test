import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    comment:
      "Excellent treatment for my back pain. Dr. Active Plus provided home service which was very convenient. Highly recommended!",
    treatment: "Spine Treatment",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    comment:
      "Amazing results with the aesthetic treatments. Professional service and great care. Very satisfied with the outcome.",
    treatment: "Aesthetic Treatment",
  },
  {
    name: "Amit Patel",
    rating: 5,
    comment:
      "Recovered completely from my sports injury. The rehabilitation program was excellent and well-structured.",
    treatment: "Sports Treatment",
  },
  {
    name: "Sunita Devi",
    rating: 5,
    comment: "Great treatment for my knee pain. The home service made it so much easier for me. Thank you!",
    treatment: "Joint Treatment",
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Reviews</h2>
          <p className="text-xl text-gray-600">What our patients say about their experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm">"{review.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-primary">{review.treatment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
