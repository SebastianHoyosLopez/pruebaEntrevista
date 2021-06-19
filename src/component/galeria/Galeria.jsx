import React from "react";
import "./Galeria.css";

const Galeria = () => {
  return (
    <div>
      <main>
        <h1>Galeria</h1>
        <div className="container contenedor">
          <div className="row">
            <div className="col-8 p-0">
              <div className="fila">
                <div className="colum-2-4">
                  <img src="https://i.imgur.com/TlEUBHG.jpg" alt="1" />
                </div>
                <div className="colum-2-2">
                  <img src="https://i.imgur.com/CcJqfCm.jpg" alt="2" />
                </div>
              </div>
              <div className="fila">
                <div className="colum-2-2">
                  <img src="https://i.imgur.com/G1Rs3oL.jpg" alt="3" />
                </div>
                <div className="colum-2-4">
                  <img src="https://i.imgur.com/PdEjuMg.jpg" alt="4" />
                </div>
              </div>
            </div>
            <div className="col-4 p-0">
              <img src="https://i.imgur.com/TlEUBHG.jpg" alt="1" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Galeria;
