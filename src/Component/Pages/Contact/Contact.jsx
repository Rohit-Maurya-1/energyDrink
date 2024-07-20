import React from "react";
import Layout from "../../../Layout/Layout";
import "./contact.css";

const Contact = () => {
  return (
    <Layout>
      <div className="container" style={{ marginTop: "300px" }}>
        <div
          className="contact__wrapper shadow-lg mt-n9"
          style={{ minHeight: "550px" }}
        >
          <div className="row no-gutters" style={{ minHeight:"550px"}}>
            <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
              <h3 className="color--white mb-5">Contact</h3>
              <ul className="contact-info__list list-style--none position-relative z-index-101">
                <li className="mb-4 pl-4">
                  <span className="position-absolute">
                    <i className="fas fa-envelope"></i>
                  </span>{" "}
                 </li>
                <li className="mb-4 pl-4">
                  <span className="position-absolute">
                    <i className="fas fa-phone"></i>
                  </span>{" "}
                 
                </li>
                <li className="mb-4 pl-4">
                  <span className="position-absolute">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>{" "}
                    <div className="mt-3">
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      className="text-link link--right-icon text-white"
                      rel="noopener noreferrer"
                    >
                      Itinéraire <i className="link__icon fa fa-directions"></i>
                    </a>
                  </div>
                </li>
              </ul>

              <figure
                className="figure position-absolute m-0 opacity-06 z-index-100"
                style={{ bottom: "0", right: "10px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="444px"
                  height="626px"
                >
                  <defs>
                    <linearGradient
                      id="PSgrad_1"
                      x1="0%"
                      x2="81.915%"
                      y1="57.358%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgb(255,255,255)"
                        stopOpacity="1"
                      ></stop>
                      <stop
                        offset="100%"
                        stopColor="rgb(0,54,207)"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fillRule="evenodd"
                    opacity="0.302"
                    fill="rgb(72, 155, 248)"
                    d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"
                  ></path>
                  <path
                    fill="url(#PSgrad_1)"
                    d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"
                  ></path>
                </svg>
              </figure>
            </div>

            <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
              <form
                action="#"
                className="contact-form form-validate"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <div className="form-group">
                      <label className="required-field" htmlFor="firstName">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 mb-3">
                    <div className="form-group">
                      <label className="required-field" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 mb-3">
                    <div className="form-group">
                      <label className="required-field" htmlFor="phone">
                        Phone No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone No"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="form-group">
                      <label className="required-field" htmlFor="Customer">
                        Customer
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Customer"
                        name="Customer"
                        placeholder="Distibuter or Custmoner"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 mb-3">
                    <div className="form-group">
                      <label className="required-field" htmlFor="Area">
                        Area
                      </label>
                      <textarea
                        className="form-control"
                        id="Area"
                        name="Area"
                        rows="4"
                        placeholder="Enter your Area"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-sm-12 mb-3">
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-success"
                    >
                      SHOW US SOME LOVE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
