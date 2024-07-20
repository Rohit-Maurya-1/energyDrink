import React from "react";
import lyches from "../../src/images/themes/Groovy/assets/Group 103.png";
import lychesContent from "../../src/images/themes/Groovy/assets/lychee/Group 158.png";
import mangoContent from "../../src/images/themes/Groovy/assets/Mango/Group 159.png";
import mango from "../../src/images/themes/Groovy/assets/Group 102.png";
import guavaContent from "../../src/images/themes/Groovy/assets/Guava/Group 160.png";
import guava from "../../src/images/themes/Groovy/assets/Group 104.png";
import anarContent from "../../src/images/themes/Groovy/assets/Anar/Group 161.png";
import anar from "../../src/images/themes/Groovy/assets/Group 105.png";
import lemonContent from "../../src/images/themes/Groovy/assets/Lemon/Group 162.png";
import lemon from "../../src/images/themes/Groovy/assets/Group 106.png";
import mixContent from "../../src/images/themes/Groovy/assets/Group 108.png";
import mix from "../../src/images/themes/Groovy/assets/Mix/Group 163.png";
import drink from "../../src/images/themes/Groovy/assets/Group 107.png";
import glass from "../../src/images/themes/Groovy/assets/glass.png";
import star from "../../src/images/themes/Groovy/assets/star.png";
import collage from "../../src/images/themes/Groovy/assets/collage.png";
import POTW from "../../src/images/themes/Groovy/assets/POTW.png";
import icon1 from "../../src/images/themes/Groovy/assets/icon-1.png";
import icon2 from "../../src/images/themes/Groovy/assets/icon-2.png";
import icon3 from "../../src/images/themes/Groovy/assets/icon-3.png";
import Style from "./Style.module.css";

