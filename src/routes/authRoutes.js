// Importo el modulo express
const express = require ('express');
// Creo una instacia del router de Express
const router = express.Router();
// Creo una instacia del router authController
const contactosController = require('../controllers/authController');
// Creo una instacia del router middleware de autenticacion
const contactosController = require('../middleWares/authMiddleware');

//Ruta para registrar un nuevo usuario
router.post('/register', authController.register);
//Ruta para iniciar sesion con un usuario
router.post('/login', authController.login);
//Ruta protegida
router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).send(`Hola usuario ${req.userId}`);
});

// Exporto el router para que pueda ser utilizado en otros archivos
module.exports = router;