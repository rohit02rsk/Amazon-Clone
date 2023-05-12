import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <h5 className="title">
                  Samsung Galaxy Watch S8 Ultra 37.08 cm (14.6 inch) sAMOLED
                  Display, RAM 12 GB, ROM 256 GB
                </h5>
                <h6 className="price">₹49,990</h6>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <h5 className="title">
                  Samsung Galaxy Watch S8 Ultra 37.08 cm (14.6 inch) sAMOLED
                  Display, RAM 12 GB, ROM 256 GB
                </h5>
                <h6 className="price">₹49,990</h6>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <h5 className="title">
                  Samsung Galaxy Watch S8 Ultra 37.08 cm (14.6 inch) sAMOLED
                  Display, RAM 12 GB, ROM 256 GB
                </h5>
                <h6 className="price">₹49,990</h6>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <h5 className="title">
                  Samsung Galaxy Watch S8 Ultra 37.08 cm (14.6 inch) sAMOLED
                  Display, RAM 12 GB, ROM 256 GB
                </h5>
                <h6 className="price">₹49,990</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
