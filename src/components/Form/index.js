import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './style.css'

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
        <div className="input">
        <input className="input" id="inp"
          type="text"
          placeholder="Enter github username"
          value={nameInput}
          onChange={updateInput}
        />
        <input id = "btn" type="submit" value="search" />
        </div>
      </form>
    </>
  );
}

export default Form;


