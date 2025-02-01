import { User, Room } from './types';

class Database {
    private users: User[] = [];
    private rooms: Room[] = [];

    async createUser(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async findUserByEmail(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }

    async findUserById(id: string): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }

    async createRoom(room: Room): Promise<Room> {
        this.rooms.push(room);
        return room;
    }
}

export const db = new Database(); 