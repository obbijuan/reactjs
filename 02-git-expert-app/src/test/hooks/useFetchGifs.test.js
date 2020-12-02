import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas para el componente <useFetchGifs/>', () => {

    test('debe retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Matrix') );
        const { data, loading } = result.current;
        
        await waitForNextUpdate()

        expect(data).toEqual([]);
        expect(loading).toBe(true)
    })
    
    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Matrix') );
        await waitForNextUpdate()
        const { data, loading } = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false)

    })
    

    
    
})
