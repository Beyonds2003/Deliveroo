require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const typeDefs = require('./graphqlSchema/typeDefs')
const resolvers = require('./graphqlSchema/resolvers')

const app = express()

app.use(cors())

app.use(bodyParser.json())

const port = process.env.PORT

const apolloServer = new ApolloServer({typeDefs, resolvers})

const startServer = async () => {

    await apolloServer.start()

    apolloServer.applyMiddleware({app: app})
    
   mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(port, () => console.log(`server is listening to port ${port}`))
   })
   .catch((error) => {
    console.log(error)
   })

}

startServer()