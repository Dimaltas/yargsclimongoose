require("dotenv").config();
const mongoose = require("mongoose");
//const {connect} = require("mongoose"); //to take connect
const connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected");
    } catch(error){
        console.log(error);
    }
}

connection(); //no nned to export because we dont pass anything to it
