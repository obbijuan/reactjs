import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // En la desectructuracion, se renombra data por images
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                        key={img.id}
                        {...img}
                        />
                        ))
                    }
            </div>
        </>
    )
}
