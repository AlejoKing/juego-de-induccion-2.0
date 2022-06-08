import { Schema,model } from "mongoose";

import bcrypt from 'bcryptjs';
import { byte } from "webidl-conversions";
import { slategray } from "color-name";


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

userSchema.pre('findByIdAndUpdate', function(next){
    bcrypt.genSalt(10).then(salts=>{
        bcrypt.hash(this.tPassword,salts).then(hash=>{
            this.tPassword =hash
            next();
        }).catch(error=>next(error))
    }).catch(error => next(error));
   
});

export default model('User', userSchema) ;