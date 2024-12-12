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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client("postgresql://first_db_owner:PnAap5GoX8xT@ep-square-cherry-a1clb2nj.ap-southeast-1.aws.neon.tech/first_db?sslmode=require");
// const pgClient = new Client({
//     user: "first_db_owner",
//     password: "PnAap5GoX8xT",
//     host: "localhost",
//     port: 7687,
//     database: "first_db",
//     ssl: true,
// });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        const res = yield pgClient.query("SELECT * FROM users");
        console.log(res.rows);
        yield pgClient.end();
    });
}
main();
