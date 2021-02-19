import React from "react";

import "./ButtonDownloadRendering.sass";

const ButtonDownloadRendering = ({ canvasRef, prepareDownload }) => {
  return (
    <div className="btn-download-rendering">
      <button
        className="btn"
        onClick={() => {
          var rendering = canvasRef.toDataURL();
          prepareDownload(rendering);
        }}
      >
        <span className="emoji">📷</span>
      </button>
      <span className="text">Schnappschuss</span>
    </div>
  );
};

export default ButtonDownloadRendering;
