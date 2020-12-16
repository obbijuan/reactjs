import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import './layout.css'

export const Layout = () => {

    const listMovies = ['tt0133093', 'tt0234215', 'tt0242653', 'tt0120737', 'tt0167261',
                        'tt0167260', 'tt0120915', 'tt0121765', 'tt0121766', 'tt8111088'];
    const isMounted = useRef(true);
    const [datos, setDatos] = useState({});
    const { idMovie, next } = useCounter(listMovies);

    const parrafo = useRef();
    const [boxSize, setBoxSize] = useState({})

    
    useEffect(() => {return () => { isMounted.current = false;}}, [])
    useEffect(() => {
        
        async function fetchData() {
            await fetch(`http://www.omdbapi.com/?i=${idMovie}&apikey=9064e370`)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    const { Title, Year, Poster, Plot, Genre } = !!data && data
                    setDatos({ loading: false, Title, Year, Poster, Plot, Genre })
                }
            })
        }
        fetchData();
    }, [idMovie])
    
    
    useLayoutEffect(() => {
        setBoxSize(parrafo.current.getBoundingClientRect())
    }, [datos.Title])
    
    
    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
            <blockquote className="blockquote text-left">
                <p
                    className="mb-0"
                    ref={parrafo}
                >{datos.Title} - ({datos.Year})</p>
            </blockquote>
            <pre>
                { JSON.stringify(boxSize, null, 2)}
            </pre>
            <button className="btn btn-primary mb-3" onClick={() => { next();}}>Siguiente</button>
        </div>
    )
}
