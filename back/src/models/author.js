import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: String,
    age: Number
})

const Author = mongoose.model("Author", Schema)
export { Author }