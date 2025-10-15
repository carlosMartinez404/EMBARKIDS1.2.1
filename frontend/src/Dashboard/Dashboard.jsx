import react, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './assets/Dashboard.module.css'
import Truck from './assets/camion.png'
import Menu from './assets/Menu.png';

function Dashboard() {
    const [usuario, setUsuario] = useState(null)
    const navigate = useNavigate()

    const handleLogOut=()=>{
        localStorage.removeItem('usuario')
        navigate('/')
    }


    return(
        <div className={Styles.mainView}>
            <div className={Styles.header}>
                <div className={Styles.logo}>
                    <img src={Truck} className={Styles.Truck}></img>
                </div>

                <div className={Styles.menu}>
                    <img src={Menu} className={Styles.MenuIcon}/>
                </div>
            </div>


            <div className={Styles.body}>
                <div className={Styles.buttonContainer}>
                    <button className={Styles.buttonAdd} >Crear Embarque</button>
                </div>
            </div>

            <div className={Styles.mainOptionsContainer}>
                <div className={Styles.blurContainer}></div>

                <div className={Styles.optionsContainer}>

                </div>
            </div>


        </div>
    )
};


export default Dashboard;