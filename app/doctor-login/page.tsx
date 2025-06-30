"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, User } from "lucide-react"

export default function DoctorLoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simple authentication (in real app, this would be server-side)
    if (credentials.username === "doctor-active-plus" && credentials.password === "dr.anilkumar") {
      localStorage.setItem("doctorLoggedIn", "true")
      router.push("/doctor-dashboard")
    } else {
      alert("Invalid credentials. Please try again.")
    }

    setIsLoading(false)
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Doctor Login</h2>
          <p className="mt-2 text-gray-600">Access your dashboard</p>
        </div>

        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle className="text-center text-primary">Sign In to Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className="pl-10"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="pl-10"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full gradient-bg" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In to Dashboard"}
              </Button>
            </form>

            
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
