import styles from "./styles/button.module.css"

interface ButtonProps { 
    contenido: string
    type: string
    width: string 
    height: string
}

export function CustomeButton({contenido, width, height,type}: ButtonProps) {
    return(
        <div 
            className={styles.buttonContainer}
            style={{
                width: width,
                height: height
            }}
        >
            <button className={styles.button}>{contenido}</button>
        </div>
    )
}