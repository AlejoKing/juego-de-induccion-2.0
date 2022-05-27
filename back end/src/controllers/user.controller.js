//const { default: user, default: user } = require('../models/User');
const User = require('../models/User');
const UserCtrl = {};

UserCtrl.getUser = async (req, res) => { 
    const user = await user.find();
    res.json(user);
}

UserCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}
// (creacion de nuevo usuario)
UserCtrl.createUser = async (req, res) => {
    console.log('Body recibe la petición',req.body)
    const nuevouser = new User ({
        tName: req.body.tName,
        nAge: req.body.nAge,
        tEmail: req.body.tEmail,
        tPassword: req.body.tPassword
    });
    await nuevouser.save();
    res.json({
        'status': '¡Usuario Creado Exitosamente!'
    })
}

// (Realizar update de un usuario)
UserCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        tName: req.body.tName,
        nAge: req.body.nAge,
        tEmail: req.body.tEmail,
        tPassword: req.body.tPassword
    }
    await User.findByIdAndUpdate(id, {$set:user},{new:true})
    res.json({status: '¡Usuario Actualizado!'})
}

// (Eliminar un usuario- example)
UserCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id)
    res.json({status: '¡Usuario eliminado!'})
}

module.exports = UserCtrl;