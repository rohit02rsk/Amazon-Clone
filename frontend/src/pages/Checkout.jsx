import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row my-5">
            <div className="col-7">
              <div className="checkout-left-data">
                <h4 className="title">Contact information</h4>
                <p className="user-details">lassan raj, lassan@gmail.com</p>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      placeholder="First Name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      placeholder="Last Name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment, Suite, Landmark, etc... (Optional)"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      placeholder="City"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Pincode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link className="button" to="/cart">
                        <BiArrowBack /> Back
                      </Link>
                      <Link className="button checkout-button" to="#">
                        Calculate Shipping Charges
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom pb-2">
                <div className="d-flex gap-10 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="d-flex w-25 position-relative">
                      <span className="badge bg-secondary text-white rounded-circle"></span>
                      <img
                        className="img-fluid"
                        src="images/watch.jpg"
                        alt="product"
                      />
                    </div>
                    <div></div>
                    <h5 className="title">Huawei Smart Watch 9</h5>
                  </div>
                  <div className="flex-grow-1">
                    <h5>₹ 49,990.00</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Subtotal</p>
                  <p>₹ 49,990.00</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p>Shipping</p>
                  <p>₹ 1,210.82</p>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                  <h4>Grand Total</h4>
                  <h5>₹ 51, 200.82</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
