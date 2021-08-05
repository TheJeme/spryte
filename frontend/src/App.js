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
        Spryte is easy to use app that generates symmetric avatars. Provide any
        kind of text, such as email, username, id, or whatever you like and get
        back a nice avatar.
      </p>
      <hr />
      <input
        placeholder="Type here"
        onChange={(e) => changeImage(e.target.value)}
      />
      <h2>Avatar</h2>
      <img alt="avatar" src={`http://localhost:3003/${imageID}`} />
      <p>http://localhost:3003/{imageID}</p>
    </div>
  );
}

export default App;
