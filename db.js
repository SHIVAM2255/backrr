const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function connectDB(){

    mongoose.connect('mongodb+srv://shivampatil2107:oKX7O3Tvc6f4dN6V@cluster0.bg9rs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose