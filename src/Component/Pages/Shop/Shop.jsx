import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../Layout/Layout";
import "./Shop.css";
import anar from "../../../../src/images/uploads/2021/09/anar-300x300.png";
import guava from "../../../../src/images/uploads/2021/09/guava-300x300.png";
import lemon from "../../../../src/images/uploads/2021/09/lemon-300x300.png";
import mix from "../../../../src/images/uploads/2021/09/mix-fruit-300x300.png";
import mango from "../../../../src/images/uploads/2021/09/mango-300x300.png";
import lychee from "../../../../src/images/uploads/2021/09/lychee-300x300.png";
import bannerImage from "../../../../src/images/uploads/2021/09/bg.jpg";

const Shop = () => {
  return (
    <Layout>
      <div class="banner">
        <img src={bannerImage} alt="Groovy Fruit Drink Banner" />
        <div class="banner-text">
          <h2>Shop</h2>
          <nav aria-label="breadcrumb">
            <ol
              class="breadcrumb"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <li class="breadcrumb-item">
                <Link to="/">
                  <span style={{ color: "white", fontSize: "18px" }}>Home</span>
                </Link>
              </li>
              <li class="breadcrumb-item">
                <span style={{ color: "white", fontSize: "20px" }}>/</span>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <span style={{ color: "white", fontSize: "18px" }}>Shop</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12">
            <div className="product-card">
              <img src={anar} alt="Anar" />
              <div className="product-title">Anar</div>
              <div className="product-price">₹50</div>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  className="form-control quantity-input"
                  value="1"
                  min="1"
                />
                <button
                  className="btn btn-success ml-2"
                  style={{ background: "#9bcb51" }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <div className="product-card">
              <img src={guava} alt="Guava" />
              <div className="product-title">Guava</div>
              <div className="product-price">₹50</div>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  className="form-control quantity-input"
                  value="1"
                  min="1"
                />
                 <button
                  className="btn btn-success ml-2"
                  style={{ background: "#9bcb51" }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <div className="product-card">
              <img src={lemon} alt="Mint-O-Lemon" />
              <div className="product-title">Mint-O-Lemon</div>
              <div className="product-price">₹50</div>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  className="form-control quantity-input"
                  value="1"
                  min="1"
                />
                 <button
                  className="btn btn-success ml-2"
                  style={{ background: "#9bcb51" }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-6 col-12">
            <div className="product-card">
              <img src={mix} alt="mix" />
              <div className="product-title">Mix fruit</div>
              <div className="product-price">₹50</div>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  className="form-control quantity-input"
                  value="1"
                  min="1"
                />
                 <button
                  className="btn btn-success ml-2"
                  style={{ background: "#9bcb51" }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <div className="product-card">
              <img src={mango} alt="mango" />
              <div className="product-title">Mango</div>
              <div className="product-price">₹50</div>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  className="form-control quantity-input"
                  value="1"
                  min="1"
                />
                 <button
                  className="btn btn-success ml-2"
                  style={{ background: "#9bcb51" }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <div className="product-card">
              <img src={lychee} alt="Mint-O-Lychee" />
              <div className="product-title">Lychee</div>
              <div className="product-price">₹50</div>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  className="form-control quantity-input"
                  value="1"
                  min="1"
                />
                 <button
                  className="btn btn-success ml-2"
                  style={{ background: "#9bcb51" }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
