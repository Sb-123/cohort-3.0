import { PrismaClient } from "@prisma/client";

// const prismaClientSingleton= () => {
//     const prisma = new PrismaClient();
//     return prisma;
// }

// @ts-ignore
const prisma = globalThis.prisma ?? new PrismaClient();


if (process.env.NODE_ENV !== "production") {
    // @ts-ignore
    globalThis.prisma = prisma;
}

export default prisma;