const ProductExplore = () => {
  return (
    <div className="container-fluid mt-5 mb-5">
 <div className="row">
  <div className="col-12 col-md-6">
    <img src={lyches} alt="Lyches" className="img-fluid" />
  </div>
  <div className="col-12 col-md-6">
    <img src={lychesContent} alt="Lyches Content" className="img-fluid" />
    <div className="row mt-4">
      <div className={`col-12 col-md-7 ${Style.p}`}>
        I bring out the little kid in you with vitamins & fiber. I bring
        everything for your health, skin & hair!
      </div>
      <div className="col-12 col-md-4 m-4">
        <div className="row">
          <div className="col-12 col-md-12" style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="btn btn-danger d-flex align-items-center justify-content-center"
              style={{ width: "3rem", height: "3rem", padding: "0", fontSize: "1.5rem", borderRadius: "50%" }} // Adjust size and padding
            >
              <i className="bi bi-play-fill"></i>
            </button>
            <button
              className={`btn btn-danger ${Style.button}`}
              style={{ fontSize: "1.5rem" }} // Match font size
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="row">
  <div className="col-12 col-md-6" style={{ paddingLeft: "23px" }}>
    <img src={mangoContent} alt="Mango Content" className="img-fluid" />
    <div className="row mt-4">
      <div
        className={`col-12 col-md-7 ${Style.p}`}
        style={{ color: "#FF8A00" }}
      >
        In every fruit I fashion, In every sachet of Groovy, I thread King of the fruits I am.
      </div>
      <div className="col-12 col-md-4 m-4">
        <div className="row">
          <div className="col-12 col-md-12" style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="btn btn-danger d-flex align-items-center justify-content-center"
              style={{ width: "3rem", height: "3rem", padding: "0", fontSize: "1.5rem", borderRadius: "50%" ,background:"#FF8A00" }} // Adjust size and padding
            >
              <i className="bi bi-play-fill"></i>
            </button>
            <button
              className={`btn ${Style.button}`}
              style={{ fontSize: "1.5rem",background:"#FF8A00" }} // Match font size
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-6">
    <img src={mango} alt="Mango" className="img-fluid" />
  </div>
</div>

      <div className="row">
        <div className="col-12 col-md-6">
          <img src={guava} alt="Guava" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6">
          <img src={guavaContent} alt="Guava Content" className="img-fluid" />
          <div className="row mt-4">
            <div
              className={`col-12 col-md-7 ${Style.p}`}
              style={{ color: "#48B862" }}
            >
          I’m usually sweet & small, I might not be the biggest or juiciest but I am an immunity booster.
            </div>
            <div className="col-12 col-md-4 m-4">
        <div className="row">
          <div className="col-12 col-md-12" style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="btn btn-danger d-flex align-items-center justify-content-center"
              style={{ width: "3rem", height: "3rem", padding: "0", fontSize: "1.5rem", borderRadius: "50%" ,background:"#48B862" }} // Adjust size and padding
            >
              <i className="bi bi-play-fill"></i>
            </button>
            <button
              className={`btn ${Style.button}`}
              style={{ fontSize: "1.5rem",background:"#48B862" }} // Match font size
            >
              Explore
            </button>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6" style={{ paddingLeft: "20px" }}>
          <img src={anarContent} alt="Anar Content" className="img-fluid" />
          <div className="row mt-4">
            <div className={`col-12 col-md-7 ${Style.p}`}>
            Your doctor on days when you’re weak. One sip of me & your immunity will be on peak!
            </div>
            <div className="col-12 col-md-4 m-4">
        <div className="row">
          <div className="col-12 col-md-12" style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="btn btn-danger d-flex align-items-center justify-content-center"
              style={{ width: "3rem", height: "3rem", padding: "0", fontSize: "1.5rem", borderRadius: "50%" ,background:"red" }} // Adjust size and padding
            >
              <i className="bi bi-play-fill"></i>
            </button>
            <button
              className={`btn ${Style.button}`}
              style={{ fontSize: "1.5rem",background:"red" }} // Match font size
            >
              Explore
            </button>
          </div>
        </div>
      </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={anar} alt="Anar" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={lemon} alt="Guava" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6">
          <img src={lemonContent} alt="lemon Content" className="img-fluid" />
          <div className="row mt-4">
            <div
              className={`col-12 col-md-7 ${Style.p}`}
              style={{ color: "#70C513" }}
            >
            Tangy & sweet. With a dash of mint, your immunity will just be great!
            </div>
            <div className="col-12 col-md-4 m-4">
        <div className="row">
          <div className="col-12 col-md-12" style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="btn btn-danger d-flex align-items-center justify-content-center"
              style={{ width: "3rem", height: "3rem", padding: "0", fontSize: "1.5rem", borderRadius: "50%" ,background:"#70C513" }} // Adjust size and padding
            >
              <i className="bi bi-play-fill"></i>
            </button>
            <button
              className={`btn ${Style.button}`}
              style={{ fontSize: "1.5rem",background:"#70C513" }} // Match font size
            >
              Explore
            </button>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      <div className="row">
  <div className="col-12 col-md-6">
    <img src={mix} alt="mix" className="img-fluid" />
    <div className="row mt-4">
      <div
        className={`col-12 col-md-7 ${Style.p}`}
        style={{ color: "#FF6F00" }} // Content color
      >
        Groovy has combined all powers in this sachet. The power of health, the power in one!
      </div>
      <div className="col-12 col-md-4 m-4">
        <div className="row">
          <div className="col-12 col-md-12" style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="btn btn-danger d-flex align-items-center justify-content-center"
              style={{ width: "3rem", height: "3rem", padding: "0", fontSize: "1.5rem", borderRadius: "50%" ,background:"#FF6F00" }} // Adjust size and padding
            >
              <i className="bi bi-play-fill"></i>
            </button>
            <button
              className={`btn ${Style.button}`}
              style={{ fontSize: "1.5rem",background:"#FF6F00" }} // Match font size
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-6">
    <img src={mixContent} alt="Guava Content" className="img-fluid" />
  </div>
</div>


      {/* ---------------------------- */}
      <div
        className="row "
        style={{
          background: "#ff6900",
          color: "white",
        }}
      >
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          <img src={drink} alt="Guava" className="img-fluid" width="350px" />
        </div>
        <div className="col-12 col-md-2 d-flex align-items-center justify-content-center">
          <div>
            <h1>What’s in the pouch?</h1>
          </div>
        </div>
        <div className="col-12 col-md-5 p-5 d-flex flex-column justify-content-center align-item-center">
          <div className="d-flex align-items-center justify-content-start p-3">
            <div className={`${Style.Icon}`}>
              <img src={icon1} />
            </div>
            <h4 className="mr-4">NO Added Preservatives</h4>
          </div>
          <div className="d-flex align-items-center justify-content-start p-3">
            <div className={`${Style.Icon}`}>
              <img src={icon2} />
            </div>
            <h4>NO Added Colours</h4>
          </div>
          <div className="d-flex align-items-center justify-content-start p-3">
            <div className={`${Style.Icon}`}>
              <img src={icon3} />
            </div>
            <h4>Finest Quality Pulp</h4>
          </div>
        </div>
      </div>

      <div
        className="row"
        style={{
          background: "#FFEADB",
          color: "#FF6F00",
        }}
      >
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-start">
          <div className="star" style={{ marginRight: "23px" }}>
            <img src={star} alt="Guava" className="img-fluid" width="100px" />
          </div>
          <h1 className={`${Style.glassSection}`}> Great With</h1>
        </div>
        <div className="col-12 col-md-2 d-flex align-items-center justify-content-centerb">
          <div>
            <h1 className={`${Style.glassSection}`}>
              martinis, sodas, desserts, yoghurt, and more.
            </h1>
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex flex-column align-items-end justify-content-center">
          <img src={glass} alt="Guava" className="img-fluid" width="500px" />
        </div>
      </div>

      <div
        className="row"
        style={{
          background: "#FFD62D",
          color: "white",
        }}
      >
        <div className="col-12 col-md-7 d-flex align-items-center justify-content-center">
          <img src={collage} alt="Guava" className="img-fluid" width="700px" />
        </div>
        <div className="col-12 col-md-5 d-flex align-items-start justify-content-start">
          <div style={{ padding: "60px" }}>
            <h1 className={`${Style.glassSection}`}>We got featured on</h1>
            <div style={{ marginTop: "50px" }}>
              {" "}
              <img src={POTW} alt="Guava" className="img-fluid" />
            </div>
            <div className="mt-5">
              <button
                className="btn shadow-sm"
                style={{
                  background: "rgba(1, 0, 0, 0.1)",
                  fontWeight:"bold",
                  padding: "10px 20px",
                  margin: "10px",
                  color:"white"
                }}
              >
                Read
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductExplore;
