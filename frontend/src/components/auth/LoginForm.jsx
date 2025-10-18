import { useState } from "react";
import styles from './LoginForm.module.css';
import camion from '../../assets/camion.png';
import CustomeInputText from "../common/CustomeInputText.jsx";
import CustomeInputPassword from '../common/CustomeInputPassword.jsx';

function LoginForm({ onSubmit, loading }) {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(usuario, password);
    };

    return (
        <div className={styles.mainView}>
            <div className={styles.blueContainer}></div>
            <div className={styles.loginContainer}>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div className={styles.titleLoginTextContainer}>
                        <img className={styles.camion} src={camion} alt="Camión"/>
                        <h1>EMBARKIDS</h1>
                        <h1 className={styles.titleLoginText}>Iniciar Sesión</h1>
                    </div>

                    <div className={styles.inputLoginFormContainer}>
                        <div className={styles.inputContainer}>
                            <CustomeInputText 
                                style={{width: "80%"}} 
                                placeholder="Usuario"
                                value={usuario}
                                onChange={setUsuario}
                                disabled={loading}
                            />
                        </div>
                    
                        <br />
                        <div className={styles.inputContainer}>
                            <CustomeInputPassword 
                                style={{width: "80%"}} 
                                placeholder="Contraseña"
                                value={password}
                                onChange={setPassword}
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <div className={styles.submitButtonContainer}>
                        <input 
                            type="submit" 
                            className={styles.submitButton} 
                            value={loading ? "Cargando..." : "Iniciar Sesión"}
                            disabled={loading}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;