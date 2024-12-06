"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// event handler for new connections
wss.on("connection", (ws) => {
    console.log("user connected");
    ws.on("message", (message) => {
        if (message.toString().includes("ping")) {
            console.log("pong");
            ws.send("pong");
        }
    });
    setInterval(() => {
        ws.send("hello");
    }, 500);
});
