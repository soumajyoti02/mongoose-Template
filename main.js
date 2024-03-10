import express from "express"
import mongoose from "mongoose";
import { Notes } from "./models/Note.js";

const app = express()
const port = 3000

const db = await mongoose.connect('mongodb://127.0.0.1:27017/Notes');

app.get('/', async (req, res) => {
    const note = new Notes({
        title: "Dark truths about phycology",
        desc: "This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. "
    })

    await note.save()
    res.send('Hello World!')
})

app.get('/notes', async (req, res) => {
    let fetchedNote = await Notes.find({ title: "Dark truths about phycology" })
    res.send(fetchedNote)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})