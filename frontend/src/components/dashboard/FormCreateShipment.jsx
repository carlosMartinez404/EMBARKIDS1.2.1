import React, {useState, useEffect} from "react";
import styles from './styles/FormCreateShipment.module.css';
import CustomeInputText from '../common/CustomeInputText.jsx';
function FormCreateShipment() {
    return(
        <>
            <div className={styles.blurContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Crear Embarque</h1>
                    </div>

                    <form className={styles.form}>
                        <label>Id Embarque:</label>
                        <input type="text" required/>

                        <label>Destino: </label>
                        <input type="text" required/>
                        
                        <label>Numero de cajas:</label>
                        <input type="text" />
                        
                        <label>Analista a cargo:</label>
                        <input type="text" />

                        <label>Supervisor a cargo:</label>
                        <input type="text" />

                        <div className={styles.buttonContainer}>
                            <input className={styles.buttonCreate} type="submit" value="Crear"/>
                        </div>
            
                    </form>
                </div>
            </div>
        </>
    );
}


export default FormCreateShipment;