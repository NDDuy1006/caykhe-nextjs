import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"

export async function POST(
  request: Request
) {
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

  return NextResponse.json(reservation)
}