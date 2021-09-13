import React, { useState } from 'react'

function PatientForm({setPatient}) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      fetch("patients/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          weight,
          address
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((patient) => setPatient(patient));
        }
      });
    }
  
  
    return (
      <div>

      </div>
    );
  }
  
  export default PatientForm;



  // <form onSubmit={handleSubmit}>
  // <label>
  //    name:
  //    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  //  </label>
  //  <br/>
  //  <label>
  //  age:
  //    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
  //  </label>
  //  <br/>
  //  <label>
  //  gender:
  //    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
  //  </label>
  //  <br/>
  //  <label>
  //  address:
  //  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
  //  </label>
  // </form>