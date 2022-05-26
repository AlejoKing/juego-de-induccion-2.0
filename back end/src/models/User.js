import { Schema,model } from "mongoose";
import { async } from "regenerator-runtime";
import bcrypt from 'bcryptjs';


const userSchema =new Schema({
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
});

userSchema.static.encryptPassword = async (tPassword)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(tPassword, salt)
}

userSchema.static.comparePassword = async (tPassword,receivedPassword)=>{
    return await bcrypt.compare(tPassword,receivedPassword)
}

export default model('User', userSchema) ;