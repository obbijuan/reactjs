
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';

import '@testing-library/jest-dom';

import { startLogin, startRegister } from '../../actions/auth';
import { types } from '../../types/types';
import * as fetchModule from '../../helpers/fetch';


// Se crea un mock del sweetalert
jest.mock('sweetalert2', ()=> ({
    fire: jest.fn()
}))


const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore(initState);

// Se crea un mock del localStorage
Storage.prototype.setItem = jest.fn();

let token = '';


describe('Pruebas en las acciones Auth', () => {

    
    beforeEach(()=> {
        store = mockStore( initState );
        jest.clearAllMocks();
    });


    test('startLogin correcto', async() => {

        await store.dispatch( startLogin('obbijuan@gmail.com','123456') );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any(String),
                name: expect.any(String)
            }
        })

        // Verifica que el token se grabó en el localStorage, despues del login.
        expect( localStorage.setItem ).toHaveBeenCalledWith('token', expect.any(String));
        expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any(Number) );

        // console.log(localStorage.setItem.mock.calls[0][1])
        
    });


    test('startLogin incorrecto', async() => {

        await store.dispatch( startLogin('obbijuan@gmail.com','123456789') );
        let actions = store.getActions();

        expect( actions ).toEqual([]);
        expect( Swal.fire ).toHaveBeenCalledWith("Error", "Password invalida!", "error");

        await store.dispatch( startLogin('obbijuan@gmail22.com','123456') );
        actions = store.getActions();

        expect( Swal.fire ).toHaveBeenCalledWith("Error", "Email no existe!", "error");
        
    });



    test('startRegister correcto', async () => {

        fetchModule.fetchWithoutToken = jest.fn(() => ({
            json() {
                return {
                    ok: true,
                    uid: '123',
                    name: 'obbijuan',
                    token: 'abcd12345efgh6789'
                }
            }
        }));

        await store.dispatch(startRegister('test99@test.com', '123456', 'test'));

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'obbijuan'
            }
        })

        expect(localStorage.setItem).toHaveBeenCalledWith('token', 'abcd12345efgh6789');
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number));


        
    });


    
})
