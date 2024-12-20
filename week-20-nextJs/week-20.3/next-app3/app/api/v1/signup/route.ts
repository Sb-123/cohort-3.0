
import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import prismaClient from "../../../lib/db";

const prisma = new PrismaClient();





export async function POST(req: NextRequest) {
    const data = await req.json();
    
    await prisma.user.create({
        data: {
            username: data.username,
            password: data.password,
        }
    });
    console.log(data);
    return NextResponse.json({
        message: "signup success"
    });
 }

export async function GET(req: NextRequest) {
    const data = await prisma.user.findFirst();
    
    return NextResponse.json({
       data
    });
 }