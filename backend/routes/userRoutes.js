const express = require('express');
const router = express.Router();
const { createUser, getUsers, deleteAllUsers, updateUser, loginUser } = require('../controllers/userController');

console.log('UserRoutes cargando correctamente')

//  Ruta para crear un usuario
router.post('/users', createUser);

router.get('/users', getUsers);

router.delete('/users', deleteAllUsers)

router.put('/users', updateUser)

router.post('/login', loginUser)

module.exports = router;