const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    id: Number,
    title: String,
    image: String,
    type: {
        type: Array,
        default: []
    },
    description: String,
    rating: Number,
    address: Array,
    dishes: {
        type: Array,
        default: []
    },
    long: String,
    lati: String,
    genre: Array
})

module.exports = mongoose.model('food', foodSchema)