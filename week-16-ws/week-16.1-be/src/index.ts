import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });


// event handler for new connections
wss.on("connection", (ws) => {
    console.log("user connected");
    ws.on("message", (message) => {
        if (message.toString().includes("ping")) {
           ws.send("pong");
       }
    }); 

   
   
});







