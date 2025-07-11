import express, { Application, NextFunction, Request, Response } from 'express'
import { model, Schema } from 'mongoose'
import { Note } from './app/models/notes.models'
import { notesRoutes } from './app/controllers/notes.controllers'
import { userRoutes } from './app/controllers/user.controller'
const app: Application = express()

app.use(express.json())

app.use("/notes", notesRoutes)
app.use("/user", userRoutes)


app.get('/', (req: Request, res: Response) => {
    res.send("Server Running")
}

)





export default app;