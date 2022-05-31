import { async } from 'regenerator-runtime';
import { Roles } from '../models/Role';
import User from '../models/User';

export const  checkDuplicateEmail = async(req,res,next) =>{
    const email = await User.findOne({tEmail:req.body.tEmail})
    if(email) return  res.status(400).json({message:'the email alredy exits'})
}

export const checkRolesExisted =(req,res,next) =>{
    if (req.body.roles){
        for (let i=0; i<req.body.roles.length;i++){
            if (!Roles.includes(req.body.roles[i])){
                return res.status(400).json({
                    message:`Role${req.body.roles[i]}does not exists`
                })
            }
        } 
    }

    next();
}
