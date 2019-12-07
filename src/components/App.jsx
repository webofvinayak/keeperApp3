import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [getTitle, setTitle] = useState({
    appTitle: "",
    appContent: ""
  });
  let [getDataArray, setDataArray] = useState([]);

  function handleDelete(id) {
    let indexHere = id;
    setDataArray(function(prev) {
      console.log();
      return prev.filter(function(item, index) {
        return index !== indexHere;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        setTitle={setTitle}
        getTitle={getTitle}
        setDataArray={setDataArray}
        getDataArray={getDataArray}
      />
      {getDataArray.map(function(title, index) {
        return (
          <Note
            handleDelete={handleDelete}
            key={index}
            index={index}
            title={title.appTitle}
            content={title.appContent}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
