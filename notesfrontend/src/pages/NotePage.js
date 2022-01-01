import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/chevron-left.svg";
const NotePage = () => {
  const { id } = useParams();
  let history = useNavigate();

  const [note, setNote] = useState(null);

  useEffect(() => {
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

  const handleBack = () => {
    updateNote();
    history("/");
  };
  return (
    <div className="note">
      <div class="d-flex">
        <div class="">
          <div className="note-header">
            <h3>
              <LeftArrow onClick={handleBack} />
            </h3>
          </div>
        </div>
        <div class="ml-auto">
          <button className="btn btn-sm btn-danger m-2" onClick={deleteNote}>
            Delete
          </button>
        </div>
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
