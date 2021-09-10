import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUpForm";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
  
    fetch("me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Home user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home setUser={setUser}/>
            </Route>
          </Switch>
        )}
      </main>
    </div>
  );
}

export default App;