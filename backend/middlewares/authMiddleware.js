const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader('Bearer ') ? authHeader.split(' ')[1] : authHeader;
    
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }


    if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET no definido en el entorno');
        return res.status(500).json({message: 'Configuracion del entorno incompleta'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token invalido o expirado'});
    }
};

module.exports = authMiddleware;