require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
 

const app = express()
const port = 3000


//  Middleware para parsear JSON
app.use(express.json())

//  Permite el frontend 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

//  Conexión a MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://admin:secretpassword@mongodb:27017/EMBARKIDS121?authSource=admin';

mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectadp a MongoDB'))
    .catch(err => console.error('Error conectado a MongoDB:', err));

//  Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//  Importamos y usamos las rutas
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

//  Importamos rutas del shipmentRoutes
const shipmentRoutes = require('./routes/shipmentRoutes');
app.use('/api', shipmentRoutes);



app.listen(port, () =>{
    console.log("Ejemplo de aplicacion en el puerto: "+port)
})