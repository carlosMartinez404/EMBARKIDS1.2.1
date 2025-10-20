import styles from './styles/SideMenu.module.css';
import closeIcon from '../../assets/cancelar.png';

function SideMenu({ isOpen, onClose, onLogout }) {
    const getContainerClass = () => {
        if (isOpen === null) return styles.mainOptionsContainerBase;
        return isOpen ? styles.mainOptionsContainerOpen : styles.mainOptionsContainerClose;
    };

    const getBlurClass = () => {
        if (isOpen === null) return styles.blurContainerBase;
        return isOpen ? styles.blurContainerOpen : styles.blurContainerClose;
    };

    const getOptionsClass = () => {
        if (isOpen === null) return styles.optionsContainerBase;
        return isOpen ? styles.optionsContainerOpen : styles.optionsContainerClose;
    };

    return (
        <div className={getContainerClass()}>
            <div className={getBlurClass()} onClick={onClose}></div>

            <div className={getOptionsClass()}>
                <div className={styles.OtherContainer}>
                    <img 
                        src={closeIcon} 
                        className={styles.closeIcon} 
                        onClick={onClose}
                        alt="Cerrar"
                    />
                </div>

                <div className={styles.closeSesionContainer}>
                    <button 
                        className={styles.closeSesionButton} 
                        onClick={onLogout}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;