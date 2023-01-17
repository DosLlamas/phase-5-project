import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './Nav';
import Signup from './Signup';
import Login from './Login';
import ProfilePage from './ProfilePage';

function App() {
  
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch("/authorized_user")
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((patient) => {
              setCurrentUser(patient);
            });
        }
      })
  }, [])

  if (errors) return <h1>{errors}</h1>
  return (
    <div className="App">
      {/* <h1>Page Count: {count}</h1> */}
      <Routes>
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>} />
        <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>} />
        <Route path="/personal-info" element={<ProfilePage setCurrentUser={setCurrentUser}/>} />
      </Routes>
      <Nav />
    </div>
  )
}

export default App;