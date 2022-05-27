import { Schema,model } from "mongoose";

import bcrypt from 'bcryptjs';


const userSchema =new Schema(
    {
    tName:String,
    tEmail:{ 
        type:String,
        unique:true
    },
    tPassword:{ 
        type:String,
        required:true
    },
    roles:[
        {
        ref:"Role",
        type: Schema.Types.ObjectId
        },
    ],
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

userSchema.statics.encryptPassword= async(tPassword)=>{
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(tPassword, salt)
}

userSchema.statics.comparePassword = async(tPassword,recivedPassword)=>{
  return  await bcrypt.compare(tPassword, recivedPassword)
}

export default model('User', userSchema) ;