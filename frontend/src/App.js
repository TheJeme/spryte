import React, { useState } from "react";
import "./App.css";

function App() {
  const [imageID, setImageID] = useState(Math.floor(Math.random() * 10000));

  const changeImage = (value) => {
    setImageID(value || Math.floor(Math.random() * 100000));
  };

  return (
    <div className="App">
      <h1>Spryte</h1>
      <p>
        Spryte generates symmetrical avatars from text inputs such as emails, usernames, or IDs.
      </p>
      <hr />
      <input
        placeholder="Type here"
        onChange={(e) => changeImage(e.target.value)}
      />
      <h2>Avatar</h2>
      <img alt="avatar" src={`http://localhost:3003/${imageID}`} />
      <p>http://localhost:7230/{imageID}</p>
    </div>
  );
}

export default App;
