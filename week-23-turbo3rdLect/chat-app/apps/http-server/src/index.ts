
import express from "express";

const app = express();

app.get("/signup", (req, res) => {
  res.send("sign up suceess");
});
app.get("/login", (req, res) => {
  res.send("login suceess");
});
app.get("/logout", (req, res) => {
  res.send("logout suceess");
});
app.get("/profile", (req, res) => {
  res.send("profile suceess");
});
app.get("/update", (req, res) => {
  res.send("update suceess");
}); 
app.get("/delete", (req, res) => {
  res.send("delete suceess");
});
app.get("/chat", (req, res) => {
    res.send("chat suceess");
 });   

app.listen(3001, () => {
  console.log("server is running   "); // 3000
});