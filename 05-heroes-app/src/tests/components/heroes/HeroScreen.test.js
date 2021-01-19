import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';


describe('Pruebas en <HeroScreen/>', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ historyMock}/>
            </MemoryRouter>
        )
        expect( wrapper.find('Redirect').exists() ).toBe(true)
    })
    
    test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route path="/hero/:heroeId" component={HeroScreen}/>
            </MemoryRouter>
        )
        expect( wrapper.find('.row').exists() ).toBe(true)
    })

    test('debe de regresar a la pantalla anterior con PUSH', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route
                    path="/hero/:heroeId"
                    component={(props) => <HeroScreen history={history}/>}
                />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    })

    test('debe de regresar a la pantalla anterior GOBACK', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route
                    path="/hero/:heroeId"
                    component={(props) => <HeroScreen history={historyMock}/>}
                />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).toHaveBeenCalledTimes(0);
        expect(historyMock.goBack).toHaveBeenCalled();
        
    })

    test('debe de llamar el redirect si el hero no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk00000']}>
                <Route
                    path="/hero/:heroeId"
                    component={(props) => <HeroScreen history={historyMock}/>}
                />
            </MemoryRouter>
        )

        expect(wrapper.text()).toBe('')
    })
    
    
    
    
    
})
