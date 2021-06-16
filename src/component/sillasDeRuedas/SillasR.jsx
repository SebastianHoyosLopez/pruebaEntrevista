import React from "react";
import Sillas from "../NuevaColeccion/Sillas";

import "./sillasR.css";

const SillasR = () => {
  return (
    <>
      <div className="container">
        <img
          style={{ marginTop: "10px", opacity: "0.5" }}
          className="img"
          src="https://imgur.com/MWJYC6x.jpg"
        />
      </div>
      <div>
        <Sillas />
      </div>
    </>
  );
};

export default SillasR;
