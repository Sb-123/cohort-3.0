import { JsonWebTokenError } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    const headers = req.headers;
    const authorizationHeader = header["authorization"];
    const decoded=JsonWebTokenError.decode(authorizationHeader, "SECRET");
    const userId = decoded.userId;
    

    // hit the database to get the users profile picture.
    

    return NextResponse.json({
        avatarUrl: "http://images.google.com/cat.png",
    })
}



