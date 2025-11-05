import {useState} from "react";
import styles from "./styles/Input.module.css"

interface InputProps { 
    label?: string
    type: string
    width: string 
    height: string
}

export function CustomeInput({label, type, width, height}: InputProps) {

    const [status, setStatus] = useState<boolean | null>(null)

    const handleChangeStatus = () => {
        setStatus(prev => (prev === null? true: !prev))
    }


    return(
        <div 
            className={styles.inputContainer}
            style={{
                width: width,
                height: height
            }}
        >
            <label className={`${styles.label} ${(status === null || status === false? "" : styles.labelUp)}` }>{label}</label>

            <input 
                type={type} 
                className={`${styles.input}`} 
                onFocus={handleChangeStatus}
                onBlur={handleChangeStatus}
            />
            
        </div>
    )
}