import { z } from "zod";

export const CreateUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(2)
});

export const SigninSchema= z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters"),
});


export const CreateRoomSchema = z.object({
    name : z.string().min(3).max(20),
});