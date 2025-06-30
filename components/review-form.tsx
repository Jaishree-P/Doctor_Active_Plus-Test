"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Send } from "lucide-react"

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    treatment: "",
    review: "",
    rating: 0,
  })
  const [hoveredRating, setHoveredRating] = useState(0)

  const treatments = [
    "Laser Therapy",
    "Spine Treatment",
    "Joint Treatment",
    "Venous Treatment",
    "Aesthetic Treatment",
    "Sports Treatment",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.treatment || !formData.review || formData.rating === 0) {
      alert("Please fill in all fields and provide a rating")
      return
    }

    console.log("Review submitted:", formData)
    alert("Thank you for your review! It will be published after verification.")
    setFormData({ name: "", treatment: "", review: "", rating: 0 })
  }

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating })
  }

  return (
    <Card className="animate-scale-in hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/10">
      <CardHeader>
        <CardTitle className="text-2xl text-primary flex items-center">
          <Star className="h-6 w-6 mr-2 animate-pulse" />
          Write a Review
        </CardTitle>
        <p className="text-gray-600">Share your experience with our treatments</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="treatment">Treatment Undergone *</Label>
            <Select
              value={formData.treatment}
              onValueChange={(value) => setFormData({ ...formData, treatment: value })}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select treatment" />
              </SelectTrigger>
              <SelectContent>
                {treatments.map((treatment) => (
                  <SelectItem key={treatment} value={treatment}>
                    {treatment}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="rating">Rating *</Label>
            <div className="flex items-center space-x-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-8 w-8 transition-colors ${
                      star <= (hoveredRating || formData.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {formData.rating > 0 && `${formData.rating} star${formData.rating > 1 ? "s" : ""}`}
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="review">Your Review *</Label>
            <Textarea
              id="review"
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              placeholder="Share your experience with our treatment and service..."
              rows={5}
              className="mt-1"
              required
            />
          </div>

          <Button type="submit" className="w-full gradient-bg hover:scale-105 transition-all duration-300">
            <Send className="h-4 w-4 mr-2" />
            Submit Review
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
