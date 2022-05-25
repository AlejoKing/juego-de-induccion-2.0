import { Schema,model } from "mongoose";

const userSchema=new Schema({
    tName:String,
    nAge:Number,
    tEmail: String,
    tPassword: String
})

export default model('user', userSchema)