import '../App.css';
import React from "react";
import { Link } from "react-router-dom";
import { BiNotepad } from "react-icons/bi";
import { GoTrashcan, GoPlus } from "react-icons/go";



function PatientCard({
  name,
  age,
  weight,
  address,
  difficulty,
  injury,
  mechanism_of_injury,
  id,
  admitted,
  onUpdate
}) {


  function handleRemove(){
    fetch(`/patients/${id}/discharge`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        Accept: 'application/json' 
    },
      body: JSON.stringify({admitted: !admitted})
    })
    .then((r) => r.json())
    .then((removePatient) => onUpdate(removePatient.id))
  }

  return (
    <div className="cardIndv">
      <h1>Name: {name}</h1> 
      <h2>
        Age: {age}
        <br />
        Weight: {weight}lbs
        <br />
        Address: {address}
        <br />
        Chief Complaint: {injury}
        <br />
        Cause of Injury: {mechanism_of_injury}
        <br />
        Assessment Scale: {difficulty}
        <br />
      </h2>
      <Link to={`/patients/${id}/notes/new`} style={{textDecoration: "none"}}>
        {/* <text style={{fontSize: "30px", marginBottom: "100px"}}>+</text> */}
        <GoPlus />
        <BiNotepad size={40}/>
      </Link>
   
      <button onClick={handleRemove} style={{border: "none"}}><text style={{fontSize: "30px", marginBottom: "100px"}}>-</text><GoTrashcan size={40} color="darkred"/></button>
    </div>
  );
}

export default PatientCard;
