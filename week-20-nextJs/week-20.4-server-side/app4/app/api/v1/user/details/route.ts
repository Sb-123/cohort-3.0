import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    user: "John Doe",
    email: "doe51@gmail.com",
  })
}

export function POST() {
  return NextResponse.json({
    user: "John Doe", 
    email: "doe51@gmail.com",
  })
}


export function PUT() {
  return NextResponse.json({
    user: "John Doe",
    email: "doe51@gmail.com",
  })
}

export function DELETE() {
  return NextResponse.json({
    user: "John Doe",
    email: "dow51@gmial.com",
  })
}