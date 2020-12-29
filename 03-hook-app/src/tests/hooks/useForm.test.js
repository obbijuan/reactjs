import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'john',
        email: 'john.g@gmai.com'
    }

    test('Debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange ).toBe('function');
        expect(typeof reset ).toBe('function');
    })
    
    test('debe de cambiar el valor del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Lissa'
                }
            })
        });

        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'Lissa' })

    })
    
    test('debe de re-establecer el formulario con RESET', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Lissa'
                }
            })
            
            reset();
        });

        const [formValues] = result.current;
        expect(formValues).toEqual( initialForm )

    })
})
