import { LoginForm } from "../components/LoginForm"
import styles from './styles/LoginPage.module.css'
import { Background3D } from "../../background3D"


export function LoginPage() {
    return(
        <div className={styles.mainContainer}>
            <Background3D
                className={styles.background} 
                opacity={0.5}
                config={{
                    radius: 5,
                    particleCount: 80,
                    particleColor: 0x3b82f6,  
                }}
            />

            <LoginForm />
        </div>
    )
}