import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getRecentBlogs } from "@/data/blog"

export default function BlogPreview() {
  const recentBlogs = getRecentBlogs(3)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Health Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest articles on health, wellness, and advanced treatment techniques
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {recentBlogs.map((blog, index) => (
            <Link key={blog.id} href={`/blog/${blog.id}`}>
              <Card
                className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-white">
                      {blog.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 line-clamp-3 mb-4">{blog.excerpt}</p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 rounded-full text-white font-semibold hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-primary/25">
              View All Articles
              <ArrowRight className="h-5 w-5 ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
