import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setisEditing] = useState(false);

  function handleEditClick() {
    setisEditing(true);
  }

  let playername = <span className="player-name">{name}</span>;

  if (isEditing) {
    playername = <input type="text" required />;
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
