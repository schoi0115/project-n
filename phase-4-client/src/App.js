import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import SignUp from "./components/SignUpForm";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import PatientForm from "./contents/PatientForm";
import PatientContainer from "./contents/PatientContainer";
import NewNoteForm from "./contents/NewNoteForm";
// import Navigation from "./contents/Navigation";

// import NewNote from "./containers/NewNote"

function App() {
  const [user, setUser] = useState(false);
  const [errors, setErrors] = useState(false);
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {

      if (r.ok) {
        r.json().then((user) => setUser(user));
        console.log("do we have a user")
        console.log(user)
      }
    });
  }, [patient]);

  // console.log(user);

  // useEffect(() => {
  //   fetch("/patients")
  //     .then((res) => res.json())
  //     .then(setPatient);
  // }, []);

  const getTheData = async () => {
    try {
    const response = await fetch("patients");
    if (!response.ok) throw Error();
    
    const data = await response.json();
    setPatient(data);
    console.log(data);
  } catch (err) {
    console.log(err)
  }
  };

  // console.log(patient);

  // async function fetchPatients() {
  //   const response = await fetch('/patients');
  //   const returnedPatient = await response.json();
  //   return returnedPatient
  // }
  // fetchPatients().then(returnPatient => {
  //   setPatient[returnPatient]
  //   console.log(returnPatient)
  // })


  
  function onLogOut() {
    setPatient([]);
    setUser(false);
  }

  ///////////////////////////
  // if (!user) return <Login setUser={setUser} setErrors={setErrors} getTheData={getTheData}/>
 
  ////////////////

  return (
    <div>
      <NavBar user={user} setUser={setUser} onLogOut={onLogOut} />
      <main>

            <Switch>
              <Route exact path="/">
                <Home setErrors = {setErrors} setUser={setUser} user={user} patient={patient} getTheData={getTheData} setPatient={setPatient}/>
              </Route>

              <Route exact path="/patients">
                <PatientContainer setPatient={setPatient} patient={patient}/>
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

              <Route exact path="/">
                <Home setUser={setUser} getTheData={getTheData} />
              </Route>

          </Switch>

      </main>
    </div>
  );
}

export default App;
