import React, {useState} from "react";
import styles from "./styles/Input.module.css"
import OpenEye from "../../assets/icons/OpenEye.png"
import ClosedEye from "../../assets/icons/ClosedEye.png"

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

    const handleViewPassword =()=> {
        setPasswordState(prev=>(!prev))
        console.log(passwordState)
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

                        <div 
                            className={`${styles.IconEyeContainer} ${(status === null || status === false? "" : styles.IconEyeContainerUp)}` } 
                            onClick={handleViewPassword}
                        >
                            <img className={styles.IconEye} src={passwordState? ClosedEye : OpenEye} />
                        </div>
            
                        <input 
                            {...props}
                            className={`${styles.input} ${(status === null || status === false? "" : styles.inputUp)}` }
                            onFocus={handleChangeStatus}
                            onBlur={handleChangeStatus}
                            type={passwordState? "text" : "password"}
                        />
                        
                    </div>
                )
                
        }
    }

    return <>{renderInputByType()}</>

}