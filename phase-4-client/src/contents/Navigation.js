import React from 'react'
import {NavLink} from "react-router-dom";

function Navigation({ patient, setPatient, handlePost }) {
  function handleCreatePatientClick() {
    fetch("/patients/new", { method: "POST" })
      .then(() => setPatient());


  }



    return (
         <div>
        
           <br/>
            <button Link to="notes/new" type="submit">
            Nurse's note
            </button>
    
           <NavLink to="/patients/new" onClick={console.log("hi")}>New Patient</NavLink>
           <h1><NavLink to="/"> <button>Home</button></NavLink></h1>
         </div>
    )
}

export default Navigation;