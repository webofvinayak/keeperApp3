import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [getTitle, setTitle] = useState();
  let [getDataArray, setDataArray] = useState([]);

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
        return <Note key={index} title={title} content="Note content" />;
      })}

      <Footer />
    </div>
  );
}

export default App;
