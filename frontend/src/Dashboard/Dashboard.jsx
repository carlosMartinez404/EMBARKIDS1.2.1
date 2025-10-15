import react, {use, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './assets/Dashboard.module.css'
import Truck from './assets/camion.png'
import Menu from './assets/Menu.png';
import closeIcon from './assets/cancelar.png';

function Dashboard() {
    const [usuario, setUsuario] = useState(null)
    const [focus, setFocus] = useState(null)

    const navigate = useNavigate()

    const handleLogOut=()=>{
        localStorage.removeItem('usuario')
        navigate('/')
    }


    const handleFocus =()=> {
        if(focus === null){
            console.log("thi is null, change to true")
            setFocus(true)
        } else if (focus === true) {
            console.log("This is true change to false")
            setFocus(false)
        } else{
            console.log("This is false change to true")
            setFocus(true)
        }

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

                <div className={focus === null? Styles.optionsContainerBase : ""}>
                    <div className={Styles.OtherContainer}>
                        <img src={closeIcon} className={Styles.closeIcon} onClick={handleFocus}/>
                    </div>

                    <div className={Styles.closeSesionContainer}>
                        <button className={Styles.closeSesionButton} onClick={handleLogOut}>Cerrar Sesión</button>
                    </div>
                </div>
            </div>


        </div>
    )
};


export default Dashboard;