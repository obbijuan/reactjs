import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to="/" className="navbar-brand"> useContext </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* El NavLink puede establecer una clase si el url coincide con el path */}
                    <NavLink exact to="/" className="nav-item nav-link active"> Home </NavLink>
                    <NavLink exact to="/about" className="nav-item nav-link"> About </NavLink>
                    <NavLink exact to="/login" className="nav-item nav-link"> Login </NavLink>
                </div>
            </div>
        </nav>
    )
}
