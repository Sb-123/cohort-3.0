import express from "express";

const app=express();

app.get("/signup", (req, res) => {
    res.send("I am signup");
})
app.get("/signin", (req, res) => {
    res.send("I am signin");
})

app.get("/chat", (req, res) => {
    res.send("I am chat");
})



app.listen(3001, () => {
    console.log("Server is running");
})