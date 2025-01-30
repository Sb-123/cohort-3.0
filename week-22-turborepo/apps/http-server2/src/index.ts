import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from http-server2");
});

app.listen(3002, () => {
    console.log("Server is running on port 3002");
}); 