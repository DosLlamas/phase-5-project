import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            <h1>{location.pathname}</h1>
            <h1>Mindful</h1>
            <h3>Take control over your medications</h3>
            <form >
                <input type='text' placeholder="Email" name='email'  />
                <br /> <br />
                <input type='password' placeholder="Password" name='password'/>
                <br /><br />

                <input type='submit' value='Log In' />
            </form>
            <br />
            <hr></hr>
            <h3>You don't already have an account?</h3>
            <button >Signup for Free</button>
        </div>
    )
}

export default LoginPage;