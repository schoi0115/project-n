import React, { useState } from 'react'
import Cookies from 'js-cookie'

function PatientForm({setPatient, user}) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [difficulty, setDifficulty] = useState("")

    function handleSubmit(e) {

      

      e.preventDefault();
      fetch("/patients/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          weight,
          address,
          difficulty,
          user_id: user.id,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((patient) => setPatient(patient));
        }
      });
    }
  
  
    return (
      <div>
         <form onSubmit={handleSubmit}>
          <label>
            name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          <br/>

            <label>
            weight:
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <br/>
            <label>
            age:
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <br/>
            <label>
            address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <br/>
            <label>
            difficulty:
            <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
          </label>
          <br/>

          <input type='submit' value ="Submit"/>
          </form>

      </div>
    );
  }
  
  export default PatientForm;



