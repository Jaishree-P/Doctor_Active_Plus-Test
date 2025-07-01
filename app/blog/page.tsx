import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { blogPosts } from "@/data/blog"

export default function BlogPage() {
  // Extract unique blog categories (not currently used for filtering)
  const categories = [...new Set(blogPosts.map((post) => post.category))]

  return (
    <main className="pt-20">
      <div className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health & Wellness Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, treatment guides, and wellness tips from our experienced physiotherapy team
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Section */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Input UI only — no functionality yet */}
            

            {/* Category badges — UI only, no filter logic */}
            {/* Uncomment and implement filter logic if needed in future */}
            {/*
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                All
              </Badge>
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                  {category}
                </Badge>
              ))}
            </div>
            */}
          </div>

          {/* Blog Grid Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((blog, index) => (
              <Link key={blog.id} href={`/blog/${blog.id}`}>
                <Card
                  className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
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
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {blog.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
