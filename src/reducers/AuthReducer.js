import { ACCESO_EXITOSO } from './../actions/types';

const INITIAL_VALUE = {
    codigoUsuario: ''
};

export default (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case ACCESO_EXITOSO:
            return { ...state, codigoUsuario: action.payload };
        default: 
            return state;
        }
};
