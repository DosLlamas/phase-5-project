import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = ( {updatePatient} ) => {
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
                        updatePatient(patient)
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
            <h1>{location.pathname}</h1>
            <h1>Mindful</h1>
            <h3>Take control over your medications</h3>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder="Email" name='email' value={email} onChange={changeHandler} />
                <br /> <br />
                <input type='password' placeholder="Password" value={password} name='password' onChange={changeHandler}/>
                <br /><br />

                <input type='submit' value='Log In' />
            </form>
            {errors ? <div>{errors}</div> : null}
            <br />
            <hr></hr>
            <h3>You don't already have an account?</h3>
            <button onClick={navigateToSignupPage}>Signup for Free</button>
        </div>
    )
}

export default LoginPage;