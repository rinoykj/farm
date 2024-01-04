import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Cards from "./cards";
import Urls from "./Urls";

import fristimg from "./1stimg.jpg";
import Secondimg from "./2ndimg.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(Urls.Leaf);
  console.log(Urls.Support);

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="Carousel-img"
            src={fristimg}
            style={{ width: `${windowWidth}px`, height: `${windowHeight}px` }}
            alt="First Slide"
          />
          <Carousel.Caption className="left-caption">
            <h6>PURE AND ORGANIC NATURAL PRODUCTS</h6>
            <h1 className="Carousel-text">
              We Are The Best <br /> Natural <span> Food</span>
            </h1>
            <button className=" Carousel-btn">
              Explore More
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Carousel-img"
            src={Secondimg}
            style={{ width: `${windowWidth}px`, height: `${windowHeight}px` }}
            alt="Second Slide"
          />
          <Carousel.Caption className="left-caption">
            <h6>PURE AND ORGANIC NATURAL PRODUCTS</h6>
            <h1 className="Carousel-text">
              We Are The Best <br /> Natural <span> Food</span>
            </h1>
            <button className=" Carousel-btn">
              Explore More
              <span class="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="card d-flex justify-content-center algin-item-center flex-row text-center ">
        <Cards line1="Organic Product" Icons={Urls.Support} />
        <Cards line1="Certified Team " line2=" Expert" Icons={Urls.Support} />
        <Cards line1="Green Energy" Icons={Urls.Leaf} />
        <Cards line1="24/7 Premium " line2=" Support" Icons={Urls.Leaf} />
      </div>
    </div>
  );
}

export default ControlledCarousel;
