
import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({
  port: 8080,
});

// in express app we build a websocket server in three lines.
/*
import express from "express";
const app = express();
app.listen(8080);
*/


interface User {
  socket: WebSocket;
  room: string;
}

let allSockets : User[] = []; 
wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message.toString());
    if (parsedMessage.type === "join") {
      console.log("user joined room" + parsedMessage.payload.roomId);
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
    }
    if (parsedMessage.type === "chat") {
      console.log("user wants to chat");
      let currentUserRoom = null;
      
      // find the current user's room
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].socket === socket) {
          currentUserRoom = allSockets[i].room;
        }
      }
      // send the message to the current user's room
      for(let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].room === currentUserRoom) {
          allSockets[i].socket.send(message.toString());
        }
      }
    }
  })
  socket.on("disconnect", () => {
    allSockets = allSockets.filter((socket) => socket !== socket);
    console.log("user disconnected");
  })
});