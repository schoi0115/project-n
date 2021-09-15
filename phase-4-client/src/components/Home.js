import '../App.css';
import React from "react";
import PatientContainer from "../contents/PatientContainer";
import Login from "./Login"

function Home({ setErrors, user, setUser, getTheData, patient, setPatient }) {

    if (!user)
       { 
         return (
        <Login setUser={setUser} setErrors={setErrors} getTheData={getTheData}/> 
        
      ) } else {  return (

      <div className="welcome">
        <h1> Welcome, {user.username}!</h1>
        <h1>Here is your capacity: {user.capacity}</h1>
        <h1>Your current total patient's difficulty is {user.total_cap}</h1>

         {patient.length > 0 ? <PatientContainer  patient={patient} setPatient={setPatient}/> : <h1>Please Add Patients</h1>}
      </div>
      )
    }
  }

export default Home;
