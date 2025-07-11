import { model, Schema } from "mongoose";
import { INote } from "../interfaces/note.interfaces";

const noteSchema = new Schema<INote>(
    {
        title: String,
        content: String,
        category: {
            type: String,
            enum: ['Personal', 'Work', 'Others'],
            default: 'Personal'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'new_users',
            require: true,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)


export const Note = model("Note", noteSchema)