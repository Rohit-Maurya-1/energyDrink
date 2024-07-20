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
          <div className="row no-gutters" style={{ minHeight: "550px" }}>
          <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
  <h3 className="color--white mb-5">Contact</h3>
  <ul className="contact-info__list">
    <li>
      <strong>Name:</strong> John Doe
    </li>
    <li>
      <strong>Email:</strong> john.doe@example.com
    </li>
    <li>
      <strong>Phone No.:</strong> (123) 456-7890
    </li>
    <li>
      <strong>Area:</strong> Downtown
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
  <style jsx>{`
    .contact-info__list {
      list-style-type: none;
      padding: 0;
      color: white;
    }
    .contact-info__list li {
      margin-bottom: 1rem;
    }
    .contact-info__list strong {
      display: inline-block;
      width: 100px;
    }
  `}</style>
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
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-3">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224262.4366929066!2d76.89303519453124!3d28.566742500000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3540d1f48e9%3A0x8698079cd7bcedd0!2sThe%20Groove%20Stage!5e0!3m2!1sen!2sin!4v1721460408105!5m2!1sen!2sin"
    width="100%"
    height="600"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      </div>
    </Layout>
  );
};

export default Contact;
