"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useBooking } from "./booking-context"
import { servicesData } from "@/data/services"

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking()
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    service: "",
    problem: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const response = await fetch("/api/book-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.name,
        age: formData.age,
        mobileNumber: formData.mobile,
        service: formData.service,
        description: formData.problem,
      }),
    })

    const result = await response.json()

    if (response.ok) {
      alert("Appointment booked successfully! We will contact you soon.")
      closeBooking()
      setFormData({ name: "", age: "", mobile: "", service: "", problem: "" })
    } else {
      alert("Failed to book appointment: " + result.message)
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    alert("Something went wrong. Please try again.")
  }
}


  const allTreatments = servicesData.flatMap((service) =>
    service.treatments.map((treatment) => ({
      value: treatment.id,
      label: `${service.name} - ${treatment.name}`,
    })),
  )

  return (
    <Dialog open={isOpen} onOpenChange={closeBooking}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="service">Service Required</Label>
            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {allTreatments.map((treatment) => (
                  <SelectItem key={treatment.value} value={treatment.value}>
                    {treatment.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="problem">Problem Description</Label>
            <Input
              id="problem"
              value={formData.problem}
              onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
              placeholder="Briefly describe your problem"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={closeBooking} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 gradient-bg">
              Book Appointment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
