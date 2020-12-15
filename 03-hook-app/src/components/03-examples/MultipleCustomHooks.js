import React, { useEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const listMovies = ['tt0133093', 'tt0234215', 'tt0242653', 'tt0120737', 'tt0167261',
                        'tt0167260', 'tt0120915', 'tt0121765', 'tt0121766', 'tt8111088'];
    const isMounted = useRef(true);
    const [datos, setDatos] = useState({});
    const { idMovie, next } = useCounter(listMovies);

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, [])
    
    
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
    
    
    return (
        <div>
            <h1>OMDb API</h1>
            <hr />
            <button className="btn btn-primary mb-3" onClick={() => { next();}}>Siguiente</button>
            {
                datos.loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-left">
                            <p className="mb-0">{datos.Title} - ({datos.Year})</p>
                            <p className="mb-3 h6">{datos.Genre}</p>
                            <img className="mb-3" src={datos.Poster} alt={datos.Title} width="250px"></img>
                            <footer className="blockquote-footer">{datos.Plot}</footer>
                        </blockquote>
                    )
            }
        </div>
    )
}
