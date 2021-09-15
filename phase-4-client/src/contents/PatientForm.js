import "../App.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PatientContainer from "./PatientContainer";


function PatientForm({ user, setPatient, patient }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [difficulty, setDifficulty] = useState(0);
  const [injury, setInjury] = useState("");
  const [mechanism_of_injury, setMoi] = useState("");
  let history = useHistory();
  // console.log(user.difference)
  // console.log("here is out difference")
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
        console.log(r);
        if (r.ok) {
          r.json().then((data) => setPatient([...patient, data]));
          // setUser({...user, difficulty = data.difficulty})
        }
      });
      history.push("/");
    } else {
      window.alert(
        "This patient's difficulty level brings you above your capacity."
      );
    }
  }

  return (
    <div>
      <h1>Here is your {user.difference} capacity left</h1>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />

        <label>
          weight:
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          difficulty:
          <input
            type="number"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          />
        </label>
        <br />
        <label>
          injury:
          <input
            type="text"
            value={injury}
            onChange={(e) => setInjury(e.target.value)}
          />
        </label>
        <br />
        <label>
          mechanism_of_injury:
          <input
            type="text"
            value={mechanism_of_injury}
            onChange={(e) => setMoi(e.target.value)}
          />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default PatientForm;
