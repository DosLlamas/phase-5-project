import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './Nav';
import Signup from './Signup';
import Login from './Login';

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
        <Route path="/login" element={<Login updatePatient={setCurrentUser}/>} />
        <Route path="/signup" element={<Signup updatePatient={setCurrentUser}/>} />
      </Routes>
      <Nav />
    </div>
  )
}

export default App;