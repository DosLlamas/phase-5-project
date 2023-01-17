import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';
import Signup from './Signup';
import ProfilePage from './ProfilePage';

function App() {

  const navigate = useNavigate();

  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch("/authorized_user")
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((patient) => {
              // setCurrentUser(patient);
            });
        }
        else{
          navigate("/")
        }
      })
  }, [])

  if (errors) return <h1>{errors}</h1>
  return (
    <div className="App">
      <Routes>
      <Route path="/home" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/" element={<Login setCurrentUser={setCurrentUser}/>} />
        <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>} />
        <Route path="/personal-info" element={<ProfilePage setCurrentUser={setCurrentUser}/>} />
      </Routes>
      {currentUser? <Nav /> : null}
    </div>
  )
}

export default App;