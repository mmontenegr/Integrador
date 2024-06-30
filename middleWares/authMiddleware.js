//Importo el módulo jsonwebtoken para usar JWT
const jwt = require('jsonwebtoken');
//Importo la configuracion
const config = require('../config/config');

//Middleware de autenticacion
module.exports = (req, res, next) => {
   //Obtengo el token del encabezado
   const authHeader = req.headers['autorization'];
   //Si no hay un token en el encabezado
   if (!authHeader) return res.status(403).send({auth: false, message: 'No se proveyó un token'});

   //Extraigo el token del encabezado
   const token = authHeader.split(' ')[1];
   //Si el token no está bien formado
   if (!toke) return res.status(403).send({auth: false, message: 'Token mal formado'});
   //Verifico el token
   jwt.verify(token, config.secretKey, (err, decode) => {
        //Si hay error en la verificacion
        if (err) return res.status(500).send({auth: false, message: 'Token Inválido'});

        //Token valido
        req.userId = decoded.id;
        //Llamo a la siguiente funcion
        next();
   });
};