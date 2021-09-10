import React, { useState } from "react";
import Content from "../contents/content"

function Home({ user, setUser }) {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        fetch("login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }



    if (user) {
      return <h1> Welcome, {user.username}! <Content/></h1>;
    } else {

      return (
        <div>
        <form onSubmit={handleSubmit}>
          <h1>Please Log In to start your app</h1>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      )
    }
  }
  
  export default Home;