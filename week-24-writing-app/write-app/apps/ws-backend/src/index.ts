import { request } from "http";
import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from 'backend-common/config';

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws, request) {
    const url = request.url;  //ws://localhost:3000?token=1234321
    // ["ws://localhost:3000", "token=1234321"]
    if (!url) return;
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token');
    if (!token) return;
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded || !(decoded as JwtPayload).userId) {
        ws.close();
        return;
    }
    




  ws.on("message", function message(data) {
    ws.send("pong")
  });

}); 