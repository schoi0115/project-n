import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function PatientForm({setPatient, user, patient}) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [difficulty, setDifficulty] = useState(0)
  const [injury, setInjury] = useState("")
  const [mechanism_of_injury, setMoi] = useState("")
  let history = useHistory()
 


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
          injury,
          mechanism_of_injury,
          user_id: user.id,
          admitted: true
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => setPatient([...patient, data]));
        }
      });
      history.push("/")
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
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
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
            <input type="number" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
          </label>
          <br/>
          <label>
            injury:
            <input type="text" value={injury} onChange={(e) => setInjury(e.target.value)} />
          </label>
          <br/>
          <label>
            mechanism_of_injury:
            <input type="text" value={mechanism_of_injury} onChange={(e) => setMoi(e.target.value)} />
          </label>
          <br/>
          

          <input type='submit' value ="Submit"/>
          </form>

      </div>
    );
  }
  
  export default PatientForm;



