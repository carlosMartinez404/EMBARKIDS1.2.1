import { Navigate } from "react-router-dom";

function ProtectedLogin({children}) {
    const usuario = localStorage.getItem('usuario');

    if(usuario){
        return <Navigate to="/dashboard" replace/>
    }

    return children;
}

export default ProtectedLogin;