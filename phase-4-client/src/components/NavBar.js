import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser, onLogOut }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then(onLogOut);
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {user ? (
          <div>
            <button onClick={handleLogoutClick}>Logout</button>

            <Link to="/patients/new">New Patient</Link>
          </div>
        ) : (
          <div>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
