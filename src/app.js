require("./db/connection");
const yargs = require("yargs") //this const name doesnt have to be yargs. But why not? :P
const {createMovie, readMovie, updateMovie, deleteMovie} = require ("./movie/movie.functions")
const mongoose = require("mongoose");

const app = async (args)=> {
    try{
        const movieObj = {
            title: args.title, 
            actor: args.actor,
            rating: args.rating,
        };
        if (args.add){      
            await createMovie(movieObj);
        }else if(args.list){
            await readMovie(movieObj);
        }else if(args.update){
            await updateMovie(movieObj);
        }else if(args.delete){
            await deleteMovie(movieObj);
        } else {
            console.log("Wrong input")
            mongoose.disconnect()
        }
    } catch (error){
        console.log(error)
        mongoose.disconnect();
    }
}

app(yargs.argv);