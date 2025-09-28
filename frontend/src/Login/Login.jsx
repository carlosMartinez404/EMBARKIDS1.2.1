import React, {useState, useEffect} from "react";
import styles from './assets/Login.module.css';
import camion from './assets/camion.png'

function Login(){
    
    // useEffect(()=> {
    //     fetch('http://localhost:8000/')
    //     .then(response => response.json())
    //     .then(data=> {
    //         console.log(data)
    //     })
    //     .catch(error => console.log('Error:', error))
    // }, [])

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
                                <input type="text" className={styles.inputLoginForm} required/>
                                <h2 className={styles.labelInput}>Usuario</h2>
                            </div>

                            <div className={styles.inputContainer}>
                                <input type="password" className={`${styles.inputLoginForm} ${styles.separacion}`} required/>
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