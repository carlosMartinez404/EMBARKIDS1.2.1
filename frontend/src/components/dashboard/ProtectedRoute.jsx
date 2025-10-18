import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }) {
    const { user } = useAuth();

    // Si no hay usuario, redirige al login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Si hay roles permitidos y el usuario no tiene ese rol
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/login" replace />;
    }

    return children;
}