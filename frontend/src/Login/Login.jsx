import React, {useState, useEffect} from "react";
import styles from './assets/Login.module.css';
import camion from './assets/camion.png'
import CustomeInputText from "../customeComponents/CustomeInputText.jsx"


function Login(){

    const [active, setActive] = useState(false);
    const [valueUser, setValueUser] = useState("");
    const [valuePassword, setValuePassword] = useState("");

    return(
        <>
            <div className={styles.mainView}>
                <div className={styles.blueContainer}></div>
                <div className={styles.loginContainer}>
                    <form className={styles.loginForm}>
                        <div className={styles.titleLoginTextContainer}>
                            <img className={styles.camion} src={camion}/>
                            <h1>EMBARKIDS</h1>
                            <h1 className={styles.titleLoginText}>Iniciar Sesión</h1>
                        </div>

                        <div className={styles.inputLoginFormContainer}>
                            <div className={styles.inputContainer}>
                                <CustomeInputText style={{width: "80%"}} placeholder="Usuario"/>
                            </div>

                            <div className={styles.inputContainer}>
                                <CustomeInputText style={{width: "80%"}} placeholder="Contraseña"/>
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