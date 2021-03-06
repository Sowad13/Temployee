import React, { Component } from "react";
import Slider from "react-slick";
import sa from "../../images/ph.png";
import sb from "../../images/vd.png";
import sc from "../../images/wdev.png";
import sd from "../../images/wp.png";
import dp from "../../images/dp.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.css";

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    

    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <>
      <div>
        <h2>Featured Catagories of Skills</h2>
        <Slider {...settings}>
          <div>
            <img className="sliderimg" src={sa} alt="" />
          </div>
          <div>
            <img className="sliderimg" src={sb} alt="" />
          </div>
          <div>
            <img className="sliderimg" src={sc} alt="" />
          </div>
          <div>
            <img className="sliderimg" src={sd} alt="" />
          </div>
          <div>
            <img className="sliderimg" src={sa} alt="" />
          </div>
          <div>
            <img className="sliderimg" src={sc} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
