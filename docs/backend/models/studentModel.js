import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: {type : String, required:true},
    e_number:{type :Number, required:true},
    email:{type :String, required :true},
    password:{type:String ,required :true}
})

const userModel = mongoose.model.student || mongoose.model("student",productSchema)

export default userModel