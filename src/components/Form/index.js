import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Form({startSearch}) {
  const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState("");

  const dispatch = useDispatch();

  const updateInput = (e) => setNameInput(e.target.value);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(nameInput);
    startSearch(nameInput);
    setNameInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter github username"
          value={nameInput}
          onChange={updateInput}
        />
        <input type="submit" value="search" />
      </form>
    </>
  );
}

export default Form;


