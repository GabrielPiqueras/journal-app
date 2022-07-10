
import { useState } from 'react';

/**
 * Hook para usar en cualquier formulario que guarda los valores actuales de sus campos mientras se escribe en ellos.
 * Al ser devuelta en el return se extrae el valor del campo deseado y se pone en el atributo 'value' de dicho input.
 *               
 * @param {Object} initialState Objeto con los 'name' de los inputs del formulario en el que se usa el hook y sus valores por defecto. 
 * @var {Object} formValues Estado que guarda los valores actualizados de los inputs.
 *      
 * @returns {array}
 */

export const useForm = ( initialState = {} ) => {
    const [ formValues, setValues ] = useState(initialState);

    /**
     * Función devuelta a usar en cada input del formulario para guardar los valores.
     * @function handleInputChange
     * 
     * @param {Object} target Input cuyo valor ha cambiado.
     * 
     * @returns {Object} Estado del hook con valor del input actualizado.
     */
    const handleInputChange = ({target}) => {
        setValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    
    /**
     * Función devuelta para reiniciar el estado con los valores usados por defecto.
     * @function resetForm 
     * 
     * @returns {Object} Estado inicial
     */
    const resetForm = () => {
        setValues(initialState);
    }
    
    return [
        formValues,
        handleInputChange,
        resetForm
    ];
}