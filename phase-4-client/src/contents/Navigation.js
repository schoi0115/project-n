import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation({ patient, setPatient, handlePost }) {
  function handleCreatePatientClick() {
    fetch("/patients/new", { method: "POST" }).then(() => setPatient());
  }

  return (
    <div>
      <br />

      <h1>
        <NavLink to="/">
          {" "}
          <button>Home</button>
        </NavLink>
      </h1>
    </div>
  );
}

export default Navigation;
