import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Signup = ( {setCurrentUser} ) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        d_o_b: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState([])
    const { first_name, last_name, d_o_b, email, password } = formData

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            first_name,
            last_name,
            d_o_b,
            email,
            password,
        }
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        navigate(`/home`) 
                        /*
                        Stretch goal: log in for the user automatically on sign up instead
                        of navigating to login page
                        */
                    })
                } else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })

    }
    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }


    return (
        <div>
            <h1>Welcome!</h1>
            <h3>Enter the required information to get started</h3>
            <form  onSubmit={handleSubmit}>
                <input type='text' placeholder="First Name" name='first_name' value={first_name}  onChange={changeHandler}/>
                <br /> <br />
                <input type='text' placeholder="Last Name" name='last_name' value={last_name} onChange={changeHandler}/>
                <br /><br />
                <input type='date' placeholder="Date of Birth" name='d_o_b' value={d_o_b} onChange={changeHandler} />
                <br /> <br />
                <input type='text' placeholder="Email" name='email' value={email} onChange={changeHandler}/>
                <br /><br />
                <input type='password' placeholder="Password" name='password' value={password} onChange={changeHandler}/>
                <br /><br />
                <button className="update-profile-btn" type='submit' value='Signup'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;