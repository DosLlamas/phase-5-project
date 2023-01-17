import React, { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const Home = ( {currentUser, setCurrentUser} ) => {
    const navigate = useNavigate();
    const location = useLocation();

        return (
            <div>
               <h1>{location.pathname}</h1>
            </div>
        )
}

export default Home;