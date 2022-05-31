import User from '../models/User';

export const createUser =(req,res) =>{
    res.json('creating user')
}

export const updateUser = (req,res) =>{
    const { id } = req.params;
  const user = {
    tName: req.body.tName,
    nAge: req.body.nAge,
    tEmail: req.body.tEmail,
    tPassword: req.body.tPassword,
  };
  await User.findByIdAndUpdate(id, { $set: user }, { new: true });
  res.status(204).json({ status: "update user" });
}

export const deleteUser = (req,res)=>{
    await User.findByIdAndRemove(req.params.id);
    res.status(204).json({ status: "user delited" });
}