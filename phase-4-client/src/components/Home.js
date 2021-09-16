import "../App.css";
import React from "react";
import PatientContainer from "../contents/PatientContainer";
import Login from "./Login";

function Home({ setErrors, user, setUser, getTheData, patient, setPatient }) {
  if (!user) {
    return (
      <Login setUser={setUser} setErrors={setErrors} getTheData={getTheData} />
    );
  } else {
    return (
      <div className="welcome">
        <h1> Welcome Nurse {user.first_name}!</h1>
        <h2>Your total assessment capacity: {user.capacity}</h2>
        <h2 style={{ marginBottom: "100px" }}>
          Your current total patient's assessment difficulty is {user.total_cap}
        </h2>
        <PatientContainer patient={patient} setPatient={setPatient} /> 
      </div>
    );
  }
}

export default Home;
