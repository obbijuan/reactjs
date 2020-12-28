import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('debe retornar valores por defecto', () => {
        
        const { result } = renderHook(() => useCounter());
        // console.log(result.current)
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.next ).toBe('function');
        
    })

    test('debe de tener el counter en 100', () => {
        
        const { result } = renderHook(() => useCounter([], 100));
        // console.log(result.current)
        expect( result.current.position ).toBe(100);
        
    })

    test('debe incrementar el counter en 1', () => {
        
        const { result } = renderHook(() => useCounter([], 100));
        const { increment } = result.current;
        act(() => {
            increment();
        });
        // console.log(result.current)
        const { position } = result.current;
        expect(position).toBe(101);
    })
    
})
