// Importing the PrismaClient class from the @prisma/client package
import { PrismaClient } from "@prisma/client";

// Creating a new instance of PrismaClient and assigning it to the globalThis object if it doesn't already exist
// This ensures that the PrismaClient instance is reused across hot-reloads in development mode
// @ts-ignore is used to ignore TypeScript errors for the globalThis property
const prisma = globalThis.prisma ?? new PrismaClient(); 

// If the environment is not production, assign the prisma instance to globalThis
// This prevents creating a new PrismaClient instance on every hot-reload in development mode
if (process.env.NODE_ENV !== "production") {
    // @ts-ignore is used to ignore TypeScript errors for the globalThis property
    globalThis.prisma = prisma;
}

// Exporting the prisma instance for use in other parts of the application
export default prisma;
