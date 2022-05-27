import User  from "../models/User";
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from "../models/Role";


export const singUp = async (req,res)=>{


    const{tName, tEmail, tPassword, roles} = req.body;


     const newUser = new User({
        tName,
        tEmail,
        tPassword: await User.encryptPassword(tPassword)
    })



    if (roles){
        const foundRoles=await Role.find({tName:{$in: roles}})
        newUser.roles = foundRoles.map((role)=>role._id)
    }else{
        const role = await Role.findOne({tName:"user"})
        newUser.roles = [role._id]
    }
    

    const savedUser = await newUser.save();
    console.log(savedUser)

    const token = jwt.sign({id:savedUser._id},config.SECRET,{
        expiresIn: 86400//24 horas
    })

    res.status(200).json({token})

}

export const signIn = async(req,res)=>{
    res.json('singIn')
}