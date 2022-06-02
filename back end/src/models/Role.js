import { Schema,model } from "mongoose";

export const ROLES =["user","admin"];

const rolSchema = new Schema({
    tName:String
},{
    versionKey:false
})

export default model("Role",rolSchema)