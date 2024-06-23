// Importo el modulo express
const express = require ('express');
// Creo una instacia del router de Express
const router = express.Router();
// Creo una instacia del router UsuariosController
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.getUsuarios);
router.get('/:id', usuariosController.getUsuario);
router.post('/', usuariosController.createUsuario);
//router.put('/:id', UsuariosController.updateUsuario);
//router.delete('/:id', UsuariosController.deleteUsuario);

// Exporto el router para que pueda ser utilizado en otros archivos
module.exports = router;
