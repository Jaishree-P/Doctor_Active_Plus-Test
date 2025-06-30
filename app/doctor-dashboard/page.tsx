"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { db } from "@/firebase"
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"

import {
  LogOut, Printer, Save, FileText, User, Calendar, Trash2, Pencil
} from "lucide-react"

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

      const unsubscribe = onSnapshot(collection(db, "prescriptions"), (snapshot) => {
        const data: Prescription[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Prescription[]
        setPrescriptions(data.reverse())
      })

      return () => unsubscribe()
    } else {
      router.push("/doctor-login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("doctorLoggedIn")
    router.push("/doctor-login")
  }

  const handleSavePrescription = async () => {
    const { patientName, age, problem, treatment } = currentPrescription
    if (!patientName || !age || !problem) {
      alert("Please fill in all required fields")
      return
    }

    await addDoc(collection(db, "prescriptions"), {
      patientName,
      age,
      problem,
      treatment,
      date: new Date().toLocaleDateString(),
      createdAt: serverTimestamp()
    })

    setCurrentPrescription({ patientName: "", age: "", problem: "", treatment: "" })
    alert("Prescription saved successfully!")
  }

  const handlePrint = (prescription: Prescription) => {
    const win = window.open("", "_blank")
    if (!win) return
    win.document.write(`
      <html><head><title>Prescription</title></head><body>
      <h2>Dr. Active Plus Prescription</h2>
      <p><strong>Date:</strong> ${prescription.date}</p>
      <p><strong>Name:</strong> ${prescription.patientName}</p>
      <p><strong>Age:</strong> ${prescription.age}</p>
      <p><strong>Problem:</strong> ${prescription.problem}</p>
      <p><strong>Treatment:</strong><br>${prescription.treatment.replace(/\n/g, "<br>")}</p>
      </body></html>
    `)
    win.document.close()
    win.print()
  }

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "prescriptions", id))
    alert("Prescription deleted!")
  }

  const handleEdit = (prescription: Prescription) => {
    setCurrentPrescription({
      patientName: prescription.patientName,
      age: prescription.age,
      problem: prescription.problem,
      treatment: prescription.treatment,
    })
  }

  if (!isAuthenticated) return <div>Loading...</div>

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
            <p className="text-gray-600">Prescription Generator</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle><FileText className="h-5 w-5 mr-2" /> Create New Prescription</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Patient Name *</Label>
                <Input
                  value={currentPrescription.patientName}
                  onChange={(e) => setCurrentPrescription({ ...currentPrescription, patientName: e.target.value })}
                  placeholder="Enter name"
                />
              </div>
              <div>
                <Label>Age *</Label>
                <Input
                  type="number"
                  value={currentPrescription.age}
                  onChange={(e) => setCurrentPrescription({ ...currentPrescription, age: e.target.value })}
                  placeholder="Enter age"
                />
              </div>
              <div>
                <Label>Problem *</Label>
                <Select
                  value={currentPrescription.problem}
                  onValueChange={(value) => setCurrentPrescription({ ...currentPrescription, problem: value })}
                >
                  <SelectTrigger><SelectValue placeholder="Select problem" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="back-pain">Back Pain</SelectItem>
                    <SelectItem value="knee-pain">Knee Pain</SelectItem>
                    <SelectItem value="arthritis">Arthritis</SelectItem>
                    <SelectItem value="sciatica">Sciatica</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Treatment</Label>
                <Textarea
                  value={currentPrescription.treatment}
                  onChange={(e) => setCurrentPrescription({ ...currentPrescription, treatment: e.target.value })}
                  placeholder="Describe the treatment..."
                  rows={4}
                />
              </div>
              <Button onClick={handleSavePrescription} className="w-full">
                <Save className="h-4 w-4 mr-2" />
                Save Prescription
              </Button>
            </CardContent>
          </Card>

          {/* Saved */}
          <Card>
            <CardHeader>
              <CardTitle><Calendar className="h-5 w-5 mr-2" /> Saved Prescriptions ({prescriptions.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {prescriptions.map(p => (
                  <div key={p.id} className="border p-4 rounded bg-white shadow-sm">
                    <div className="flex justify-between mb-1">
                      <div>
                        <h3 className="font-semibold">{p.patientName}</h3>
                        <p className="text-sm text-gray-600">Age: {p.age} | {p.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handlePrint(p)}><Printer className="w-4 h-4" /></Button>
                        <Button size="sm" variant="outline" onClick={() => handleEdit(p)}><Pencil className="w-4 h-4" /></Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(p.id)}><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </div>
                    <p className="text-sm"><strong>Problem:</strong> {p.problem}</p>
                    {p.treatment && (
                      <p className="text-sm mt-1"><strong>Treatment:</strong> {p.treatment}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
