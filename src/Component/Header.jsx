import React from 'react';
import images from "../../src/images/themes/Groovy/assets/Group 168.png";
import mango from "../../src/images/themes/Groovy/assets/Group 167.png";
import groovy from "../../src/images/themes/Groovy/assets/Group 164.png";

const Header = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-interval="3000" >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={images} className="d-block w-100" alt="slide-1"/>
        </div>
        <div className="carousel-item">
          <img src={mango} className="d-block w-100" alt="slide-2" />
        </div>
        <div className="carousel-item">
          <img src={groovy} className="d-block w-100" alt="slide-3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <button className="carousel-control-middle" type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0">
        <span className="visually">View Products</span>
      </button>
      <style jsx>{`
        .carousel-item img {
          object-fit: cover;
          height: 750px;
          width: 100%;
        }
        .carousel-control-middle {
          position: absolute;
          top: 60%;
          left: 40%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.3);
          border: none;
          padding: 10px 20px;
          color: white;
          cursor: pointer;
          z-index: 5;
        }
      `}</style>
    </div>
  );
}

export default Header;
