import React from "react";
import Layout from "../../../Layout/Layout";
import about from "../../../../src/images/themes/Groovy/assets/About/Hey.png";
import aboutLogo from "../../../../src/images/themes/Groovy/assets/About/Group 172.png";
import collage from "../../../../src/images/themes/Groovy/assets/collage.png";
import POTW from "../../../../src/images/themes/Groovy/assets/POTW.svg";
import imgae1 from "../../../../src/images/themes/Groovy/assets/About/dist/1.jpg";
import imgae2 from "../../../../src/images/themes/Groovy/assets/About/dist/2.jpg";
import imgae3 from "../../../../src/images/themes/Groovy/assets/About/dist/3.jpg";
import imgae4 from "../../../../src/images/themes/Groovy/assets/About/dist/4.jpg";
import imgae5 from "../../../../src/images/themes/Groovy/assets/About/dist/a.jpg";
import imgae6 from "../../../../src/images/themes/Groovy/assets/About/dist/b.jpg";
import imgae7 from "../../../../src/images/themes/Groovy/assets/About/dist/c.jpg";
import imgae8 from "../../../../src/images/themes/Groovy/assets/About/dist/d.jpg";
import Style from "../About/About.module.css";

const About = () => {
  return (
    <Layout>
      <div className="about-us" style={{ marginTop: "60px", color: "white" }}>
        <div className="container-fluid abt groovy-about">
          <div
            className={`row ${Style.background1}`}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-md-6 hey">
              <img src={about} className="p-3 img-fluid" alt="img" />
              <p className={`${Style.weHope}`}>
                we hope this letter finds you well. We know you don’t like big
                paragraphs, but there’s something we know you adore. Give us a
                fair chance, okay?
              </p>
            </div>
            <div className="col-md-6"></div>
          </div>

          <div
            className={`row ${Style.background2}`}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <img src={aboutLogo} className="pt-3 img-fluid" alt="" />
              <p className={`${Style.weHope}`}>
                We are nature lovers on a mission to deliver the goodness of
                fruits. We believe in the transformative power of stories — and
                in our drinks, we have weaved the stories of childhood flavours.
              </p>
            </div>
          </div>

          <div
            className={`row ${Style.background3}`}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-md-6 hey">
              <h1 className="mb-5">Our Story</h1>
              <p className={`${Style.weHope}`}>
                The journey of Groovy starts from a dream of 2 brothers to
                create an honest & impactful brand to reflect their
                uncompromising approach to creating the purest juices. Groovy is
                that dream which came true. It unleashes freshness from the very
                first drop. Enriched with rich vitamins, multi-nutrients, and
                quality fruit extracts, Groovy is not just a drink-it's a story
                woven in the form of joyful and bright squeezy packs.
              </p>
            </div>
            <div className="col-md-6"></div>
          </div>

          <div
            className="row"
            style={{
              backgroundColor: "#FFEADB",
              height: "500px",
              display: "flex",
              alignItems: "start",
            }}
          >
            <div className="col-md-12 hey mt-5" style={{ display: "flex", justifyContent: "center" }}>
              <img src="https://www.drinkgroovy.com/wp-content/themes/Groovy/images/About/made.svg" />
            </div>
            <div className="col col-md-12" style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="btn ml-2"
                style={{ background: "#9bcb51", fontSize: "23px", fontWeight: "bold", backgroundColor: "rgb(255, 138, 0)", color: "white" }}
              >
                View Products
              </button>
            </div>
          </div>

          <div className="row" style={{ background: "#FFD62D", color: "white" }}>
            <div className="col-12 col-md-7 d-flex align-items-center justify-content-center">
              <img src={collage} alt="Guava" className="img-fluid" width="700px" />
            </div>
            <div className="col-12 col-md-5 d-flex align-items-start justify-content-start">
              <div style={{ padding: "60px" }}>
                <h1 className={`${Style.glassSection}`}>We got featured on</h1>
                <div style={{ marginTop: "50px" }}> <img src={POTW} alt="Guava" className="img-fluid" /></div>
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <div className="row mt-3">
              <div
                className="col-12 m-3 p-3"
                style={{
                  borderBottom: "4px solid #ddd",
                }}
              >
                <h1 style={{ color: "red", fontSize: "40px" }}>Our Distributors</h1>
              </div>
            </div>
            <div className="row m-3">
              <div className="col-sm">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={imgae1} alt="Card cap" />
                </div>
              </div>
              <div className="col-sm">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={imgae2} alt="Card cap" />
                </div>
              </div>
              <div className="col-sm">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={imgae3} alt="Card cap" />
                </div>
              </div>
              {/* <div className="col-sm">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={imgae4} alt="Card cap" />
                </div>
              </div> */}
            </div>
            <div className="row m-3 mt-4">
              <div className="col-sm">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={imgae5} alt="Card cap" />
                </div>
              </div>
              <div className="col-sm">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={imgae6} alt="Card cap" />
                </div>
              </div>
              <div className="col-sm">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={imgae7} alt="Card cap" />
                </div>
              </div>
              {/* <div className="col-sm">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={imgae8} alt="Card cap" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
