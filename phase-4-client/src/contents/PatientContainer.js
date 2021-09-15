import '../App.css';
import React from "react";
import PatientCard from "./PatientCard";
import NewNoteForm from "./NewNoteForm";
import { useEffect } from "react"


function PatientContainer({patient, setPatient}) {


 useEffect(() => {
    fetch("/patients")
      .then((res) => res.json())
      .then(setPatient);
  }, []);

  return (
    <div className="cardTable">
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
            />
          </div>
        );
      })}
    </div>
  );
}

export default PatientContainer;
