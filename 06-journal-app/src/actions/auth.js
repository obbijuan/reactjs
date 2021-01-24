import { types } from '../types/types';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        // Se simula una peticion asincrona de 3.5 seg.
        setTimeout(() => {
            
            dispatch(login(email, password))

        }, 3500);
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
