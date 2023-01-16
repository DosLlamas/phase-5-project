import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <div className="navlink-wrapper">
                <div className='navlink-button'>
                    <NavLink to={'/'} >
                        🏠 
                    </NavLink>
                </div>
                <div className='navlink-button'>
                    <NavLink to={'/login'} >
                        Login
                    </NavLink>
                </div>
                <div className='navlink-button'>
                    <NavLink to={'/profile'} >
                        👤 
                    </NavLink>
                </div>
                <div className='navlink-button'>
                    <NavLink to={'/search'} >
                        Search
                    </NavLink>
                </div>
                <div className='navlink-button'>
                    Share
                </div>
            </div>
        </nav>
    )
}

export default Nav;