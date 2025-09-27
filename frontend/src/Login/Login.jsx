import React, {useState, useEffect} from "react";
import styles from './Login.module.css';

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
                            <h1 className={styles.titleLoginText}>Iniciar Sesión</h1>
                        </div>

                        <div className={styles.inputLoginFormContainer}>
                            <input type="text" className={styles.inputLoginForm} />
                            <input type="password" className={`${styles.inputLoginForm} ${styles.separacion}`}/>
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