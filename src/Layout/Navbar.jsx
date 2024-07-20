import React from "react";
import logo from "../../src/images/themes/Groovy/assets/log.png";
import { Link } from "react-router-dom";
import Style from "../Layout/Style.module.css";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "#9bcb5e", fontWeight: "bold"}}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="img-fluid" width="110px"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav ms-auto"
              style={{
                width: "500px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <li className="nav-item">
                <Link
                  className={`nav-link ${Style?.items}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item ${Style?.items}`}>
                <Link className={`nav-link ${Style?.items}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${Style?.items}`} to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${Style?.items}`} to="/media">
                  Media
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${Style?.items}`} to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${Style?.items}`} to="">
                <i class="bi bi-person"></i>
                </Link>
              </li>
           
              <li className="nav-item">
                <Link className={`nav-link ${Style?.items}`} to="">
                     <i class="bi bi-heart"></i>
                </Link>
           
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${Style?.items}`} to="">
                      <i class="bi bi-bag-fill"></i>
                </Link>
           
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
