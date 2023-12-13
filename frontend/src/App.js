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
        Spryte generates avatars from text inputs such as emails, usernames, or IDs.
      </p>
      <input
        placeholder="Type here"
        onChange={(e) => changeImage(e.target.value)}
      />
      <h2>Avatar</h2>
      <a href={`http://localhost:7231/${imageID}`} target='_blank' rel='noopener noreferrer'>
        <img alt="avatar" src={`http://localhost:7231/${imageID}`} />
      </a>
    </div>
  );
}

export default App;
