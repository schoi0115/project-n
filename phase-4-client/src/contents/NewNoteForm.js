import "../App.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { GoTrashcan } from "react-icons/go";

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
        r.json().then((data) => setNotes([data, ...notes]));
      }
    });
    e.target.reset();
  }

  useEffect(() => {
    fetch(`/patients/${id}/notes`)
      .then((res) => res.json())
      .then(setNotes);
  }, []);

  function handleDelete(id) {
    fetch(`/new_notes/${id}`, {
      method: "DELETE",
    });
    const removeNote = notes.filter((note) => note.id !== id);
    setNotes(removeNote);
  }

  return (
    <div>
      <h1 className="notesHeader">Notes </h1>
      <div className="noteCardContainer">
        <form className="noteForm" onSubmit={handleSubmit}>
          <label>
            <textarea
              className="notes"
              type="text"
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Add a New Note"
            />
            <br />
            <input className="notebtn" type="submit" value="Submit" />
          </label>
        </form>
      </div>
      <div className="noteCardContainer">
        {notes.map((eachNote) => {
          return (
            <div key={eachNote.id} className="noteCard">
              <div>
                <h3>Created by Nurse {eachNote.author_name}</h3>
                <p>{eachNote.note} </p>
                <h4>
                  <Moment format="MMM Do YYYY - HH:mm">
                    {eachNote.created_at}
                  </Moment>
                </h4>
                <button style={{border: "none"}} onClick={() => handleDelete(eachNote.id)}>
                  Delete
                <GoTrashcan size={20} color="black" style={{marginTop: "10px"}} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default NewNoteForm;
