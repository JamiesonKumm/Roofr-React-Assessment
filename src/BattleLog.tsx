import React from 'react';
import './BattleLog.css';

interface BattleLogProps {
  message?: string;
}

function BattleLog(props: BattleLogProps) {
  return (
    <div className="battle-log-container">
      <b className="battle-log-title">Battle Log</b>
      <div className="battle-log-interface">
        <div className="battle-log-interface__message-window">
          <span>{(props.message) ? props.message : "NO MESSAGE"}</span>
        </div>
        <button 
          className="battle-log-interface__start-button"
        >
          Start Battle!
        </button>
      </div>
    </div>
  );
}

export default BattleLog;