import mongoose from "mongoose";

const constDB = async() =>{

    mongoose.connection.on('connected',()=>{
        console.log("DB connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/OneStop`)
}