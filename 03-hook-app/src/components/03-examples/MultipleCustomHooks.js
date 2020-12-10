import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const listIds = ['tt0133093', 'tt0120737', 'tt0120915', 'tt0121765', 'tt0167261','tt0121766','tt0167260'];
    const { position, random } = useCounter()
    const { loading, data } = useFetch(`http://www.omdbapi.com/?i=${position}&apikey=9064e370`);
    const { Title, Year, Poster, Plot, Genre } = !!data && data

    return (
        <div>
            <h1>OMDb API</h1>
            <hr />
            <button className="btn btn-primary" onClick={ () => random(listIds) }>Siguiente</button>

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{Title} - ({Year})</p>
                            <p className="mb-0 h6">{Genre}</p>
                            <img src={Poster} alt={Title} width="200px"></img>
                            <footer className="blockquote-footer">{ Plot }</footer>
                        </blockquote>
                    )
            }
        </div>
    )
}
