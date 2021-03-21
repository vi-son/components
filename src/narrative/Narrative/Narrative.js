import React from "react";
// Local imports
import TextBlock from "../blocks/TextBlock.js";
import ImageBlock from "../blocks/ImageBlock.js";
import ImageGridBlock from "../blocks/ImageGridBlock.js";
import AudioBlock from "../blocks/AudioBlock.js";
import ReferencesBlock from "../blocks/ReferencesBlock.js";
import VideoEmedBlock from "../blocks/VideoEmbedBlock.js";
import HyperlinkBlock from "../blocks/HyperlinkBlock.js";
import CiteBlock from "../blocks/CiteBlock.js";
import PodcastBlock from "../blocks/PodcastBlock.js";
// Style imports
import "./Narrative.sass";
import "../Blocks/Blocks.sass";

const Narrative = ({ show, content, version }) => {
  return (
    <div
      className={["layout-narrative", show ? "visible" : "hidden"].join(" ")}
    >
      <div className="header">
        <h1>{content.title}</h1>
        <article>{content.shortdesription}</article>
      </div>
      <div className="content">
        {content.blocks ? (
          content.blocks.map((block) => {
            switch (block._key) {
              case "textblock":
                return <TextBlock key={block._uid} content={block} />;
              case "imageblock":
                return <ImageBlock key={block._uid} content={block} />;
              case "imagegrid":
                return <ImageGridBlock key={block._uid} content={block} />;
              case "audioblock":
                return <AudioBlock key={block._uid} content={block} />;
              case "references":
                return <ReferencesBlock key={block._uid} content={block} />;
              case "videoembed":
                return <VideoEmedBlock key={block._uid} content={block} />;
              case "hyperlinks":
                return <HyperlinkBlock key={block._uid} content={block} />;
              case "citeblock":
                return <CiteBlock key={block._uid} content={block} />;
              case "podcastblock":
                return <PodcastBlock key={block._uid} content={block} />;
              default:
                return <></>;
            }
          })
        ) : (
          <></>
        )}
      </div>

      <footer className="footer">
        <div className="version">
          <span>
            <b>{content.title}</b>
          </span>
          <span>
            <b>Version: </b> {version.tag}
          </span>
          <span>
            <b>Commit: </b> {version.commit}
          </span>
          <span>
            <b>Bugs/Code: </b>
            <a href={version.package.bugs.url} target="_blank">
              {version.package.name}
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Narrative;
