import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interfaces";
import { string } from "zod";



const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [20, 'first Name Must be at least  20'],
        minlength: [3, 'first Name Must be at least  20'],
    },

    lastName: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        uppercase: true,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    address: {
        city: { type: string },
        street: { type: string },
        zip: { type: Number }
    }


}, {
    versionKey: false,
    timestamps: true
})

export const user = model("new_users", userSchema)