import { HeaderComponent } from "../components/Header.component"
import { SideLeftMenu } from "../components/SideLeftMenu.component"
import styles from "./styles/dashboard.page.module.css"


export function DashboardPage(){
    return(
        <div className={styles.dashboardMainContainer}>
            <HeaderComponent />
            <SideLeftMenu />
        </div>
    )
}

