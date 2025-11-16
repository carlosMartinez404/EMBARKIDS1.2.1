import styles from "./styles/SideLeftMenu.component.module.css"
import MenuIcon from "../../../assets/icons/MenuIcon.png"
import AddProductIcon from "../../../assets/icons/AddProductIcon.png"
import TruckIcon from "../../../assets/icons/TruckIcon.png"

export function SideLeftMenu(){
    return(
        <div className={styles.SideLeftMenuMainContainer}>
            <div className={styles.OptionContainer}>
                <img className={`${styles.Icon} ${styles.MenuIcon}`} src={MenuIcon}/>
            </div>

            <div className={styles.OptionContainer}>
                <img className={`${styles.Icon} ${styles.AddProductIcon}`} src={TruckIcon} />
                <h1 className={styles.Option}>Embarques</h1>
            </div>

            <div className={styles.OptionContainer}>
                <img className={`${styles.Icon} ${styles.AddProductIcon}`} src={AddProductIcon} />
                <h1 className={styles.Option}>Alta producto</h1>
            </div>
        </div>
    )
}