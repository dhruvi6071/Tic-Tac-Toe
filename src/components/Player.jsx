import { useState } from "react";

export default function Player({initialName, symbol, isActive }) {
  const[playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    // console.log(event);
    setPlayerName(event.target.value);
  }

  let editableplayername = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableplayername = (<input type="text" required value={newName} onChange={handleChange}/>);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editableplayername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
