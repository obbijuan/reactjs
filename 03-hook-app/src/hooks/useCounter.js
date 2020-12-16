// El objectivo de un custom hooks es la reutilizacion.
import { useState, useEffect } from 'react'

export const useCounter = ( ArrMovies ) => {
    
    const [listMovies] = useState(ArrMovies);
    const [position, setPosition] = useState(0);
    const [idMovie, setIdMovie] = useState('');
    
    useEffect(() => {
        setIdMovie(listMovies[position]);
        // eslint-disable-next-line
    }, [position])

    function increment() {
        setPosition(position + 1);
    }
    
    function reset(){
        setPosition(0);
    }
    
    const next = () => {
        position < (listMovies.length - 1) ? increment() : reset()
        setIdMovie(listMovies[position]);
    }

    return {
        idMovie,
        position,
        increment,
        next
    }

}
