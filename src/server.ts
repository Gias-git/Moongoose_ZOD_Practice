import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';


let server: Server;
const PORT = 7000;


async function main() {

    try {
        await mongoose.connect('mongodb+srv://moongoose:0vN9S556P03tz88c@cluster0.vv2sz9v.mongodb.net/advanced-note-app?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Moongoose Setup")
        server = app.listen(PORT, () => {
            console.log(`App Is listening in port : ${PORT}`)
        })

    } catch (error) {
        console.log(error)
    }
}

main();