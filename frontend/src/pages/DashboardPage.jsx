import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useMenu } from '../hooks/useMenu';
import Header from '../components/dashboard/Header';
import SideMenu from '../components/dashboard/SideMenu';
import styles from './DashboardPage.module.css';
import ShipmentCard from '../components/dashboard/ShipmentCard';
import ShipmentList from '../components/dashboard/shipmentList';
import FormCreateShipment from '../components/dashboard/FormCreateShipment';
import { useShipmentForm } from '../hooks/useShipmentForm';


function DashboardPage() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const { isOpen, toggleMenu, closeMenu } = useMenu();
    const { isOpenForm, toggleForm, closeForm, openForm} = useShipmentForm();

    const handleLogOut = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className={styles.mainView}>
            <Header onMenuClick={toggleMenu} />

            <div className={styles.body}>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonAdd} onClick={openForm}>
                        Crear Embarque
                    </button>
                </div>
                <ShipmentList style={styles.shipmentCard} />
            </div> 

            <SideMenu 
                isOpen={isOpen} 
                onClose={closeMenu} 
                onLogout={handleLogOut}
            />
            <FormCreateShipment 
                isOpenForm={isOpenForm}            
            />
        </div>

    );
}

export default DashboardPage;