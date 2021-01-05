import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user } = useContext(UserContext)

    return (
        <div>
            <h1>HomeScreen</h1>
            <br />
            <pre>{ JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}
