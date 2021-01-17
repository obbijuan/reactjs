import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRoute/>', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }
    Storage.prototype.setItem = jest.fn();
    
    test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {

        const wrapper = mount(
            // (MemoryRouter): Es un HOC para hacer pruebas de Router con ciertas rutas para que se puedan evaluar
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Component Test!</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(true)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })
    

})
