
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//  Creamos el esquema
const userSchema = new mongoose.Schema({
    name: {
        type: String,   //  Es texto
        required: true,  //  Es obligatorio
        trim: true  //  Quita espacios
    },

    age: {
        type: Number,   //  Es un numero
        required: true  //  Es obligatiorio
    }, 

    role: {
        type: String,   //  Es texto
        required: true  //  Es obligatorio
    }, 

    email: {
        type: String,   //  Es texto
        required: true,  //  Es obligatorio
        unique: true,
        lowercase: true,    //  Convierte a minusculas
        trim: true
    },

    password: {
        type: String,   //  Es texto
        required: true  //  Es obligatorio
    }
});

//  Middleware para hashear la contraseña antes de guardar el usuario
userSchema.pre('save', async function(next) {
    // Solo se hashea si la contraseña ha sido modificada
    if (!this.isModified('password')) {
        return next();
    }

    // Hasheamos la contraseña con un coste de 10
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


//  Metodo para comprobar contraseñas
userSchema.methods.comparePassword = async function(passwordEntered) {
    return await bcrypt.compare(passwordEntered, this.password);
};

//  Creamos el modelo basado en el esquema
const User = mongoose.model('User', userSchema);

//  Lo exportamos para usarlo en otros archivos
module.exports = User;