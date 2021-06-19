import React from "react";
import ImgHome from "./component/cardHome/ImgHome";
import FooterHome from "./component/footer/FooterHome";
import NavbarHome from "./component/navbar/NavbarHome";
import Sillas from "./component/NuevaColeccion/Sillas";
import SillasR from "./component/sillasDeRuedas/SillasR";
import CarouselHome from "./component/imagenesCarousel/CarouselHome";
import Galeria from "./component/galeria/Galeria";

function App() {
  return (
    <div className="App">
      <NavbarHome />
      <>
        <ImgHome />
        <CarouselHome />
        <h2 className="text-center mt-5">NUEVA COLECCIÓN</h2>
        <Sillas />
        <Galeria />
        <SillasR />
      </>
      <FooterHome />
    </div>
  );
}

export default App;
