import React from "react";
// Style imports
import "./ButtonToExhibition.sass";

const ButtonToExhibition = ({ onClick, withText, light }) => {
  const WrappedLink = ({ children, className }) => {
    return onClick ? (
      <div onClick={onClick} className={className}>
        {children}
      </div>
    ) : (
      <a href="https://exhibition.mixing-senses.art" className={className}>
        {children}
      </a>
    );
  };

  return (
    <WrappedLink
      className={[
        "btn-to-exhibition",
        withText ? "" : "hidden-text",
        light ? "light" : "",
      ].join(" ")}
      onClick={onClick}
    >
      <span className="emoji">🏛️</span>
      <span className="text">Zum Foyer</span>
    </WrappedLink>
  );
};

export default ButtonToExhibition;
