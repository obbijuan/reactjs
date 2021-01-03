import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');

describe('Pruebas en MultipleCustomHooks', () => {
    
    test('debe mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar la informacion', () => {

        useFetch.mockReturnValue({
            data: {
                Title: "The Matrix",
                Year: "1999"
            },
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);

    })
    

})
