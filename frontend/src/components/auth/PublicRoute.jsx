import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function PublicRoute({ children }) {
    const { user } = useAuth();



    console.log('Public route')
    // Si ya hay usuario logueado, redirige al dashboard
    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}