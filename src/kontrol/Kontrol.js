import React, { useState } from "react";
// Style imports
import "./Kontrol.sass";

const Kontrol = ({ config }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="kontrol-toggle" onClick={() => setOpen(!open)}>
        <span className="emoji">⚙️</span>
      </button>
      <div className={["kontrol", open ? "open" : "closed"].join(" ")}>
        {Object.keys(config)
          .filter((key) =>
            config[key].hasOwnProperty("hidden") ? !config[key].hidden : true
          )
          .map((key) => {
            const p = config[key];
            switch (p.type) {
              case "range": {
                return (
                  <div className="row" key={key}>
                    <label>{p.label}</label>
                  </div>
                );
                break;
              }

              case "button": {
                return (
                  <button className="kontrol-btn" onClick={p.action}>
                    <span className="emoji">{p.icon}</span>
                    {p.label}
                  </button>
                );
                break;
              }
              case "file": {
                return (
                  <div className="kontrol-fileupload">
                    <label htmlFor="upload" className="btn btn-file">
                      <span className="emoji">{p.icon}</span>
                      {p.label}
                    </label>
                    <input
                      id="upload"
                      type="file"
                      onChange={p.action}
                      style={{ display: "none" }}
                    />
                  </div>
                );
              }
              default:
                return <></>;
                break;
            }
          })}
      </div>
    </>
  );
};

export default Kontrol;
