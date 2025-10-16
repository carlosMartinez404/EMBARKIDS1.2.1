import { useState } from "react";
import { authApi } from "../api/authApi";

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        setLoading(true)
        setError(null);


        try{
            const response = await authApi.login({ email, password });
            setUser(response.data.user);
            return {success: true, user: response.data.user};
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Error al iniciar sesion';
            setError(errorMessage);
            return {success: false, error: errorMessage};
        } finally {
            setLoading(false);
        }

    };

    const logout = () => {
        setUser(null);
    };

    return {user, loading, error, login,logout}
}