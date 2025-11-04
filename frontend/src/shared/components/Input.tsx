import {useState} from "react";
import styles from "./styles/Input.module.css"

interface InputProps { 
    label?: string
    type: string
}

export function InputText({label, type}: InputProps) {

    const [status, setStatus] = useState(null)

    return(
        <div className={styles.inputContainer}>
            <label className={styles.label}>{label}</label>
            <input type={type} className={styles.input}/>
        </div>
    )
}