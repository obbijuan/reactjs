import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {
    
    test('debe de retornar la informacion por defecto', () => {

        const { result } = renderHook(() => useFetch(`http://www.omdbapi.com/?i=tt0133093&apikey=9064e370`))
        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    })

    test('debe de obtener un JSON con informacion', async() => {
    
        const { result, waitForNextUpdate } = renderHook(() => useFetch('http://www.omdbapi.com/?i=tt0133093000&apikey=9064e370'))
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        // Cuando la respuesta de la api es exitosa, devuelve la propiedad 'Response' donde su valor es 'true'.
        expect(data.hasOwnProperty('Response')).toBe(true);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    
    })


    test('debe obtener el error', async() => {
    
        const { result, waitForNextUpdate } = renderHook(() => useFetch('http://www.omdbapi.com/?i=tt0133093xxxxx&apikey=9064e370'))
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data.Response).toBe('False');
        expect(data.hasOwnProperty('Error')).toBe(true);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    
    })

})

