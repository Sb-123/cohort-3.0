import express from "express";


const app = express();



import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const users = await prisma.user.findFirst({
        where: {
            id: parseInt(id)
        },
        include: {
            Todos: true
        }
    });
    res.json(users);
});

async function createUser() {
    await prisma.user.create({
        data: {
            name: "sanjeev",
            email: "sanjeev@gmail.com",
            password: "123456",
            age: 25,
            city: "delhi"
        }
    })
}

async function deleteUser() {
    await prisma.user.delete({
        where: {
            email: "sanjeev@gmail.com"
        }
    })
}

async function updateUser() {
    await prisma.user.update({
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
    })
}

async function findUser() {
    const user = await prisma.user.findUnique({
        where: {
            email: "sanjeev@gmail.com"
        },
        include: {
            Todos: true
        }
    })
    console.log(user)
}

async function findAllUser() {
    const users = await prisma.user.findMany()
    console.log(users)
}


// createUser();
findUser();

app.listen(3000, () => {
    console.log("Server is running on port 3000");    
});