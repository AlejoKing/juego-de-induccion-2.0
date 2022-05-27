import User  from "../models/User";
import jwt from 'jsonwebtoken';
import config from '../config';


export const singUp = async (req,res)=>{


    const{tName, tEmail, tPassword, oRole} = req.body;


     const newUser = new User({
        tName,
        tEmail,
        tPassword: await User.encryptPassword(tPassword)
    })

    console.log(newUser)

    const saveUser = await newUser.save();

    const token = jwt.sign({id:saveUser._id},config.SECRET,{
        expiresIn: 86400//24 horas
    })

    res.status(200).json({token})

}

export const signIn = async(req,res)=>{
    res.json('singIn')
}