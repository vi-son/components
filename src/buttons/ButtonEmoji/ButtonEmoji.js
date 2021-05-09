import React from "react";
// Style imports
import "./ButtonEmoji.sass";

const ButtonEmoji = ({ className = "", emoji, text, onClick, withText }) => {
  return (
    <div className={`btn-emoji ${className}`}>
      <button className="btn" onClick={onClick}>
        <span className="emoji">{emoji}</span>
      </button>
      {withText && <span className="text">{text}</span>}
    </div>
  );
};

export default ButtonEmoji;
