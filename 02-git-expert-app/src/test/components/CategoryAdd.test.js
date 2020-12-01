
import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { CategoryAdd } from '../../components/CategoryAdd';


describe('Pruebas para el componente <CategoryAdd/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<CategoryAdd setCategories={ setCategories } />);
    
    // Se ejecuta para reinicializar
    beforeEach(() => { 
        jest.clearAllMocks();
        wrapper = shallow(<CategoryAdd setCategories={ setCategories } />);
    })

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar el input', () => {
        
        const input = wrapper.find('input');
        const value = 'Agregando Categoria Test!'

        input.simulate('change', { target: { value } });
        // Obtiene el texto del parrafo, dentro del componente y lo compara
        // con el value que se simula para el input.
        expect(wrapper.find('p').text().trim()).toBe(value)

    })

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } })
        // Valida que no se tiene que haber llamado
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe de llamar el setCategories y limpiar el input', () => {
        
        const value = 'input test';

        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } })
        
        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){ }})
        
        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith([value]);
        // expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        
        // 4. El valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');

        
    })
    
    
    
    
})
