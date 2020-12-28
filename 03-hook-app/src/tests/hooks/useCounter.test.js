import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en useCounter', () => {
    test('debe retornar valores por defecto', () => {
        
        const { result } = renderHook(() => useCounter());
        // console.log(result.current)
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.next ).toBe('function');
        
    })
    
})
