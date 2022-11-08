const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Food {
        id: ID!
        title: String!
        description: String!
        image: String!
        type: [String]!
        rating: Float!
        address: [String]!
        dishes: [Dishes!]!
        long: String!
        lati: String!
        genre: [String]!
    }

    type Dishes {
        id: ID!
        name: String
        description: String
        image: String
        price: Int
    }
 

    type Query {
        foods: [Food!]!
        food(id: ID!): Food!
    }

    type Mutation {
        createFood: Food
    }
`

module.exports = typeDefs