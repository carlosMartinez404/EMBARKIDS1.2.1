import styles from "./styles/Header.component.module.css"
import Logo from "../../../../public/nodos.png"


export function HeaderComponent() {
    return(
        <div className={styles.headerComponentMainContainer}>
            <div className={styles.LogoIconContainer}>
                <img className={styles.LogoIcon} src={Logo}/>
            </div>
        </div>
    )
}