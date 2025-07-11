import express, { Request, Response } from "express";
import { user } from "../models/users.models";
import z from "zod";

export const userRoutes = express.Router();

const createUserZodSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.string().optional(),
})

userRoutes.post("/createUser", async (req: Request, res: Response) => {
    try {
        // const body = await createUserZodSchema.parseAsync(req.body)

        const body = req.body
        const newUser = await user.create(body);
        res.status(201).json({
            success: true,
            message: "user Created Successfully",
            newUser
        })
    } catch (error: any) {

        console.log(error)
        res.status(201).json({
            success: false,
            message: error.message,
            error
        })
    }





}
)

userRoutes.get("/", async (req: Request, res: Response) => {

    const users = await user.find();

    res.status(201).json({
        success: true,
        message: "Note Created Successfully",
        users
    })


}
)