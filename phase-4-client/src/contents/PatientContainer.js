import '../App.css';
import React from "react";
import PatientCard from "./PatientCard";
import { useEffect } from "react"


function PatientContainer({patient, setPatient}) {

 useEffect(() => {
    fetch("/patients")
      .then((res) => res.json())
      .then(setPatient);
  }, []);


  function onUpdate(id){
    const removePatientArray = patient.filter(patient => patient.id !== id)
    setPatient(removePatientArray)
  }

  return (
    <div className="cardContainer">
      {patient.map((patient) => {
        return (
          <div key={patient.id}>
            <PatientCard
              id={patient.id}
              name={patient.name}
              age={patient.age}
              weight={patient.weight}
              address={patient.address}
              difficulty={patient.difficulty}
              injury={patient.injury}
              mechanism_of_injury={patient.mechanism_of_injury}
              admitted={patient.admitted}
              onUpdate={onUpdate}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PatientContainer;
