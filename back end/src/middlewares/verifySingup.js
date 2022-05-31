import { async } from 'regenerator-runtime';
import {ROLES} from '../models/Role';
import User from '../models/User';

export const  checkDuplicateEmail = async(req,res,next) =>{
    try {
        const email = await User.findOne({tEmail:req.body.tEmail})
    if(email) 
return  res.status(400).json({message:'the email already exits'})
    next();
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export const checkRolesExisted =(req,res,next) =>{
    if (req.body.roles){
        for (let i = 0; i < req.body.roles.length; i++){
             console.log(i);
            if (!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message:`Role ${req.body.roles[i]} does not exists`
                })
            }
        } 
    }

    next();
};
