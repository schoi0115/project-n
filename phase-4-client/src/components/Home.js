import '../App.css';
import React, { useState } from "react";
import PatientContainer from "../contents/PatientContainer";
import { Link } from "react-router-dom";
import Login from "./Login"

function Home({ setErrors, user, setUser, getTheData, patient, setPatient }) {



// console.log(patient)
// console.log(user)

    if (!user)
       { 
         return (

        <Login setUser={setUser} setErrors={setErrors} getTheData={getTheData}/> 
        
      ) } else {  return (

      <div className="welcome">
        <h1> Welcome, {user.username}!</h1>
         <PatientContainer  patient={patient} setPatient={setPatient}/> 
      </div>

      )
      
      }

  }

export default Home;
