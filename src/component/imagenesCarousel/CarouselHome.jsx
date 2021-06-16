import React from "react";
import Slider from "react-slick";
import CarouselHome from "./CarouselHome";

const CarouselHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    centerMode: true,
  };

  return (
    <div className="container mt-4">
      <Slider {...settings}>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="http://lorempixel.com/400/200/"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselHome;
