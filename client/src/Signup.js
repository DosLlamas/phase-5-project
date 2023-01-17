import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            <h1>{location.pathname}</h1>
            <h1>Welcome!</h1>
            <h3>Enter the required information to get started</h3>
            <form >
                <input type='text' placeholder="First Name" name='first name'  />
                <br /> <br />
                <input type='text' placeholder="Last Name" name='last name'/>
                <br /><br />
                <input type='text' placeholder="Date of Birth" name='date of birth'  />
                <br /> <br />
                <input type='text' placeholder="Email" name='email'/>
                <br /><br />
                <input type='password' placeholder="Password" name='password'/>
                <br /><br />
                <input type='submit' value='Signup' />
            </form>
        </div>
    )
}

export default LoginPage;