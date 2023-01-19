import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  /* 
    make a fetch so the user can see what their previous profile info was
  */

  const [updateMessage, setUpdateMessage] = useState('')

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    d_o_b: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const { first_name, last_name, d_o_b, email, password } = formData;

  const handleSubmit = (e) => {
    // e.preventDefault();
    const newUpdateUserInfo = {
      first_name,
      last_name,
      d_o_b,
      email,
      password,
    };
    fetch("/update_profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUpdateUserInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((patient) => {});
        setUpdateMessage('Saved')
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const signOutHandler = () => {
    if (window.confirm("Are you sure you want to sign out?") === true) {
      fetch(`/logout`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setCurrentUser(false);
          navigate("/");
        }
      });
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Do you want to delete your account?") === true) {
      if (
        window.confirm(
          "Are you sure you want to delete your account? This is permanent"
        ) === true
      ) {
        fetch("destroy-user", {
          method: "DELETE",
        });
        setCurrentUser(false);
        navigate("/");
        window.location.reload(false);
      }
    }
  };

  return (
    <div>
      <h1>Personal Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="info-container">
          <div className="basic-info-container">
            <h2>Basic Info</h2>
            <div className="basic-info-content">
              <div>
                <label>
                  <span>First Name</span>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={first_name}
                    onChange={changeHandler}
                  />
                </label>
                <br />
                <br />
                <label>
                  <span>Last Name</span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={last_name}
                    onChange={changeHandler}
                  />
                </label>
                <br />
                <br />
                <label>
                  <span>Birthday</span>
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    name="d_o_b"
                    value={d_o_b}
                    onChange={changeHandler}
                  />
                </label>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="info-container">
          <div className="basic-info-container">
            <h2>Account Info</h2>
            <div className="basic-info-content">
              <label>
                <span>Email</span>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                />
              </label>
              <br />
              <br />
              <label>
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={changeHandler}
                />
              </label>
              <br />
              <br />
            </div>
          </div>
        </div>
        <br />
        <button className="update-profile-btn" type="submit">
          Update Profile
        </button>
      </form>
      {updateMessage}
      {errors ? <div>{errors}</div> : null}
      <br />
      <br />
      <div onClick={signOutHandler} className="sign-out-btn">
        <svg viewBox="0 0 24 24">
          <path d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"></path>
        </svg>
        <div className="sign-out-div">Sign Out</div>
      </div>
      <br />
      <p onClick={handleDeleteAccount} id="delete-account">
        Delete Account
      </p>
    </div>
  );
};

export default ProfilePage;
