import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRouters } from '../../routers/DashboardRouters';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <DashboardRouters/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'obbijuan'
        }
    }
    
    test('debe mostrarse correctamente', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRouters/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('obbijuan')
        
    })
    

})
