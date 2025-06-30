"use client"

import { Button } from "@/components/ui/button"
import { useBooking } from "./booking-context"
import { Calendar } from "lucide-react"

interface BookAppointmentButtonProps {
  className?: string
}

export default function BookAppointmentButton({ className }: BookAppointmentButtonProps) {
  const { openBooking } = useBooking()

  return (
    <Button onClick={openBooking} className={`gradient-bg hover:scale-105 transition-all duration-300 ${className}`}>
      <Calendar className="h-4 w-4 mr-2" />
      Book Appointment
    </Button>
  )
}
