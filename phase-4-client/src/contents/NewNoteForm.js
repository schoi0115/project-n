import '../App.css';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import Moment from 'react-moment';

function NewNoteForm({ user }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
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
  }

  useEffect(() => {
    fetch(`/patients/${id}/notes`)
      .then((res) => res.json())
      .then(setNotes);
  }, []);

  function handleDelete(id){
    console.log('in delete')
    fetch(`/new_notes/${id}`,{
      method: "DELETE",
    })
    const removeNote = notes.filter(note => note.id !== id)
    setNotes(removeNote)
  }

  return (
    <div className="lines">
      <h1>Notes</h1>
        {notes.map((eachNote) => {
          return (
            <div key={eachNote.id}>
              <div>Created by Nurse {eachNote.author_name}: {eachNote.note} <Moment format="MMM Do YYYY - HH:mm">{eachNote.created_at}</Moment>
              </div>
              <button onClick={() => handleDelete(eachNote.id)}>Delete</button>
            </div>
          );})}
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
