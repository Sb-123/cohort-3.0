export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    createdAt: Date;
}

export interface Room {
    id: string;
    name: string;
    createdBy: string;
    createdAt: Date;
    participants: string[];
} 