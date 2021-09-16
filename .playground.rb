patients = Patient.all

patients.map |patient| do patient.admitted = true



    console.log(patient)
    
      if (patient.length > 0) { 
        return (
        <div className="cardTable">
          {patient.map((patient) => {
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
              })}
            </div>
              )
            }
       else 
        { return <h1>Please Add Patients</h1>}
  }


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
               onUpdate={onUpdate}
             />
           </div>
        );
      })}
    </div>
   );
 }