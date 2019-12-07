import React from "react";

function Note(props) {
  function noteDelete() {
    props.handleDelete(props.index);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={noteDelete} value={props.index}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
