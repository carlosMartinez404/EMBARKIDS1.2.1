import React, {useState, useEffect} from "react";
import styles from './Login.module.css';

function Login(){
    
    useEffect(()=> {
        fetch('http://localhost:8000/')
        .then(response => response.json())
        .then(data=> {
            console.log(data)
        })
        .catch(error => console.log('Error:', error))
    }, [])

    return(
        <>
            <div className={styles.root}>
                <div className={styles.firstContainer}>
                    <h1>po</h1>
                </div>

                <div className={styles.secondContainer}>

                </div>
            </div>
        </>
    );
}

export default Login;