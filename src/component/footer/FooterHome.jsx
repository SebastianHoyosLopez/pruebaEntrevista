import React from "react";
import "./footer.css";

const FooterHome = () => {
  return (
    <footer id="footerHome" style={{ color: "yellow", background: "#655E5D" }}>
      <div className="container">
        <div className="row my-4">
          <div className="col">
            <h6>SOBRE NOSOTROS</h6>
          </div>
          <div className="col">
            <h6>CATEGORÍAS DESTACADAS</h6>
          </div>
          <div className="col">
            <h6>SERVICIO AL CLIENTE</h6>
          </div>
          <div className="col">
            <h6>SUSCRÍBASE A NUESTRO NEWSLETTER</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
