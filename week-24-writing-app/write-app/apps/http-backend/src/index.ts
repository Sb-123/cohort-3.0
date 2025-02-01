import express from 'express';
import { randomUUID } from 'crypto';
import { db } from './db';
import { User, Room } from './types';
import jwt from "jsonwebtoken"
import { middleware } from './middleware';
import { JWT_SECRET } from 'backend-common/config';
import { CreateUserSchema, CreateRoomSchema ,SignInSchema  } from "@repo/common"

const app = express();
app.use(express.json());

// You should store this in an environment variable
// const JWT_SECRET = 'your-secret-key';

// Signup endpoint
app.post('/signup', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const existingUser = await db.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const data = CreateUserSchema.safeParse({ email, password, name })
        if(!data.success){
            return res.status(400).json({ error: 'Invalid data' });
        }
        console.log(data)



        const user = await db.createUser({
            id: randomUUID(),
            email,
            password, // Note: In production, hash the password!
            name,
            createdAt: new Date()
        });

        const { password: _, ...userWithoutPassword } = user;
        res.status(201).json(userWithoutPassword);
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Updated Signin endpoint with JWT
app.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const user = await db.findUserByEmail(email);
        if (!user || user.password !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: user.id,
                email: user.email,
                name: user.name 
            }, 
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        const { password: _, ...userWithoutPassword } = user;
        res.json({
            ...userWithoutPassword,
            token
        });
    } catch (error) {
        console.error('Signin error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update rooms endpoint to use JWT authentication
app.post('/rooms', middleware.authenticateJWT, async (req, res) => {
    try {
        const { name } = req.body;
        const userId = (req as any).user.userId;

        if (!name) {
            return res.status(400).json({ error: 'Room name is required' });
        }

        const user = await db.findUserById(userId);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const room: Room = {
            id: randomUUID(),
            name,
            createdBy: userId,
            createdAt: new Date(),
            participants: [userId]
        };

        const createdRoom = await db.createRoom(room);
        res.status(201).json(createdRoom);
    } catch (error) {
        console.error('Create room error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});