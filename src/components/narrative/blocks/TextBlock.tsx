import React, { useState } from "react";
// Local imports
import { kt } from "../kirbytext.js";

const TextBlock = ({ content }) => {
  return (
    <section className="block text">
      {content.headline !== undefined ? (
        <h2 className="heading">{content.headline}</h2>
      ) : (
        <></>
      )}
      <div className="foldout">
        {content.preheadline !== undefined ? (
          <h4 className="preheading">{content.preheadline}</h4>
        ) : (
          <></>
        )}
        {content.text !== undefined ? (
          <article className="text">{kt(content.text)}</article>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default TextBlock;
