import { Schema,model } from "mongoose";

const userSchema=new Schema({
    tName:String,
    tEmail:{ 
        type:String,
        unique:true
    },
    tPassword:{ 
        type:String,
        required:true
    },
    oRole:[{
        ref:"Role",
        type: Schema.Types.ObjectId
    }]
})

export default userSchema;