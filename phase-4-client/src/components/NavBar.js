import '../App.css';
import React from "react";
import { Link, useHistory } from "react-router-dom";

function NavBar({ user, onLogOut }) {
  let history = useHistory()
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then(onLogOut);
    history.push('/')
  }

  return (
    <header>
      <div>
        {user ? (
          <div >
            <Link className="navBar1" to="/">Home</Link>
            <button onClick={handleLogoutClick}>Logout</button>
            <Link className="navBar2" to="/patients/new">New Patient</Link>
          </div>
        ) : (
          <div>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
