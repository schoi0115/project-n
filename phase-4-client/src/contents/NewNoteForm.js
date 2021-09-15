import '../App.css';
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";


import Moment from 'react-moment';

function NewNoteForm({ user }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  let history = useHistory();
  let { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/patients/notes/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note: newNote,
        user_id: user.id,
        patient_id: id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => setNotes([...notes, data]));
      }
    });
    e.target.reset();
    // history.push(`/patients/${id}`);
  }

  useEffect(() => {
    fetch(`/patients/${id}/notes`)
      .then((res) => res.json())
      .then(setNotes);
  }, []);

  return (
    <div className="lines">
      <h1>Notes</h1>

      <div>
        {notes.map((eachNote) => {
        
          return (
            
            <div>

              <div key={eachNote.id}>Created by Nurse {eachNote.author_name}: {eachNote.note} <Moment format="MMM Do YYYY - HH:mm">{eachNote.created_at}</Moment>
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="notes"
            type="text"
            onChange={(e) => setNewNote(e.target.value)}
          />
          
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}
export default NewNoteForm
;
