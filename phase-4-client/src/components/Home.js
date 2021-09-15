import '../App.css';
import React, { useState } from "react";
import PatientContainer from "../contents/PatientContainer";
import { Link } from "react-router-dom";
import Login from "./Login"

function Home({ setErrors, user, setUser, getTheData, patient, setPatient }) {


  let difference = user.capacity - user.total_cap
  // let average = user.total_cap / user.patient.length //and your total pateints today are user.patient.length 

  // console.log(difference)

    if (!user)
       { 
         return (

        <Login setUser={setUser} setErrors={setErrors} getTheData={getTheData}/> 
        
      ) } else {  return (

      <div className="welcome">
        <h1> Welcome, {user.username}!</h1>
        <h1>Here is your capacity: {user.capacity}</h1>

        <h1>Your current total patient's difficulty is {user.total_cap}</h1>

         <PatientContainer  patient={patient} setPatient={setPatient}/> 
      </div>

      )
      
      }

  }

export default Home;
