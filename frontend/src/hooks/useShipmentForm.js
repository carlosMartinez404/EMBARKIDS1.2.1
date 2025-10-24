// hooks/useShipmentForm.js
import { useState } from 'react';
import shipmentService from '../services/shipmentServices';

export const useShipmentForm = (onSuccess, onClose) => {
    const [isOpenForm, setIsOpenForm] =useState(null);

    const [formData, setFormData] = useState({
        idEmbarque: '',
        destino: '',
        numeroCajas: '',
        analistaACargo: '',
        supervisorACargo: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [checkingId, setCheckingId] = useState(false);
    const [idExists, setIdExists] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const toggleForm = () =>{
        setIsOpenForm(true)
    }

    const closeForm =()=> {
        setIsOpenForm(false);
    };

    const openForm =()=>{ 
        setIsOpenForm(true);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.idEmbarque.trim()) {
            newErrors.idEmbarque = 'El ID del embarque es requerido';
        }

        if (!formData.numeroCajas.trim()) {
            newErrors.numeroCajas = 'El número de cajas es requerido';
        }

        if (formData.numeroCajas && isNaN(formData.numeroCajas)) {
            newErrors.numeroCajas = 'Debe ser un número válido';
        }

        if (formData.numeroCajas && parseInt(formData.numeroCajas) < 0) {
            newErrors.numeroCajas = 'No puede ser negativo';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setFormData({
            idEmbarque: '',
            destino: '',
            numeroCajas: '',
            analistaACargo: '',
            supervisorACargo: ''
        });
        setErrors({});
        setSubmitError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            // Preparar datos según el modelo de MongoDB
            const shipmentData = {
                idShipment: formData.idEmbarque,
                destiny: formData.destino || 'DESTINO AUN NO DEFINIDO',
                numberBoxes: formData.numeroCajas,
                items: [] // Array vacío inicialmente, se pueden agregar después
            };

            const response = await shipmentService.createShipment(shipmentData);
            
            if (onSuccess) {
                onSuccess(response);
            }

            resetForm();
            alert('Embarque creado exitosamente');

            if (onClose) {
                onClose();
            }

        } catch (error) {
            console.error('Error al crear embarque:', error);
            setSubmitError(
                error.response?.data?.message ||
                error.message || 
                error.error || 
                'Error al crear el embarque. Por favor intente nuevamente.'
            );
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        resetForm();
        if (onClose) {
            onClose();
        }
    };

    return {
        formData,
        errors,
        loading,
        submitError,
        handleChange,
        handleSubmit,
        handleCancel,
        resetForm,
        isOpenForm,
        toggleForm,
        closeForm,
        openForm
    };
};
