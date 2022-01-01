import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/chevron-left.svg";

const NotePage = () => {
  const { id } = useParams();
  let history = useNavigate();

  const [note, setNote] = useState(null);

  useEffect(() => {
    if (id === "new") return;
    getNote();
  }, []);

  const getNote = async () => {
    const response = await fetch(`/api/note/${id}/`);
    const data = await response.json();
    setNote(data);
  };

  const updateNote = async () => {
    await fetch(`/api/note/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    history("/");
  };

  const deleteNote = async () => {
    await fetch(`/api/note/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history("/");
  };

  const addNewNote = async () => {
    await fetch(`/api/note/new/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    history("/");
  };

  const handleBack = () => {
    id === "Note" ? updateNote() : history("/");
  };
  return (
    <div className="note">
      <div className="d-flex">
        <div className="note-header">
          <h3>
            <LeftArrow onClick={handleBack} />
          </h3>
        </div>
        {id !== "new" ? (
          <div className="ml-auto">
            <button className="btn btn-sm btn-danger m-2" onClick={deleteNote}>
              Delete
            </button>
          </div>
        ) : (
          <div className="ml-auto">
            <button className="btn btn-sm btn-primary m-2" onClick={addNewNote}>
              Done
            </button>
          </div>
        )}
      </div>
      <textarea
        onChange={(e) => {
          setNote((note) => ({ ...note, note_body: e.target.value }));
        }}
        defaultValue={note?.note_body}
      ></textarea>
    </div>
  );
};

export default NotePage;
