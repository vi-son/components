import React from "react";
// Local imports
import { kt } from "../kirbytext.js";

const CiteBlock = ({ content }) => {
  return (
    <section className="block cite">
      <a className="link" href={content.link} target="_blank">
        <blockquote className="cite-text" cite={content.link}>
          {content.cite !== undefined ? kt(content.cite) : ""}
        </blockquote>
        <span className="author">
          {content.author !== undefined ? content.author : ""}
        </span>
      </a>
    </section>
  );
};

export default CiteBlock;
