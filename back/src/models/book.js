import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: String,
    genre: String,
    authorId: String
})

const Book = mongoose.model("Book", Schema)
export { Book }