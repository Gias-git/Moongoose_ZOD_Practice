import express, { Request, Response } from "express";
import { Note } from "../models/notes.models";

export const notesRoutes = express.Router()

notesRoutes.post("/crateNote", async (req: Request, res: Response) => {

    const body = req.body;

    const note = await Note.create(body);

    res.status(201).json({
        success: true,
        message: "Note Created Successfully",
        note: note
    })


}
)

notesRoutes.get("/", async (req: Request, res: Response) => {

    const notes = await Note.find().populate('user');

    res.status(201).json({
        success: true,
        message: "Note Created Successfully",
        notes
    })


}
)

notesRoutes.get("/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const notes = await Note.findById(noteId);

    res.status(201).json({
        success: true,
        message: "Note Created Successfully",
        notes
    })

}
)

notesRoutes.patch("/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const updatedBody = req.body;

    const notes = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });

    res.status(201).json({
        success: true,
        message: "Note Created Successfully",
        notes
    })

}
)

notesRoutes.delete("/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;

    const notes = await Note.findByIdAndDelete(noteId)

    res.status(201).json({
        success: true,
        message: "Note Created Successfully",
        notes
    })

}
)