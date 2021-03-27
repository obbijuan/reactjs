import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

const initState = {
    checking: true,
    // uid: null,
    // name: null
}



describe('Pruebas en authReducer.js', () => {
    

    test('Debe de retornar el estado por defecto', () => {
        
            const action = {};
            const state = authReducer(initState, action);
            
            expect( state ).toEqual( initState );

    });


    test('Debe de autenticar el usuario', () => {
        
        const action = {
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'obbijuan'
            }
        };

        const state = authReducer( initState, action );
        expect(state).toEqual({ checking: false, uid: '123', name: 'obbijuan' });

    })
    
})