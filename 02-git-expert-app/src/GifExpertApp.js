import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['The Matrix'])
    
    // const handleAdd = () => { 
    //     setCategories([
    //         ...Categories,
    //         'Episodio IV: Una nueva esperanza'
    //     ])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    Categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                    )
                }
            </ol>
        </>
    )
}
