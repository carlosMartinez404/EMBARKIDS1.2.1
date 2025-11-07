import React, {useState} from "react";
import styles from "./styles/Input.module.css"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{ 
    label?: string
    width: string 
    height: string
}

export function CustomeInput({label, width, height,  ...props}: InputProps) {

    const [status, setStatus] = useState<boolean | null>(null)
    const [passwordState, setPasswordState] = useState(false)
    
 
    const handleChangeStatus = () => {
        if(!props.value){
            setStatus(prev => (prev === null? true: !prev))
        }
    }

    const renderInputByType = () => {
        switch (props.type) {
            case "text" :
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
                            {...props}
                            className={`${styles.input} ${(status === null || status === false? "" : styles.inputUp)}` }
                            onFocus={handleChangeStatus}
                            onBlur={handleChangeStatus}
                        />
                        
                    </div>
                )
            case "password":
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
                            {...props}
                            className={`${styles.input} ${(status === null || status === false? "" : styles.inputUp)}` }
                            onFocus={handleChangeStatus}
                            onBlur={handleChangeStatus}
                        />

                        <img src="" />
                        
                    </div>
                )
                
        }
    }

    return <>{renderInputByType()}</>

}