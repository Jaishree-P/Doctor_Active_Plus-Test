"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LogOut, Printer, Save, FileText, User, Calendar } from "lucide-react"

interface Prescription {
  id: string
  patientName: string
  age: string
  problem: string
  treatment: string
  date: string
}

export default function DoctorDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([])
  const [currentPrescription, setCurrentPrescription] = useState({
    patientName: "",
    age: "",
    problem: "",
    treatment: "",
  })
  const router = useRouter()

  useEffect(() => {
    const loggedIn = localStorage.getItem("doctorLoggedIn")
    if (loggedIn === "true") {
      setIsAuthenticated(true)
      // Load saved prescriptions
      const saved = localStorage.getItem("prescriptions")
      if (saved) {
        setPrescriptions(JSON.parse(saved))
      }
    } else {
      router.push("/doctor-login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("doctorLoggedIn")
    router.push("/doctor-login")
  }

  const handleSavePrescription = () => {
    if (!currentPrescription.patientName || !currentPrescription.age || !currentPrescription.problem) {
      alert("Please fill in all required fields")
      return
    }

    const newPrescription: Prescription = {
      id: Date.now().toString(),
      ...currentPrescription,
      date: new Date().toLocaleDateString(),
    }

    const updatedPrescriptions = [...prescriptions, newPrescription]
    setPrescriptions(updatedPrescriptions)
    localStorage.setItem("prescriptions", JSON.stringify(updatedPrescriptions))

    // Reset form
    setCurrentPrescription({
      patientName: "",
      age: "",
      problem: "",
      treatment: "",
    })

    alert("Prescription saved successfully!")
  }

  const handlePrint = (prescription: Prescription) => {
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Prescription - ${prescription.patientName}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              .header { text-align: center; border-bottom: 2px solid #059669; padding-bottom: 20px; margin-bottom: 30px; }
              .clinic-name { color: #059669; font-size: 24px; font-weight: bold; }
              .prescription-content { line-height: 1.6; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #333; }
              .footer { margin-top: 40px; text-align: center; border-top: 1px solid #ccc; padding-top: 20px; }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="clinic-name">Doctor Active Plus</div>
              <div>Professional Physiotherapy Clinic</div>
              <div>Phone: +91 9262727272</div>
            </div>
            <div class="prescription-content">
              <div class="field">
                <span class="label">Date:</span> ${prescription.date}
              </div>
              <div class="field">
                <span class="label">Patient Name:</span> ${prescription.patientName}
              </div>
              <div class="field">
                <span class="label">Age:</span> ${prescription.age}
              </div>
              <div class="field">
                <span class="label">Problem:</span> ${prescription.problem}
              </div>
              <div class="field">
                <span class="label">Treatment Provided:</span><br>
                ${prescription.treatment.replace(/\n/g, "<br>")}
              </div>
            </div>
            <div class="footer">
              <div>Dr. Active Plus</div>
              <div>Senior Physiotherapist</div>
            </div>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
            <p className="text-gray-600">Prescription Generator</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Prescription Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Create New Prescription
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="patientName">Patient Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="patientName"
                    value={currentPrescription.patientName}
                    onChange={(e) => setCurrentPrescription({ ...currentPrescription, patientName: e.target.value })}
                    className="pl-10"
                    placeholder="Enter patient name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  value={currentPrescription.age}
                  onChange={(e) => setCurrentPrescription({ ...currentPrescription, age: e.target.value })}
                  placeholder="Enter age"
                />
              </div>

              <div>
                <Label htmlFor="problem">Problem *</Label>
                <Select
                  value={currentPrescription.problem}
                  onValueChange={(value) => setCurrentPrescription({ ...currentPrescription, problem: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select problem" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="back-pain">Back Pain</SelectItem>
                    <SelectItem value="cervical-pain">Cervical Pain</SelectItem>
                    <SelectItem value="sciatica">Sciatica Pain</SelectItem>
                    <SelectItem value="knee-pain">Knee Pain</SelectItem>
                    <SelectItem value="frozen-shoulder">Frozen Shoulder</SelectItem>
                    <SelectItem value="arthritis">Arthritis</SelectItem>
                    <SelectItem value="sports-injury">Sports Injury</SelectItem>
                    <SelectItem value="varicose-vein">Varicose Vein</SelectItem>
                    <SelectItem value="diabetic-neuropathy">Diabetic Neuropathy</SelectItem>
                    
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="treatment">Treatment Provided</Label>
                <Textarea
                  id="treatment"
                  value={currentPrescription.treatment}
                  onChange={(e) => setCurrentPrescription({ ...currentPrescription, treatment: e.target.value })}
                  placeholder="Describe the treatment provided, exercises recommended, medications, follow-up instructions..."
                  rows={6}
                />
              </div>

              <Button onClick={handleSavePrescription} className="w-full gradient-bg">
                <Save className="h-4 w-4 mr-2" />
                Save Prescription
              </Button>
            </CardContent>
          </Card>

          {/* Saved Prescriptions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Saved Prescriptions ({prescriptions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {prescriptions.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No prescriptions saved yet</p>
                ) : (
                  prescriptions.map((prescription) => (
                    <div key={prescription.id} className="border rounded-lg p-4 bg-white">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{prescription.patientName}</h3>
                          <p className="text-sm text-gray-600">
                            Age: {prescription.age} | Date: {prescription.date}
                          </p>
                        </div>
                        <Button onClick={() => handlePrint(prescription)} size="sm" variant="outline">
                          <Printer className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm">
                        <strong>Problem:</strong> {prescription.problem}
                      </p>
                      {prescription.treatment && (
                        <p className="text-sm mt-2">
                          <strong>Treatment:</strong> {prescription.treatment.substring(0, 100)}...
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
