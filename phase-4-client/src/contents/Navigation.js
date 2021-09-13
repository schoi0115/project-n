import React from 'react'
import {Link} from "react-router-dom";

function Navigation({ patient, setPatient, handlePost }) {
  function handleCreatePatientClick() {
    fetch("patients/new", { method: "POST" })
      .then(() => setPatient());


  }
 

    return (
         <div>
        
           <br/>
            <button Link to="notes/new" type="submit">
            Nurse's note
            </button>
    
           <Link to="/patients/new"><button>New Patient</button></Link>
           <h1><Link to="/"> <button>Home</button></Link></h1>
         </div>
    )
}

export default Navigation;