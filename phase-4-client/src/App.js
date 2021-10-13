import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUpForm";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import PatientForm from "./contents/PatientForm";
import PatientContainer from "./contents/PatientContainer";
import NewNoteForm from "./contents/NewNoteForm";

function App() {
  const [user, setUser] = useState(false);
  const [errors, setErrors] = useState(false);
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [patient]);

  const getTheData = async () => {
    try {
      const response = await fetch("patients");
      if (!response.ok) throw Error();
      const data = await response.json();
      setPatient(data);
    } catch (err) {
      console.log(err);
    }
  };

  function onLogOut() {
    setPatient([]);
    setUser(false);
  }

  return (
    <div>
      <NavBar user={user} setUser={setUser} onLogOut={onLogOut} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home
              setErrors={setErrors}
              setUser={setUser}
              user={user}
              patient={patient}
              getTheData={getTheData}
              setPatient={setPatient}
            />
          </Route>

          <Route exact path="/patients">
            <PatientContainer setPatient={setPatient} patient={patient} />
          </Route>

          <Route exact path="/patients/new">
            <PatientForm
              setPatient={setPatient}
              patient={patient}
              errors={errors}
              user={user}
            />
          </Route>

          <Route exact path="/patients/:id/notes/new">
            <NewNoteForm user={user} />
          </Route>

          <Route exact path="/signup">
            <SignUp setUser={setUser} />
          </Route>

          <Route exact path="/login">
            <Login setUser={setUser} getTheData={getTheData} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
