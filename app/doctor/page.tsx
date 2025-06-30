import Doctor from "@/components/doctor"

export default function DoctorPage() {
  return (
    <main className="pt-20">
      <div className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Doctor</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced physiotherapist dedicated to providing the best care for your recovery and wellness.
          </p>
        </div>
      </div>
      <Doctor />
    </main>
  )
}
