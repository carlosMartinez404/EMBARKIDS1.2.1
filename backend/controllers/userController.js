const User = require('../models/User');


//  Crear un nuevo usuario 
const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json({
            mensaje: 'Usuario creado exitosamente',
            usuario: newUser
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al crear usuario',
            error: error.message
        });
    }
};


//  Obtener todos los usuarios
const getUsers = async (req, res) => {
    try{
        //  Esto busca todos los usuarios en la base de datos
        const users = await User.find();

        //  Responde con los usuarios encontrados
        res.status(200).json({
            total: users.length,
            users: users
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener usuarios',
            error: error.message
        })
    }
}

//  Buscamos y obtenemos un Usuario por id



//  Eliminamos todos los usuarios
const deleteAllUsers = async (req, res) => {
    try {
        const response = await User.deleteMany({});

        res.status(200).json({
            message: 'Todos los usuarios han sido eliminados',
            eliminatedUsers: response.deletedCount
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar los usuarios',
            error: error.message
        });
    }
}


//  Actualizar un usuario por email
const updateUser = async (req, res) => {
    try {
        const { email } = req.params;   //  Obtenemos el email de la URL
        const datosActualizados = req.body; //  Obtenemos los nuevos datos

        //  Busca y actualiza el usuario por email
        const usuarioActualizado = await User.findOneAndUpdate(
            {email: email}, //  Busca por email
            datosActualizados,
            { new: true} // Devuelve el usuario actualizado
        );

        //  Si no existe el usuario
        if(!usuarioActualizado) {
            return res.status(404).json({
                message: 'Usuario no actualizado',
            });
        }

        res.status(200).json({
            message: 'Usuario actualizado correctamente',
            user: usuarioActualizado
        });

    } catch (error) {
        res.status(400).json({
            message: 'Error al actualizar usuario',
            error: error.message
        });
    }
};


//  Exportamos la funcion
module.exports = {
    createUser,
    getUsers ,
    deleteAllUsers,
    updateUser
}