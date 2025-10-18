import LoginForm from '../components/auth/LoginForm.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const {login, loading, error } = useAuth();

    const handleLogin = async (email, password) => {
        const result = await login(email, password);

        if (result.success) {
            console.log('Login Exitoso');
            navigate('/dashboard');
        } else {
            alert(result.error);
        }
    };

    return <LoginForm onSubmit={handleLogin} loading={loading} error={error}/>;
}


export default LoginPage;