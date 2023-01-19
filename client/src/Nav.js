import React from "react";
import { NavLink } from "react-router-dom";
/*^^ For later, how do I get navlink to look better? */
import HomeBtn from "./assets/home.png";
import SearchBtn from "./assets/search.png";
import ShareBtn from "./assets/share.png";

const Nav = ({ currentUser }) => {
  return (
    <nav>
      <div className="nav-bar-container">
        <NavLink to={"/home"}>
          <img className="nav-image" src={HomeBtn} />
        </NavLink>
        <NavLink to={"/personal-info"}>
          <svg
            className="nav-image"
            viewBox="0 0 50 57.46"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m37.74,12.74c0,6.99-5.75,12.74-12.74,12.74s-12.74-5.75-12.74-12.74S18.01,0,25,0s12.74,5.75,12.74,12.74h0Zm12.26,42.04c-.77-9.58-4.41-18-9.86-23.46-1.34-1.34-3.06-2.01-4.98-2.01H14.85c-1.82,0-3.64.77-4.98,2.01C4.41,36.77.68,45.2,0,54.78c-.1,1.44,1.05,2.68,2.49,2.68h45.01c1.44,0,2.59-1.25,2.49-2.68h0Z" />
          </svg>
        </NavLink>
        <NavLink to={"/search-prescriptions"}>
          <img className="nav-image" src={SearchBtn} />
        </NavLink>
        <div className="navlink-button">
          <img className="nav-image" src={ShareBtn} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
