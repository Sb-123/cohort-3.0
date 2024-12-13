import express from 'express';
import { Client } from 'pg';

const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://first_db_owner:PnAap5GoX8xT@ep-square-cherry-a1clb2nj.ap-southeast-1.aws.neon.tech/first_db?sslmode=require");

pgClient.connect();

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    const {city, state, country, pinCode} = req.body;
    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`; //** 
        const response = await pgClient.query(insertQuery, [username, email, password]);
        const userId = response.rows[0].id;
        const addressInsertQuery = `INSERT INTO address (user_id, city, state, country, pin_code) VALUES ($1, $2, $3, $4, $5)`;
        const addressResponse = await pgClient.query(addressInsertQuery, [userId, city, state, country, pinCode]);
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


app.post("transactions", async (req, res) => {
    const { amount, user_id } = req.body;
    try {
        const insertQuery = `INSERT INTO transactions (amount, user_id) VALUES ($1, $2)`;
        const response = await pgClient.query(insertQuery, [amount, user_id]);
        res.json({
            message: "Transaction successful",
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error while transaction",
            error: error,
        });
    } 
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});