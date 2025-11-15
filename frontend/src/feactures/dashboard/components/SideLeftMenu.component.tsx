import styles from "./styles/SideLeftMenu.component.module.css"


export function SideLeftMenu(){
    return(
        <div className={styles.SideLeftMenuMainContainer}>
            <div className={styles.OptionContainer}>
                <label className={styles.Option}>Embarques</label>
            </div>

            <div className={styles.OptionContainer}>
                <label className={styles.Option}>Alta producto</label>
            </div>
        </div>
    )
}