import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  let currentTyped = "";
  function handleChange(event) {
    currentTyped = event.target.value;
  }
  function handleClick(event) {
    setName(currentTyped);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
