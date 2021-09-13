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
  const [user, setUser] = useState(null);
  const [patient, setPatient] = useState([])
  const [errors, setErrors] = useState(false)


  const [patients, setPatients] = useState([])

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
      console.log(data)
      if(data.errors){
        setErrors(data.errors)
      } else {
        setPatient([...patient,data])
      }
    })
}

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <div>
            <Navigation patinet={patient} setPatient={setPatient} handlePost={handlePost}/>
          <Switch>
            <Route path="/">
              <Home user={user}/>
            </Route>
            <Route exact path="/patients">
              <PatientContainer patient={patient}/>
            </Route>
            <Route exact path="/patients/new">
              <PatientForm 
              handlePost={handlePost} 
              setPatient={setPatient} 
              errors={errors} 
              />
            </Route>
            <Route exact path="/patients/:id">
              <PatientDetail  />
            </Route>
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