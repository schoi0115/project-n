import "../App.css";
import React, { useState } from "react";

function Login({ setUser, getTheData }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        getTheData();
      } else {
        window.alert("Your ID/Password is invalid");
      }
    });
  }

  return (
    
    <div className="loginContainer">
      <h1 className="appName">Saint Potato Hospital</h1>

      <svg xmlns="http://www.w3.org/2000/svg"  color= "darkgrey" width="100" height="100" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16" >
      <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
      </svg>  

      <div className="box">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Please Sign In</h3>
          <div style={{ lineHeight: "2em" }}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="password" style={{ marginLeft: "8px" }}>
              Password:{" "}
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
      </div>
    </div>

    
  );
}
export default Login;

