import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"
import nodemailer from "nodemailer"

export async function POST(
  request: Request
) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      phone,
      time,
      numberOfPeople
    } = body

    const reservation = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        time,
        numberOfPeople
      }
    })

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    })

    await transporter.sendMail({
      from: `"Reservations" <${process.env.SMTP_USER}>`,
      to: "duynd1006.uk@gmail.com",
      subject: "New Table Reservation",
      html: `
        <h2>Oi Bạn Oi</h2>
        <h2>Khách book bàn nè</h2>
        <h2>Gọi khách chốt đơn phát bạn Oi </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>People:</strong> ${numberOfPeople}</p>
        <p><strong>Time:</strong> ${new Date(time).toLocaleString()}</p>
      `,
    })

    return NextResponse.json(reservation)
  } catch (error) {
    console.log("Reservation error: ", error);
    return NextResponse.json({ error: "Failed to create reservation" }, { status: 500 })
  }
  
}