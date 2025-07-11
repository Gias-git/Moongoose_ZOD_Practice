import express, { Request, Response } from "express";
import { user } from "../models/users.models";
import z, { success } from "zod";


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

        // type-1
        // const password = await user.hashPassword(body.password);
        // body.password = password;


        const newUser = await user.create(body);

        // type-2
        // const newUser = new user(body); // create instance
        // const password = await newUser.hashPassword(body.password); // hash password
        // newUser.password = password;
        // await newUser.save(); // save to D


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


userRoutes.delete('/:userId', async (req: Request, res: Response) => {

    const userId = req.params.userId

    const findAndDeleteUser = await user.findOneAndDelete({_id : userId})

    res.status(201).json({
        success : true,
        findAndDeleteUser
    })
})