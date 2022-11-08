const foodSchema = require('../model/food')
const data = require('../meal')
const {GraphQLError} = require('graphql')

const resolvers = {
    Query: {
        foods: async () => {
            try {
                const getFood = await foodSchema.find({})

                return getFood
            } catch (error) {
                console.log(error)     
            }
        },
        food: async (parent, args) => {
            try {
                const getFood = await foodSchema.find({id: args.id})

                return getFood[0]
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation: {
        createFood: async () => {
            try {
                const addFood = await foodSchema.create(data[5])

                return addFood
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = resolvers