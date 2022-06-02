

import { async } from 'regenerator-runtime';
import User from '../models/User';

export const createUser =(req,res) =>{
    res.json('creating user')
}

export const getUserById = async (req, res) => {
  const UserId =await User.findById(req.params.userId);
  res.status(200).json(UserId)
};

export const getUser = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};

export const updateUser = async(req,res) =>{
    
  const updateUser =await User.findByIdAndUpdate(req.params.id,  req.body , { new: true });
  res.status(204).json({ updateUser });
}

export const deleteUser = async (req,res)=>{
    await User.findByIdAndRemove(req.params.id);
    res.status(204).json({ message: "user delited" });
}

