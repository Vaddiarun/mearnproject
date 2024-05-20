import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mangoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    }

} {Timestamp:true};)

const User= mongoose.model("User" , userSchema);

export default User;