import React from "react";
import image from "../../src/images/uploads/2021/09/anar.png";
import guava from "../../src/images/uploads/2021/09/guava.png";
import lemon from "../../src/images/uploads/2021/09/lemon.png";
import lychee from "../../src/images/uploads/2021/09/lychee.png";
import mango from "../../src/images/uploads/2021/09/mango.png";
import mixFruits from "../../src/images/uploads/2021/09/mix-fruit.png";
import ProductExplore from "./ProductExplore";
import Header from "./Header";

const Product = () => {
  return (
    <div>
      <Header/>
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col">
          <img src={image} height="300" width="300" />
        </div>
        <div className="col">
          <img src={guava} height="300" width="300" />
        </div>
        <div className="col">
          <img src={lemon} height="300" width="300" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <img src={lychee} height="300" width="300" />
        </div>
        <div className="col">
          <img src={mango} height="300" width="300" />
        </div>
        <div className="col">
          <img src={mixFruits} height="300" width="300" />
        </div>
      </div>
    </div>
      <ProductExplore/>
     </div>
  );
};

export default Product;
