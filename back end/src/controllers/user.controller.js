

import { async } from 'regenerator-runtime';
import User from '../models/User';

export const createUser =(req,res) =>{
    res.json('creating user')
}

export const getUserById = async (req, res) => {
  const UserId =await User.findById(req.params.userId);
  res.status(200).json(UserId)
  //console.log(req.params.userId)
};

export const getUser = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};

export const updateUser = async(req,res) =>{
  const{tName, tEmail, tPassword, roles} = req.body;
  
  const upUser = new User({
    tName,
    tEmail,
    tPassword: await User.encryptPassword(tPassword)
    })
    
  const updateUser =await User.findByIdAndUpdate(req.params.userId,  req.body , { new: true });
  
  res.status(204).json({ updateUser });
}

export const deleteUser = async (req,res)=>{
  console.log(req.params.userId)
    await User.findByIdAndRemove(req.params.userId);
    res.status(204).json({ message: "user delited" });
}

