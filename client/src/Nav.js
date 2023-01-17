import React from "react";
import { NavLink } from "react-router-dom";
/*^^ For later, how do I get navlink to look better? */

const Nav = ( {currentUser} ) => {

    return (
        <nav>
            <div className="nav-bar-container">
                <div className='navlink-button'>
                    <NavLink to={'/'} >
                        🏠 
                    </NavLink>
                </div>
                <div className='navlink-button'>
                    <NavLink to={'/personal-info'} >
                        👤 XO
                    </NavLink>
                </div>
                <div className='navlink-button'>
                    <NavLink to={'/search'} >
                        Search
                    </NavLink>
                </div>
                <div className='navlink-button'>
                    <NavLink to={'/login'} >
                        Login
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