import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



function PatientDetail({user , patient_id}){
    const [note, setNote] = useState("");
    let history = useHistory()

    function handleSubmit(e) {

        e.preventDefault();
        fetch("/patients/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            note,
            user_id: user.id,
            patient_id
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => setNote([...note, data]));
          }
        });
        history.push("/patients")
      }

    return(
        <div className="lines">
      
            <h1>
                Notes
            </h1>
            <form onSubmit={handleSubmit}>
            <input className="note" type="text" onChange={(e) => setNote(e.target.value)} />
                <input type='submit' value ="Submit"/>
            </form>
        

        </div>

    )
}
export default PatientDetail