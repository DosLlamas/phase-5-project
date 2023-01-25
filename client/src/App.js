import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";
import ProfilePage from "./ProfilePage";
import Search from "./Search";
import AddMedicationForm from "./AddMedicationForm";

function App() {
  const navigate = useNavigate();
  
  const [errors, setErrors] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [medication, setMedication] = useState(null)

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((patient) => {
          patient.errors ? setCurrentUser(null) : setCurrentUser(patient);
        });
      }
    });
  }, []);

  if (errors) return <h1>{errors}</h1>;
  return (
    <div className="App">
      {!currentUser ?
        <>
          <Routes>
            <Route
              path="/"
              element={<Login setCurrentUser={setCurrentUser} />}
            />
            <Route
              path="/signup"
              element={<Signup setCurrentUser={setCurrentUser} />}
            />
          </Routes>
        </>
       : 
        <>
          <Routes>
            <Route
              path="/home"
              element={
                <Home
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path="/personal-info"
              element={<ProfilePage setCurrentUser={setCurrentUser} />}
            />
            <Route
              path="/search-prescriptions"
              element={<Search setCurrentUser={setCurrentUser} />}
            />
            <Route 
            path="/add-medication"
            element={<AddMedicationForm setMedication={setMedication}/>}
            />
            <Route
              path="*"
              element={
                <Home
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
          </Routes>
          <Nav />
        </>
      }
    </div>
  );
}

export default App;
