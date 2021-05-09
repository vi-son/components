import React from "react";
// Style imports
import "./ExhibitionLayout.sass";

const ExhibitionLayout = ({
  fixed,
  content,
  showAside,
  aside,
  clickable = false,
}) => {
  return (
    <>
      <main
        className={`fixed-content ${
          showAside ? "with-aside" : "without-aside"
        }`}
      >
        {fixed}
      </main>
      <div
        className={`layout-exhibition ${
          showAside ? "with-aside" : "without-aside"
        }`}
      >
        <main className={`main-content ${clickable && "clickable"}`}>
          {content}
        </main>
        <aside className="side-panel">{aside}</aside>
      </div>
    </>
  );
};

export default ExhibitionLayout;
