import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <br />
            <button
                className="btn btn-primary"
                onClick={() => setUser({
                    id: 13,
                    user: 'john'
                })}
            >
                login
            </button>
        </div>
    )
}
