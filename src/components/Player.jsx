import { useState } from "react";

export default function Player({initialName, symbol }) {
  const[newName, setnewName] = useState(initialName);
  const [isEditing, setisEditing] = useState(false);

  function handleEditClick() {
    setisEditing((editing) => !editing);
  }

  function handleNameChange(event) {
    console.log(event);
    setnewName(event.target.value);
  }

  let playername = <span className="player-name">{newName}</span>;

  if (isEditing) {
    playername = <input type="text" required value={newName} onChange={handleNameChange}/>;
  }

  return (
    <li>
      <span className="player">
        {playername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'save' : 'edit'}</button>
    </li>
  );
}
