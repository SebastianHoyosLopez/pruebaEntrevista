import { Button, Image } from "react-bootstrap";
import React from "react";
import "./imgHome.css";

const ImgHome = () => {
  return (
    <>
      <Image className="img" src="https://imgur.com/MWJYC6x.jpg" />
      <div className="container">
        <div className="row">
          <div className="col">
            <p className='text=start'>MAS DE 800 FAMILIAS HABILITADAS</p>
          </div>
        </div>
        <div>
          <Button>VER PRODUCTOS</Button>
        </div>
      </div>
    </>
  );
};

export default ImgHome;
