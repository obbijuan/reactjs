import React from 'react';
import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas para el componente <GifExpertApp/>', () => {

    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe mostrar un lista de categorias', () => {
        const categories = ['Matrix', 'Star Wars'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
    
    
})
