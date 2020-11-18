import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'

export const GifExpertApp = () => {

    const [Categories, setCategories] = useState([
        'Episodio I: La amenaza fantasma',
        'Episodio II: El ataque de los clones',
        'Episodio III: La venganza de los Sith'
    ])

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
                    Categories.map(category => {
                        return <li key={category}>{ category }</li>
                     })
                }
            </ol>
        </>
    )
}
