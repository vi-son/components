import React from "react";
import md5 from "blueimp-md5";

import "./ButtonDownloadRendering.sass";

const ButtonDownloadRendering = ({ canvasRef, onRequest, onDownload }) => {
  const prepareDownloadRendering = (imageData) => {
    const downloadLink = document.createElement("a");
    const dataStr = imageData;
    downloadLink.href = dataStr;
    downloadLink.download = `${md5(Date.now())}.png`;
    document.body.append(downloadLink);
    downloadLink.click();
    onDownload();
  };

  return (
    <div className="btn-download-rendering">
      <button
        className="btn"
        onClick={() => {
          const rendering = canvasRef.toDataURL();
          onRequest();
          prepareDownloadRendering(rendering);
        }}
      >
        <span className="emoji">📷</span>
      </button>
      <span className="text">Schnappschuss</span>
    </div>
  );
};

export { ButtonDownloadRendering };
