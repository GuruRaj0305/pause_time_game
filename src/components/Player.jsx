import { useState, useRef } from "react"

export default function Player() {
const playerName = useRef();
const [enteredPlayer, setEnteredName] = useState(null);

function handleOnClick() {
  setEnteredName(playerName.current.value)
}

  
  return (
    <section id="player">
      <h2>Welcome {enteredPlayer}</h2>
      <p>
        <input ref = {playerName} type="text"/>
        <button onClick = {handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
