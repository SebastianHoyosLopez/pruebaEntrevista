import React from "react";
import Sillas from "../NuevaColeccion/Sillas";
import "./sillasR.css";

const SillasR = () => {
  return (
    <>
      <div className="container">
        <img
          style={{  opacity: "0.5"}}
          className="imgpaisaje"
          src="https://imgur.com/MWJYC6x.jpg"
        />
      </div>
      <div className="nuevaColeccion text-center">
        <h3>SILLAS DE RUEDAS</h3>
        <Sillas />
      </div>
    </>
  );
};

export default SillasR;
