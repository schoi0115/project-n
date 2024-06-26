import '../App.css';
import React from "react";
import { Link } from "react-router-dom";
import { BiNotepad } from "react-icons/bi";
import { GoTrashcan, GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";


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
  console.log(id)


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
      <div className="buttonHolder">
      <Link to={`/patients/${id}/notes/new`} style={{textDecoration: "none"}}>
        <GoPlus style={{marginBottom: "9px"}}/>
        <BiNotepad size={40}/>
      </Link>
   
      <button onClick={handleRemove} style={{border: "none"}} >
        <HiMinus style={{marginBottom: "9px"}} color="darkred"/>
        <GoTrashcan size={40} color="darkred" /></button>
      </div>
    </div>
  );
}

export default PatientCard;
