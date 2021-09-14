import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUpForm";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import PatientForm from "./contents/PatientForm";
import PatientContainer from "./contents/PatientContainer"
import PatientDetail from "./contents/PatientDetail"
import Navigation from "./contents/Navigation";

// import NewNote from "./containers/NewNote"

function App() {
  const [user, setUser] = useState(false);
  const [patient, setPatient] = useState([])
  const [errors, setErrors] = useState(false)


  useEffect(() => {
  
    fetch("me").then((r) => {
  
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/patients')
    .then(res => res.json())
    .then(setPatient)
  },[])

  // async function fetchPatients() {
  //   const response = await fetch('/patients');
  //   const returnedPatient = await response.json();
  //   return returnedPatient
  // }
  // fetchPatients().then(returnPatient => {
  //   setPatient[returnPatient]
  //   console.log(returnPatient)
  // })


  function handlePost(e){
    e.preventDefault();
    fetch('/patients',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(
      )
    })
    .then(res => res.json())
    .then(data => {

      if(data.errors){
        setErrors(data.errors)
      } else {
        setPatient([...patient,data])
      }
    })
}
  function onLogOut() {
    setPatient([])
    setUser(false)
  }

  return (
    <div>
      <NavBar user={user} setUser={setUser} onLogOut={onLogOut}/>
      <main>
        {user ? (
          <div>
            <Navigation patient={patient} setPatient={setPatient} handlePost={handlePost}/>
          <Switch>
            <Route exact path="/">
              <Home user={user} patient={patient}/>
            </Route>
            <Route exact path="/patients">
              <PatientContainer patient={patient} />
            </Route>
            <Route exact path="/patients/new">
              <PatientForm 
              handlePost={handlePost} 
              setPatient={setPatient} 
              patient={patient}
              errors={errors} 
              user= {user}
              />
            </Route>
            <Route exact path="/patients/note">
              <PatientDetail user={user} patient={patient} />
            </Route>
            {/* <Route exact path="/patients/:id">
              <PatientDetail  />
            </Route> */}
          </Switch>
          </div>
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