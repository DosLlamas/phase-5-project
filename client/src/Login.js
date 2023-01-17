import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = ( {setCurrentUser} ) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const { email, password } = formData

    function submitHandler(e) {
        e.preventDefault()
        const patient = {
            email,
            password
        }

        fetch(`/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(patient)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(patient => {
                        setCurrentUser(patient)
                        navigate(`/patients/${patient.id}`)
                    })
                } else {
                    res.json().then(json => setErrors(json.errors))
                }
            })
    }

    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const navigateToSignupPage = (e) =>{
        navigate('/signup')
    }

    return (
        <div>
            <h1 className="title">Mindful</h1>
            <h2>Take control over your medications</h2>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder="Email" name='email' value={email} onChange={changeHandler} />
                <br /> <br />
                <input type='password' placeholder="Password" value={password} name='password' onChange={changeHandler}/>
                <br /><br />

                <button className="update-profile-btn" type='submit' value='Log In'>Log In</button>
            </form>
            {errors ? <div>{errors}</div> : null}
            <br />
            <hr></hr>
            <h3>You don't already have an account?</h3>
            <button className="sign-up-profile-btn" onClick={navigateToSignupPage}>Signup for Free</button>
        </div>
    )
}

export default LoginPage;