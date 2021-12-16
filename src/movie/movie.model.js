const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,   //Doesn't store the same movie title more than once
        required: true,
    },
    actor:{
        type: String,
        default: "Not specified yet" //the default value of actor
    },
    rating: {
        type: Number,
        min: 1,     //min value
        max: 10,    //max value
        default: 5, //the default value
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;