import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Doctor from "@/components/doctor"
import BlogPreview from "@/components/blog-preview"
import Reviews from "@/components/reviews"
import Contact from "@/components/contact"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Doctor />
      <BlogPreview />
      <Reviews />
      <Contact />
    </main>
  )
}
