import React from "react";

function CreateArea(props) {
  function handleTitle(event) {
    let title = event.target.value;
    let name = event.target.name;

    if (name === "title") {
      props.setTitle(function(prev) {
        //console.log(prev);
        return {
          appTitle: title,
          appContent: prev.appContent
        };
      });
    } else {
      props.setTitle(function(prev) {
        //console.log(prev);
        return {
          appTitle: prev.appTitle,
          appContent: title
        };
      });
    }
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
        <textarea
          onChange={handleTitle}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
