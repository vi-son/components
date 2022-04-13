import React, { useState } from "react";
// Style imports
import "./Kontrol.sass";

const Kontrol = ({ config, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="kontrol-toggle" onClick={() => setOpen(!open)}>
        <span className="emoji">⚙️</span>
      </button>
      <div className={["kontrol", open ? "open" : "closed"].join(" ")}>
        {Object.keys(config)
          .filter((key) =>
            config[key].hasOwnProperty("hidden") ? !config[key].hidden : true
          )
          .map((key, i) => {
            const p = config[key];
            switch (p.type) {
              case "range": {
                return (
                  <div className="row" key={`${key}.${i}`}>
                    <label>{p.label}</label>
                  </div>
                );
                break;
              }

              case "button": {
                return (
                  <button
                    className="kontrol-btn"
                    onClick={p.action}
                    key={`${key}.${i}`}
                  >
                    <span className="emoji">{p.icon}</span>
                    {p.label}
                  </button>
                );
                break;
              }

              case "file": {
                return (
                  <div className="kontrol-fileupload" key={`${key}.${i}`}>
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

              case "divider":
                return (
                  <div className="kontrol-divider" key={`${key}.${i}`}></div>
                );

              default:
                return <></>;
                break;
            }
          })}
        {children}
      </div>
    </div>
  );
};

export default Kontrol;
