const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User') 

const createUser = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario ya existe con el mismo correo!'
            })
        }

        user = new User(req.body);

        // Encriptar pass
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor contacte al admin!'
        })
    }
}


const loginUser = (req, res = response) => {

    const { email, password } = req.body;
    
    res.status(200).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}


const renewToken = (req, res = response) => {
    
    res.json({
        ok: true,
        msg: 'renew'
    })
}



module.exports = {
    createUser,
    loginUser,
    renewToken
}