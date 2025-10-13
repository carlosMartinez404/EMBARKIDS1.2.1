import React, {useState, useEffect} from "react";
import axios from 'axios';
import styles from './assets/Login.module.css';
import camion from './assets/camion.png';
import CustomeInputText from "../customeComponents/CustomeInputText.jsx";
import CustomeInputPassword from '../customeComponents/CustomeInputPassword.jsx';


function Login(){

    //  Credenciales para el login
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("");
   
    //  Estado pass
    const [pass, setPass] = useState()

    //  Estados para manejo de efectos visuales
    const [active, setActive] = useState(false);
    const [valueUser, setValueUser] = useState("");
    const [valuePassword, setValuePassword] = useState("");
    const [usuario, setUsuario] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault(); //  Previene que el front regargue la pagina

        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email: usuario,
                password: password
            });

            //  Si el login es exitoso 
            console.log('Login exitoso', response.data);
            localStorage.setItem('usuario', JSON.stringify(response.data.user))

        } catch (error) {
            console.error('Error en el login: ', error)
            alert('Credenciales incorrectas');
        }
    };
    

    return(
        <>
            <div className={styles.mainView}>
                <div className={styles.blueContainer}></div>
                <div className={styles.loginContainer}>
                    <form className={styles.loginForm} onSubmit={handleLogin}>
                        <div className={styles.titleLoginTextContainer}>
                            <img className={styles.camion} src={camion}/>
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
                                />
                            </div>
                        
                            <br />
                            <div className={styles.inputContainer}>
                                <CustomeInputPassword 
                                    style={{width: "80%"}} 
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={setPassword}
                                />
                            </div>

                        </div>
                        <div className={styles.submitButtonContainer}>
                            <input type="submit" className={styles.submitButton} value="Iniciar Sesión"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;