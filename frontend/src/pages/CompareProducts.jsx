import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import ColorElement from "../components/ColorElement";
import Meta from "../components/Meta";

const CompareProducts = () => {
  return (
    <>
      <Meta title="Compare Products" />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-products-details">
                  <h5 className="title">
                    Samsung Galaxy Watch S8 Ultra 37.08 cm (14.6 inch) sAMOLED
                    Display, RAM 12 GB, ROM 256 GB
                  </h5>
                  <h6 className="price my-3">₹49,990</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand</h5>
                      <p>Samsung</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type</h5>
                      <p>Smart Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color</h5>
                      <ColorElement />
                    </div>
                    <div className="product-detail">
                      <h5>Size</h5>
                      <p>S M L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-products-details">
                  <h5 className="title">
                    Samsung Galaxy Watch S8 Ultra 37.08 cm (14.6 inch) sAMOLED
                    Display, RAM 12 GB, ROM 256 GB
                  </h5>
                  <h6 className="price my-3">₹49,990</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand</h5>
                      <p>Samsung</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type</h5>
                      <p>Smart Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color</h5>
                      <ColorElement />
                    </div>
                    <div className="product-detail">
                      <h5>Size</h5>
                      <p>S M L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-products-details">
                  <h5 className="title">
                    Samsung Galaxy Watch S8 Ultra 37.08 cm (14.6 inch) sAMOLED
                    Display, RAM 12 GB, ROM 256 GB
                  </h5>
                  <h6 className="price my-3">₹49,990</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand</h5>
                      <p>Samsung</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type</h5>
                      <p>Smart Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color</h5>
                      <ColorElement />
                    </div>
                    <div className="product-detail">
                      <h5>Size</h5>
                      <p>S M L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProducts;
