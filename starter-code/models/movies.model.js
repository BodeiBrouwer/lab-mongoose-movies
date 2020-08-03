const mongoose = require('mongoose')

let MoviesSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String
})

let MoviesModel = mongoose.model('movie', MoviesSchema)

module.exports = MoviesModel;