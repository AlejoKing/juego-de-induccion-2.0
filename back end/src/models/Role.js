import { Schema,model } from "mongoose";

const rolschema = new Schema({
    tName:String
},{
    versionKey:false
})

export default model("Role",rolschema)