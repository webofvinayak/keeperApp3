import React from "react";

function CreateArea(props) {
  function handleTitle(event) {
    let title = event.target.value;

    props.setTitle(title);
    // console.log(props.getTitle);
  }

  function postNote(event) {
    event.preventDefault();
    //console.log("clicked");
    props.setDataArray(function(prevData) {
      // console.log(prevData);
      return [...prevData, props.getTitle];
    });

    console.log(props.getDataArray);
  }
  return (
    <div>
      <form onSubmit={postNote}>
        <input onChange={handleTitle} name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
