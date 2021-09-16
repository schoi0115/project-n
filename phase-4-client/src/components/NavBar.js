import '../App.css';
import React from "react";
import { useHistory, NavLink } from "react-router-dom";

function NavBar({ user, onLogOut }) {
  let history = useHistory()
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then(onLogOut);
    history.push('/')
  }

  return (

      <div>
        {user ? (
          <nav className="navBar">
            <NavLink style={{backgroundColor: "white", textDecoration: "none"}} to="/">Home  </NavLink>
             | 
            <NavLink to="/patients/new" style={{backgroundColor: "white", textDecoration: "none"}}>  New Patient</NavLink>
            <button className="logoutbtn" onClick={handleLogoutClick}>Logout</button>
          </nav >
        ) : (
          <nav>
            <NavLink className="signup" to="/signup" >Sign up</NavLink>
          </nav>
        )}
      </div>
      
  );
}

export default NavBar;
