import { Schema,model } from "mongoose";

const rolSchema = new Schema({
    tName:String
},{
    versionKey:false
})

export default model("Role",rolSchema)