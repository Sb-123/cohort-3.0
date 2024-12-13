"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://first_db_owner:PnAap5GoX8xT@ep-square-cherry-a1clb2nj.ap-southeast-1.aws.neon.tech/first_db?sslmode=require");
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const { city, state, country, pinCode } = req.body;
    try {
        const insertQuery = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id`; //** 
        const response = yield pgClient.query(insertQuery, [name, email, password]);
        const userId = response.rows[0].id;
        const addressInsertQuery = `INSERT INTO address (user_id, city, state, country, pin_code) VALUES ($1, $2, $3, $4, $5)`;
        const addressResponse = yield pgClient.query(addressInsertQuery, [userId, city, state, country, pinCode]);
        res.json({
            message: "You have signed up successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error while signing up",
            error: error,
        });
    }
}));
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const selectQuery = `SELECT * FROM users`;
        const response = yield pgClient.query(selectQuery);
        res.json({
            message: "You have signed up successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error while signing up",
            error: error,
        });
    }
}));
app.post("transactions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount, user_id } = req.body;
    try {
        const insertQuery = `INSERT INTO transactions (amount, user_id) VALUES ($1, $2)`;
        const response = yield pgClient.query(insertQuery, [amount, user_id]);
        res.json({
            message: "Transaction successful",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error while transaction",
            error: error,
        });
    }
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
