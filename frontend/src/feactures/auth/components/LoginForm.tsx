import { useState } from "react";
import { CustomeInput } from "../../../shared/components/Input";
import styles from "./styles/LoginForm.module.css"

export function LoginForm(){
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)

    return(
        <form className={styles.form}>
            <br />
            <br />
            <CustomeInput 
                label="This is a input" 
                type="text"
                width="50%"
                height="40px"
            />

            <br />

            <CustomeInput
                label="Password" 
                type="password"
                width="50%"
                height="40px"
            />
        </form>
    )
}