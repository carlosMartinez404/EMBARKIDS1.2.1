import styles from './Header.module.css';
import Truck from '../../assets/camion.png';
import Menu from '../../assets/menu.png';

function Header({ onMenuClick }) {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={Truck} className={styles.Truck} alt="Logo"/>
            </div>

            <div className={styles.menu}>
                <img 
                    src={Menu} 
                    className={styles.MenuIcon} 
                    onClick={onMenuClick}
                    alt="Menu"
                />
            </div>
        </div>
    );
}

export default Header;