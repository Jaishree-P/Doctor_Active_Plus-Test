import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookingProvider } from "@/components/booking-context"
import InteractiveBackground from "@/components/interactive-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Doctor Active Plus - Revolutionary Physiotherapy Experience",
  icons:{
    icon:"/D-Active-Plus-Logo.jpeg",
  },
  description:
    "Transform your health with cutting-edge physiotherapy treatments. Expert care, innovative techniques, and premium home service for optimal recovery and wellness.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} cursor-magic`}>
        <BookingProvider>
          <InteractiveBackground />
          <Header />
          {children}
          <Footer />
        </BookingProvider>
      </body>
    </html>
  )
}
