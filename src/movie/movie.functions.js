const Movie = require("./movie.model");
const mongoose = require("mongoose");

exports.createMovie = async(movieObj) => {
    try{
        const newMovie = new Movie (movieObj);          //Adds a new movie in the database (mongoDB)
        await newMovie.save();
        console.log(`Added ${newMovie.title} to your awesome movie list`)
        mongoose.disconnect();
    }
    catch (error){
        console.log(error)
    }
}
exports.readMovie = async() => {
    try{
        console.log(await Movie.find({}));            //Creates a list with all the movies in the database
        mongoose.disconnect();
    }
    catch(error){
        console.log(error);
    }
}
exports.updateMovie = async(movieObj) =>{               //$ set:{} return
    try{
        await Movie.update(                           //Updates the movies (title, actor, rating)  UNDER CONSTRUCTION
            { title: movieObj.title},
            { actor: movieObj.actor},
            { rating: movieObj.rating},
        );
        mongoose.disconnect();
    }
    catch(error){
        console.log(error);
    }
}
exports.deleteMovie = async(movieObj) =>{
    try{
        await Movie.deleteOne(                         //Deletes the first movie from the list. There is no other option in the docs
            {movieObj}
        )
        console.log(`Deleted ${movieObj} from the list`) //NOT WORKING
        mongoose.disconnect();
    }
    catch(error){
        console.log(error);
    }
}
//Save, find, update, and deleteOne are some commands of mongoose. Check model in the mongoose webpage
//https://mongoosejs.com/docs/api/model.html