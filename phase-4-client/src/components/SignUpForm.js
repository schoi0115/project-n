import "../App.css";
import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        capacity,
        age,
        first_name: firstName,
        last_name: lastName,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push("/");
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
  }

  return (
    <div className="signup">
      <nav className="signupNav" style={{marginBottom: "50px"}}>
        <NavLink to="/" style={{textDecoration:"none"}}>Log In</NavLink>
      </nav>
      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          {errors.map((error) => (
            <p key={error} style={{margin: "5px"}}>{error}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <label htmlFor="password">Password Confirmation :</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <label htmlFor="firstName">First Name :</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="age"> Age :</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label htmlFor="capacity">Capacity :</label>
        <input
          type="text"
          id="capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
