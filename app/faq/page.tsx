"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Do you provide home service treatments?",
    answer:
      "Yes, we provide comprehensive home service treatments. Our physiotherapist visits your home with all necessary equipment to provide professional care in the comfort of your own space. This service is especially beneficial for patients with mobility issues or those who prefer treatment at home.",
  },
  {
    id: 2,
    question: "What conditions do you treat?",
    answer:
      "We treat a wide range of conditions including spine disorders (back pain, cervical pain, sciatica), joint problems (arthritis, frozen shoulder, knee pain), sports injuries (ACL tears, tennis elbow), venous conditions (varicose veins, diabetic neuropathy).",
  },
  {
    id: 3,
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by clicking the 'Book Appointment' button on our website, calling us at +91 9262727272, or filling out the contact form. We'll get back to you within 24 hours to confirm your appointment time.",
  },
  {
    id: 4,
    question: "What should I expect during my first visit?",
    answer:
      "During your first visit, we'll conduct a comprehensive assessment of your condition, discuss your medical history, perform necessary physical examinations, and create a personalized treatment plan. The session typically lasts 45-60 minutes.",
  },
  {
    id: 5,
    question: "How long does treatment typically take?",
    answer:
      "Treatment duration varies depending on your condition and severity. Acute conditions may resolve in 2-4 weeks, while chronic conditions might require 6-12 weeks or more. We'll provide you with a realistic timeline during your initial assessment.",
  },
  {
    id: 6,
    question: "Do you accept insurance?",
    answer:
      "We accept most major insurance plans. Please contact us with your insurance details, and we'll verify your coverage before your appointment. We also offer flexible payment options for self-pay patients.",
  },
  {
    id: 7,
    question: "What equipment do you bring for home visits?",
    answer:
      "For home visits, we bring portable physiotherapy equipment including exercise bands, therapeutic tools, electrotherapy devices (when needed), and all necessary assessment tools to provide comprehensive treatment at your home.",
  },
  {
    id: 8,
    question: "Can I continue my regular activities during treatment?",
    answer:
      "This depends on your condition and treatment plan. We'll provide specific guidelines about activity modifications, what to avoid, and when you can gradually return to your normal activities. Our goal is to keep you as active as safely possible.",
  },  {
    id: 9,
    question: "Do you provide exercise programs for home practice?",
    answer:
      "Yes, we provide customized home exercise programs with detailed instructions and illustrations. These exercises are designed to complement your in-clinic or home visit treatments and accelerate your recovery process.",
  },
]

export default function FAQPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <main className="pt-20">
      <div className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our physiotherapy services, treatments, and home care options.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={faq.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <Button variant="ghost" size="sm" onClick={() => toggleFAQ(faq.id)} className="flex-shrink-0">
                      {expandedFAQ === faq.id ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </div>
                </CardHeader>

                {expandedFAQ === faq.id && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
