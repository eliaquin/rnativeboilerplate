import { ACCESO_EXITOSO } from './types';

export const verificarCredenciales = () => {
    return (dispatch) => {
        setTimeout(() => { 
            dispatch({ type: ACCESO_EXITOSO, payload: 'fdfdkjjfdkjfdsfdl' }); 
        }, 5000);
    };
};
