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
