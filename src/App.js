import React from "react";
import ImgHome from "./component/cardHome/ImgHome";
import FooterHome from "./component/footer/FooterHome";
import NavbarHome from "./component/navbar/NavbarHome";
import Sillas from "./component/NuevaColeccion/Sillas";
import SillasR from "./component/sillasDeRuedas/SillasR";
import CarouselHome from "./component/imagenesCarousel/CarouselHome";

function App() {
  return (
    <div className="App">
      <NavbarHome />
      <>
        <ImgHome />
        <CarouselHome/>
        <Sillas />
        <SillasR />
      </>
      <FooterHome />
    </div>
  );
}

export default App;
