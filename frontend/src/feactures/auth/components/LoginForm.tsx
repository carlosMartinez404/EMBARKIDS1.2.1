import { useState } from "react";
import { CustomeInput } from "../../../shared/components/Input";
import styles from "./styles/LoginForm.module.css"
import Truck from "../../../assets/images/truck.png"
import { CustomeButton } from "../../../shared/components/CustomeButton";

export function LoginForm(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <form className={styles.form}>

            <div className={styles.logoContainer}>
                <img className={styles.logo} src={Truck} />
            </div>

            <div className={styles.labelsContainer}>
                <label className={styles.labelTitle}>EMBARKIDS</label>
                <label className={styles.labelSubTitle}>Incia sesión en tu cuenta</label>
            </div>

            <div className={styles.inputContainer}>
                <CustomeInput 
                    label="Correo electrónico o usuario" 
                    type="text"
                    width="80%"
                    height="45px"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
                
                <br />
                <CustomeInput
                    className={styles.customeInputPassword}
                    label="Password" 
                    type="password"
                    width="80%"
                    height="45px"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                />
            </div>

            <div className={styles.buttonContainer}>
                <CustomeButton
                    contenido="Iniciar Sesión"
                    type="normal"
                    width="80%"
                    height="40px"
                />
            </div>

        </form>
    )
}