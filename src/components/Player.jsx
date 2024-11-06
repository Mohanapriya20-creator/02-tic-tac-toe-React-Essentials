import { useState } from 'react';
export default function Player({ name, symbol, isActive, onChangeName }) {

    const [editing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function getPlayerName(e) {
        setPlayerName(e.target.value);
    }

    function handleClick() {
        setEditing(editing => !editing);
        if(editing)
        onChangeName(symbol, playerName);
        // console.log('Edit button clicked');
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {/* two way binding - value and onChange
                getting the value from the input field and setting it to the playerName state */}
                {editing ? <input type="text" value={playerName} onChange={getPlayerName} /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{editing ? 'Save' : 'Edit'}</button>
        </li>
    )
}