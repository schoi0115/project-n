import "../App.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PatientForm({ user, setPatient, patient }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [difficulty, setDifficulty] = useState(0);
  const [injury, setInjury] = useState("");
  const [mechanism_of_injury, setMoi] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (user.difference >= difficulty) {
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
          admitted: true,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json()
          .then((data) => setPatient([...patient, data]));
          history.push("/");
        } else {
          r.json().then((data) => setErrors(data.errors));
        }
      });
    } else {
      window.alert(
        "This patient's difficulty level brings you above your capacity."
      );
    }
  }

  return (
    <div className="ms">
      <h1 style={{textAlign: "center", margin: "35px"}}>
        Nurse {user.first_name} capacity difference: {user.difference}
      </h1>

      {errors.length > 0 && (
        <div style={{ color: "red", textAlign: 'center'}}>
          {errors.map((error) => (
            <p key={error} style={{margin: "5px"}}>{error}</p>
          ))}
        </div>
      )}

      <div className="patientForm" >
        <form onSubmit={handleSubmit} className="formSubmit">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Weight:
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <br />
          <label>
            Home Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <br />
          <label>
            Chief Complaint:
            <input
              type="text"
              value={injury}
              onChange={(e) => setInjury(e.target.value)}
            />
          </label>
          <br />
          <label>
            Cause of Injury:
            <input
              type="text"
              value={mechanism_of_injury}
              onChange={(e) => setMoi(e.target.value)}
            />
          </label>
          <br />
          <label>
            Difficulty:
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>
          <br />
          <br />
          <input className="submitBtn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default PatientForm;
