import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useMenu } from '../hooks/useMenu';
import Header from '../components/dashboard/Header';
import SideMenu from '../components/dashboard/SideMenu';
import styles from './DashboardPage.module.css';

function DashboardPage() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const { isOpen, toggleMenu, closeMenu } = useMenu();

    const handleLogOut = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className={styles.mainView}>
            <Header onMenuClick={toggleMenu} />

            <div className={styles.body}>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonAdd}>
                        Crear Embarque
                    </button>
                </div>
            </div>

            <SideMenu 
                isOpen={isOpen} 
                onClose={closeMenu} 
                onLogout={handleLogOut}
            />
        </div>
    );
}

export default DashboardPage;