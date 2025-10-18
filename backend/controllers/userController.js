const User = require('../models/User');
const jwt = require('jsonwebtoken');


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
        const { email, ...currentData} = req.body;  //  Separamos email del resto de los parametros


        //  Verificacion del email
        if(!email) {
            return res.status(400).json({
                message: 'El email es requerido para actualizar'
            });
        }

        //  Busca y actualiza el usuario por email
        const updatedUser = await User.findOneAndUpdate(
            {email: email}, //  buscamos por email
            currentData,    //  Actualiza solo los otros campos
            {new: true} //  Devuelve el usuario actualizado
        );


        //  Si no existe el usuario 
        if(!updatedUser){
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            message: 'Usuario actualizado correctamente',
            usuario: updatedUser
        });


    } catch (error) {
        res.status(400).json({
            message: 'Error al actualizar usuario',
            error: error.message
        });
    }
};


//  Login de usuario
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //  Verificar que tengamos el email y password
        if(!email || !password) {
            return res.status(400).json({
                message: 'Email y contraseña son requeridos'
            })
        }



        //  Buscar usuario por email
        const user = await User.findOne({ email: email});

        //  Si no existe el usuario
        if(!user) {
            return res.status(401).json({
                message: "Credenciales incorrectas"
            });
        }

        //  Comparar contraseñas
        const correctPassword = await user.comparePassword(password);

        if(!correctPassword) {
            return res.status(401).json({
                message: 'Credenciales incorrectas'
            });
        }

        //  Comprobar que JWT_SECRET esté definido
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                message: 'Error del servidor: JWT_SECRET no está definido'
            });
        }


        //  Generar JWT (Payload minimo)
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role,
            name: user.name
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '2h' //  Token valido por 2 horas
        });


        //  Login exitoso
        res.status(200).json({
            message: 'Login exitoso',
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                id: user._id
            }
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error en el login',
            error: error.message
        });
    }
}


//  Exportamos la funcion
module.exports = {
    createUser,
    getUsers ,
    deleteAllUsers,
    updateUser,
    loginUser
}