const express = require('express');
const router = express.Router();
const { createUser, getUsers, deleteAllUsers, updateUser } = require('../controllers/userController');

console.log('UserRoutes cargando correctamente')

//  Ruta para crear un usuario
router.post('/users', createUser);

router.get('/users', getUsers);

router.delete('/users', deleteAllUsers)

router.put('/users/:email', updateUser)

module.exports = router;