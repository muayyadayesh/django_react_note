import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import { ReactComponent as AddButton } from "../assets/plus.svg";
import { Link } from "react-router-dom";

const ListPage = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/api/notes/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#8470; Notes app</h2>
        <p className="notes-count"> {data.length} Total </p>
      </div>
      <div className="notes_list">
        {typeof data === "undefined"
          ? ""
          : data.map((note, index) => <ListItem key={index} note={note} />)}
      </div>

      <Link to="/note/new">
        <AddButton className="floating-button" />
      </Link>
    </div>
  );
};

export default ListPage;
