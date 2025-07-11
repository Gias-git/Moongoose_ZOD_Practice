import { Model, model, Schema } from "mongoose";
import { IUser, userInstanceMethod, userStaticMethod } from "../interfaces/user.interfaces";
import bcrypt from "bcryptjs";
import { Note } from "./notes.models";

const userSchema = new Schema<IUser, userStaticMethod, userInstanceMethod>({
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
        city: { type: String },
        street: { type: String },
        zip: { type: Number }
    }


}, {
    versionKey: false,
    timestamps: true
})


userSchema.method("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10);

    return password;
})

userSchema.static("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10);
    return password;
})

userSchema.pre("save", async function () {
    console.log("In side Preset hook")
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this)
})


userSchema.post("save", function (doc) {
    console.log("%s Inside save post hook", doc._id)
})


userSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await Note.deleteMany({ user: doc._id })
    }

})

export const user = model<IUser, userStaticMethod>("new_users", userSchema)