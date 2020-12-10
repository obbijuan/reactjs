import { useState, useEffect } from 'react'

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({ data: null, loading: true })
    
    
    useEffect(() => {
        
        setState({ data: null, loading: true })
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    data
                })
            })

    }, [url])

    return state;
    
}
