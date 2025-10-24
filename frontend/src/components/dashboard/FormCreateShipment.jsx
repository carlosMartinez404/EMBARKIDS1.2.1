import React from "react";
import styles from './styles/FormCreateShipment.module.css';
import CustomeInputText from '../common/CustomeInputText.jsx';
import { useShipmentForm} from '../../hooks/useShipmentForm';
import x from '../../assets/cancelar.png'

function FormCreateShipment({ onClose, onSuccess }) {
    const {
    formData,
    errors,
    loading,
    submitError,
    checkingId,
    idExists,
    handleChange,
    handleSubmit,
    handleCancel,
    isOpenForm,
    toggleForm,
    closeForm,
    openForm
    } = useShipmentForm(onSuccess, onClose);

    return (
        <div className={isOpenForm === null? styles.blurContainerBase : isOpenForm === true? styles.blurContainerOpen : styles.blurContainerClose}>
                
                <div className={styles.formContainer}>
                    <div className={styles.closeWindowContainer}>
                        <img src={x} className={styles.closeWindowIcon} onClick={closeForm}/>
                    </div>

                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Crear Embarque</h1>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        

                        <label>Id Embarque: *</label>
                        <input 
                            type="text" 
                            name="idEmbarque"
                            value={formData.idEmbarque}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            className={idExists ? styles.inputError : ''}
                            />
                        {submitError && (
                            <div className={styles.errorMessage}>
                                {submitError}
                            </div>
                        )}
                        

                        <label>Destino: *</label>
                        <input 
                            type="text" 
                            name="destino"
                            value={formData.destino}
                            onChange={handleChange}
                            required
                            disabled={loading}
                        />
                        {errors.destino && (
                            <span className={styles.fieldError}>{errors.destino}</span>
                        )}
                        
                        <label>Número de cajas:</label>
                        <input 
                            type="number" 
                            name="numeroCajas"
                            value={formData.numeroCajas}
                            onChange={handleChange}
                            min="0"
                            disabled={loading}
                        />
                        {errors.numeroCajas && (
                            <span className={styles.fieldError}>{errors.numeroCajas}</span>
                        )}
                        
                        <label>Analista a cargo:</label>
                        <input 
                            type="text" 
                            name="analistaACargo"
                            value={formData.analistaACargo}
                            onChange={handleChange}
                            disabled={loading}
                        />

                        <label>Supervisor a cargo:</label>
                        <input 
                            type="text" 
                            name="supervisorACargo"
                            value={formData.supervisorACargo}
                            onChange={handleChange}
                            disabled={loading}
                        />

                        <div className={styles.buttonContainer}>
                            {onClose && (
                                <button 
                                    type="button"
                                    className={styles.buttonCancel}
                                    onClick={handleCancel}
                                    disabled={loading}
                                >
                                    Cancelar
                                </button>
                            )}
                            <button 
                                className={styles.buttonCreate} 
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Creando...' : 'Crear'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        
    );
}

export default FormCreateShipment;