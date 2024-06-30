//Importo el módulo jsonwebtoken para usar JWT
const jwt = require('jsonwebtoken');
//Importo el módulo bcryptjs para encriptar las contraseñas de los usuarios
const bcrypt = require('bcryptjs');
//Importe el array de usuarios
const users = require('../models/userModel');
//Importo la configuracion
const config = require('../config/config');

//Funcion para registrar un nuevo usuario
const register =  (req, res) => {
    //Recupero usuario y contraseña del req
    const { username, password } = req.body;
    //Cifro la contraseña
    const passwordHashed = bcrypt.hashSync(password, 8) ; //'estoesunsalt');

    //Creo un nuevo usuario
    const nuevoUsuario = { id: users.length + 1, username, password: passwordHashed };
    //Agrego el nuevo usuario al array de usuarios
    users.push(nuevoUsuario);

    //Genero un token para el nuevo
    const token = jwt.sign( { id: nuevoUsuario.id }, config.secretKey, { expiresIn: config.expiresIn}  );
    //Envio el token como respuesta al usuario
    response.status(201).send( { auth:true, token});
};

//Funcion para iniciar sesion
const login =  (req, res) => {
    //Recupero usuario y contraseña del req
    const { username, password } = req.body;

    //Busco el usuario
    const usuario = users.find (u => u.username === username );
    //Si el usuario no se encuentra
    if (!usuario) return res.status(404).send ('Usuario no encontrado'); 
    //Comparo la contraseña ingresa con la almacenada
    const contraseñaValida = bcrypt.compareSync (password, usuario.password);
    if (!contraseñaValida) return res.status(401).send ({auth: false, token: null});

    //Genero un token con el id del usuario
    const token = jwt.sign( { id: usuario.id }, config.secretKey, { expiresIn: config.expiresIn}  );
    //Envio el token al cliente
    response.status(200).send( { auth:true, token});
};
module.exports = {register, login};