



// const pgClient = new Client({
//     user: "first_db_owner",
//     password: "PnAap5GoX8xT",
//     host: "localhost",
//     port: 7687,
//     database: "first_db",
//     ssl: true,
// });

// async function main() {
//     await pgClient.connect();
//     const res= await pgClient.query("SELECT * FROM users");
//     console.log(res.rows);
//     await pgClient.end();
// }


import e from 'express';
import express from 'express';
import { Client } from 'pg';

const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://first_db_owner:PnAap5GoX8xT@ep-square-cherry-a1clb2nj.ap-southeast-1.aws.neon.tech/first_db?sslmode=require");

pgClient.connect();

app.post("/users", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const insertQuery = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`; //** 
        const response = await pgClient.query(insertQuery, [name, email, password]);

        res.json({
            message: "You have signed up successfully",
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error while signing up",
            error: error,
        });
    } 
});


app.get("/users", async (req, res) => {
    try {
        const selectQuery = `SELECT * FROM users`;
        const response = await pgClient.query(selectQuery);

        res.json({
            message: "You have signed up successfully",
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error while signing up",
            error: error,
        });
    } 
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});