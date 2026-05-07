import { Schema } from "mongoose";

const studentSchema= Schema({
    name:{
        type:String,
        required: [true, "name is required"],
    },
    roll:{
        type:Number,
        required: [true, "roll is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
})

export default studentSchema;