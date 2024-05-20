import dotenv from 'dotenv';
import express from 'express';

import mongoose from 'mongoose';
dotenv.config();

mongoose.connect("mongodb+srv://arunsvaddi:Arun402001@mernproject.plhey56.mongodb.net/?retryWrites=true&w=majority&appName=mernproject").then(()=>{
    console.log("connected to Mongodb")
}).catch((error)=>{
    console.log(error)
})

//mongodb+srv://arunsvaddi:<password>@mernproject.plhey56.mongodb.net/?retryWrites=true&w=majority&appName=mernproject
const app=express();

app.listen(3000,()=>{
    console.log("server started on  30000")
})