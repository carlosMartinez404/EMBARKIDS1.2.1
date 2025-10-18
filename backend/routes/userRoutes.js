const express = require('express');
const router = express.Router();
const { createUser, getUsers, deleteAllUsers, updateUser, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

console.log('UserRoutes cargando correctamente')

//  Rutas publicas
router.post('/users', createUser);
router.post('/login', loginUser)



//  Rutas protegidas
router.get('/users', getUsers);
router.delete('/users', deleteAllUsers)
router.put('/users', updateUser)


module.exports = router;