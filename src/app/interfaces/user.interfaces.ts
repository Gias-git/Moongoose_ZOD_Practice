import { Model } from "mongoose";

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: 'USER' | 'ADMIN',
    address: {
        city: string,
        street: string,
        zip: Number
    }
}

export interface userInstanceMethod {
    hashPassword(password: string): string;
}

export interface userStaticMethod  extends Model<IUser>{
    hashPassword(password: string): string;
}