import { async } from "regenerator-runtime";
import User  from "../models/User";


export const singUp = async (req,res)=>{
    const{tName, tEmail, tPassword, oRole} = req.body;

     const newUser = new User({
        tName,
        tEmail,
        tPassword: User.encryptPassword(tPassword)
    })

    console.log(newUser)

    res.json('singUp')

}

export const signIn = async(req,res)=>{
    res.json('singIn')
}