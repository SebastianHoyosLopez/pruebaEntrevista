import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselHome.css";

const CarouselHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 4,
    arrows: false,
    centerMode: true,
  };

  return (
    <div className="mt-4">
      <Slider {...settings}>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/r3Snuy0.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/x0R7oVQ.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/r3Snuy0.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/jVXTaUD.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/gU5Atzg.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/r3Snuy0.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/jVXTaUD.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/gU5Atzg.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/jVXTaUD.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/gU5Atzg.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/r3Snuy0.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
        <div className="img-container">
          <img
            title="Lorem ipusm"
            className="img-fluid"
            src="https://imgur.com/gU5Atzg.jpg"
          />
          <div className="text-center">Lorem ipsum</div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselHome;
