import { model, Schema } from "mongoose";

const noteSchema = new Schema(
    {
        title: String,
        content: String,
        category: {
            type: String,
            enum: ['Personal', 'Work', 'Others'],
            default: 'Personal'
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)


export const Note = model("Note", noteSchema)