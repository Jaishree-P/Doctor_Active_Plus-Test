import Services from "@/components/services"

export default function TreatmentsPage() {
  return (
    <main className="pt-20">
      <div className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Treatments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive physiotherapy treatments for all your health needs. Each treatment is carefully designed with
            detailed protocols for optimal recovery.
          </p>
        </div>
      </div>
      <Services />
    </main>
  )
}
