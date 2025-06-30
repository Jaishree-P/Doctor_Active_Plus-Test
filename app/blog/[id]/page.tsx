import { getBlogPost, getRecentBlogs } from "@/data/blog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import BookAppointmentButton from "@/components/book-appointment-button"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = getBlogPost(params.id)
  const recentBlogs = getRecentBlogs(3).filter((post) => post.id !== params.id)

  if (!blog) {
    notFound()
  }

  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <Link href="/blog">
            <Button variant="outline" className="mb-4 hover:scale-105 transition-transform">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden animate-slide-up">
              {/* Featured Image */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary text-white text-sm px-3 py-1">{blog.category}</Badge>
                </div>
              </div>

              {/* Article Header */}
              <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-up">{blog.title}</h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 animate-fade-in">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 animate-fade-in">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none animate-fade-in"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                  style={{ animationDelay: "0.2s" }}
                />

                {/* Call to Action */}
                <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10 animate-scale-in">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready to Start Your Healing Journey?</h3>
                  <p className="text-gray-600 mb-4">
                    Book a consultation with our expert team to discuss your specific needs and treatment options.
                  </p>
                  <BookAppointmentButton />
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Articles */}
            <Card className="animate-scale-in sticky top-24">
              <CardHeader>
                <CardTitle className="text-primary">Recent Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentBlogs.map((recentBlog) => (
                  <Link key={recentBlog.id} href={`/blog/${recentBlog.id}`}>
                    <div className="group cursor-pointer">
                      <div className="flex gap-3">
                        <img
                          src={recentBlog.image || "/placeholder.svg"}
                          alt={recentBlog.title}
                          className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {recentBlog.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{new Date(recentBlog.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}

                <Link href="/blog">
                  <div className="flex items-center text-primary font-medium hover:translate-x-2 transition-transform mt-4">
                    View All Articles
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="animate-scale-in bg-primary/5" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-primary">Need Expert Advice?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about the topics discussed? Our expert team is here to help.
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
