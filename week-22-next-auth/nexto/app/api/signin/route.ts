import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';



export async function POST(req: Request) {

    // ideally we should check the username and password in the DB and only if it is right
    // we should return the token.

    const body = await req.json();

    const username = body.username;
    const _password = body.password;

    


    const userId = 1;
    const token = jwt.sign({
        userId,

    }, "SECRET")
    
    return NextResponse.json({
        token
    })
}