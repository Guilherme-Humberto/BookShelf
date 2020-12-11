import 'dotenv/config'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import mongoose from 'mongoose'
import { schema } from './graphql/index'

const app = express()

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once("open", () => {
    console.log("Conectado ao banco de dados")
})

app.use(express.json())
app.use("/", graphqlHTTP({
    schema,
    graphiql: true
}))

export { app }