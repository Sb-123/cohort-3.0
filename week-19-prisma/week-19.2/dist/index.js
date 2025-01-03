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
const app = (0, express_1.default)();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    res.json(users);
}));
app.get("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const users = yield prisma.user.findFirst({
        where: {
            id: parseInt(id)
        },
        include: {
            Todos: true
        }
    });
    res.json(users);
}));
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.create({
            data: {
                name: "sanjeev",
                email: "sanjeev@gmail.com",
                password: "123456",
                age: 25,
                city: "delhi"
            }
        });
    });
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.delete({
            where: {
                email: "sanjeev@gmail.com"
            }
        });
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.update({
            where: {
                email: "sanjeev@gmail.com"
            },
            data: {
                name: "sanjeev",
                email: "sanjeev@gmail.com",
                password: "123456",
                age: 25,
                city: "delhi"
            }
        });
    });
}
function findUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({
            where: {
                email: "sanjeev@gmail.com"
            },
            include: {
                Todos: true
            }
        });
        console.log(user);
    });
}
function findAllUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.findMany();
        console.log(users);
    });
}
// createUser();
findUser();
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
