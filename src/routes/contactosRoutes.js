// Importo el modulo express
const express = require ('express');
// Creo una instacia del router de Express
const router = express.Router();
// Creo una instacia del router contactosController
const contactosController = require('../controllers/contactosController');

router.get('/', contactosController.getContactos);
router.get('/:id', contactosController.getContacto);
router.post('/', contactosController.createContacto);
//router.put('/:id', contactosController.updatePersona);
//router.delete('/:id', contactosController.deletePersona);

// Exporto el router para que pueda ser utilizado en otros archivos
module.exports = router;