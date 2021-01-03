import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef/>', () => {
    
    const wrapper = shallow(<RealExampleRef />);

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        // Por defecto el state 'show', está en false, y no mostrará el componente 'MultipleCustomHooks'.
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
    })
    
    test('debe mostrar el componente <MultipleCustomHooks/>', () => {
        // Ahora al simular un click en el boton, cambiará el state a true.
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
    })
    
})
