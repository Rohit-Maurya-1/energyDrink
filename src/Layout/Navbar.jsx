import React, { useState } from "react";
import logo from "../../src/images/themes/Groovy/assets/log.png";
import { Link, useLocation } from "react-router-dom";
import Style from "../Layout/Style.module.css";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "#9bcb5e", fontWeight: "bold" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="img-fluid" width="110px" />
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
              {["/", "/about", "/shop", "/media", "/contact"].map((path, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={`nav-link ${Style.items} ${activeLink === path ? "active" : ""}`}
                    aria-current="page"
                    to={path}
                    onClick={() => handleLinkClick(path)}
                  >
                    {path.slice(1).charAt(0).toUpperCase() + path.slice(2) || "Home"}
                  </Link>
                </li>
              ))}
              {["bi-person", "bi-heart", "bi-bag-fill"].map((icon, index) => (
                <li className="nav-item" key={index + 5}>
                  <Link
                    className={`nav-link ${Style.items}`}
                    to=""
                    onClick={() => handleLinkClick("")}
                  >
                    <i className={`bi ${icon}`}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
