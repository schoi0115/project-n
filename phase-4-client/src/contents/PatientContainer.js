import React from "react";
import PatientCard from "./PatientCard";
import PatientDetail from "./PatientDetail";

function PatientContainer({ patient }) {
  return (
    <div>
      {patient.map((patient) => {
        return (
          <div>
           
            <PatientCard
              key={patient.id}
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
