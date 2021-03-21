import React from "react";
// Style imports
import "./ButtonCloseNarrative.sass";

const ButtonCloseNarrative = ({ showNarrative, setShowNarrative }) => {
  return (
    <button
      className={[
        "btn-close-details",
        "emoji",
        showNarrative ? "visible" : "hidden",
      ].join(" ")}
      onClick={() => setShowNarrative(false)}
    >
      <span>👈</span>
    </button>
  );
};

export default ButtonCloseNarrative;
