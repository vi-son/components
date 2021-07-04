// node_modules imports
import React, { useState } from "react";
// Local imports
import Audioplayer from "../../audio/AudioPlayer.js";
import { kt } from "../kirbytext.js";

const AudioBlock = ({ content }) => {
  const [foldOut, setFoldout] = useState(false);

  return (
    <section className="block audio">
      <Audioplayer src={content.audiofile[0].url} />
      <article className="text">
        {content.text !== undefined ? kt(content.text) : ""}
      </article>
    </section>
  );
};

export default AudioBlock;
