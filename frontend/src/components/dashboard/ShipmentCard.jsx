import react, {useState, useEffect} from 'react';
import styles from './styles/ShipmentCard.module.css';
import LogoVital from '../../assets/LogoVitalHealth.png'

const ShipmentCard = ({shipment, onUpdate}) =>{
    const handleViewCard  = () => {
        console.log('Ver detalles en: ', shipment)

    };

    return(
        <div className={styles.mainView}>
            <div className={styles.imgContainer}>
                <img src={LogoVital} className={styles.imgVital}/>
            </div>

            <div className={styles.infoContainer}>
                <h2>Status:</h2>
                <h1>{shipment.Status}</h1>

                <h2>Id Embarque:</h2>
                <h1>{shipment.idShipment}</h1>
                
                <h2>Destino:</h2>
                <h1>{shipment.destiny}</h1>

                <h2>Transporte:</h2>
                <h1>Casber</h1>

                <h2>Supervisor a cargo:</h2>
                <h1>Marco Castro</h1>

                <h2>Analista a cargo:</h2>
                <h1>Manuel Armenta</h1>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.buttonViewCard} onClick={handleViewCard}>View Card</button>
            </div>
        </div>
    );
}


export default ShipmentCard;