import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    desc: {
        type: String,
        required: true,
    },
}, { timestamps: true })

export const Notes = mongoose.model('Notes', NotesSchema)