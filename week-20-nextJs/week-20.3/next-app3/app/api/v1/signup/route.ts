
import { NextResponse, NextRequest } from "next/server";
// import { PrismaClient } from "@prisma/client";
import prismaClient from "../../../lib/db";


// const prismaClient = new PrismaClient(); // apn log singleton prismaClient use krenge, iss se baar-baar prismClient create nhi hoga.




export async function POST(req: NextRequest) {
    const data = await req.json();
    
    await prismaClient.user.create({
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
    const data = await prismaClient.user.findFirst();
    
    return NextResponse.json({
    data
    });
}