import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  const signOutHandler = () => {
    if (window.confirm("Are you sure you want to sign out?") === true) {
      fetch(`/logout`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setCurrentUser(false);
          navigate("/login");
        }
      });
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Do you want to delete your account?") === true) {
        if (window.confirm("Are you sure you want to delete your account? This is permanent") === true) {
            fetch("destroy-user", {
                method: 'DELETE'
            })
            navigate("/login");
            window.location.reload(false);
        }
    }
  };

  return (
    <div>
      <h1>Personal Info</h1>
      <div className="info-container">
        <div className="basic-info-container">
          <h2>Basic Info</h2>
          <div className="basic-info-content">
            <div >

                <label>
                <span>First Name</span>
                <input />
                </label>
                <br />
                <br />
                <label>
                <span>Last Name</span>
                <input />
                </label>
                <br />
                <br />
                <label>
                <span>Birthday</span>
                <input />
                </label>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="info-container">
        <div className="basic-info-container">
          <h2>Contact Info</h2>
          <div className="basic-info-content">
            <label>
              <span>Email</span>
              <input />
            </label>
            <br />
            <br />
            <label>
              <span>Password</span>
              <input />
            </label>
            <br /><br />
          </div>
        </div>
      </div>
      <br />
      <button className="update-profile-btn">Update Profile</button>
      <br />
      <br />
      <div  onClick={signOutHandler} className="sign-out-btn">
        <svg viewBox="0 0 24 24">
          <path d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"></path>
        </svg>
        <div className="sign-out-div">Sign Out</div>
      </div>
      <br />
      <p onClick={handleDeleteAccount} id="delete-account">Delete Account</p>
    </div>
  );
};

export default ProfilePage;
