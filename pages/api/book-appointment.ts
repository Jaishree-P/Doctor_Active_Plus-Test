import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { fullName, age, mobileNumber, service, description } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jaishree3025@gmail.com',         // ✅ Your Gmail
        pass: 'nzutzxcmnbkhfmrh',               // ✅ App Password
      },
      tls: {
        rejectUnauthorized: false               // ✅ Fixes self-signed certificate error
      }
    })

    await transporter.sendMail({
      from: 'jaishree25eece@gmail.com',
      to: 'jaishree25eece@gmail.com',
      subject: 'New Appointment Booking',
      text: `
📅 New Appointment Request

👤 Name: ${fullName}
🎂 Age: ${age}
📱 Mobile: ${mobileNumber}
🛠️ Service: ${service}
📝 Problem Description: ${description}
      `,
    })

    return res.status(200).json({ message: 'Email sent successfully!' })
  } catch (error: any) {
    console.error("Email error:", error)
    return res.status(500).json({ message: 'Failed to send email', error: error.message })
  }
}
