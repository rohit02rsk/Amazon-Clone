import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title="Your Cart" />
      <BreadCrumb title="Your Cart" />
      <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex py-3 justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data d-flex py-3 mb-2 justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="/images/watch.jpg"
                      alt="product-img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75">
                    <h5>Huawei Smart Watch series 9</h5>
                    <p>Red</p>
                    <p>S </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">₹49,990</h5>
                </div>
                <div className="cart-col-3 gap-15 d-flex align-items-center">
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      name=""
                      id=""
                      min={1}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">₹49,990</h5>
                </div>
              </div>
              <div className="cart-data d-flex py-3 mb-2 justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="/images/watch.jpg"
                      alt="product-img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75">
                    <h5>Huawei Smart Watch series 9</h5>
                    <p>Red</p>
                    <p>S </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">₹49,990</h5>
                </div>
                <div className="cart-col-3 gap-15 d-flex align-items-center">
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      name=""
                      id=""
                      min={1}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">₹49,990</h5>
                </div>
              </div>
              <div className="cart-data d-flex py-3 mb-2 justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="/images/watch.jpg"
                      alt="product-img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75">
                    <h5>Huawei Smart Watch series 9</h5>
                    <p>Red</p>
                    <p>S </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">₹49,990</h5>
                </div>
                <div className="cart-col-3 gap-15 d-flex align-items-center">
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      name=""
                      id=""
                      min={1}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">₹49,990</h5>
                </div>
              </div>
              <div className="cart-data d-flex py-3 mb-2 justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="/images/watch.jpg"
                      alt="product-img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75">
                    <h5>Huawei Smart Watch series 9</h5>
                    <p>Red</p>
                    <p>S </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">₹49,990</h5>
                </div>
                <div className="cart-col-3 gap-15 d-flex align-items-center">
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      name=""
                      id=""
                      min={1}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">₹49,990</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-5">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/store" className="button">
                  Continue Shopping
                </Link>
                <div className="d-flex flex-column align-items-center">
                  <h4 className="text-decoration-underline">Subtotal</h4>
                  <h6 className="pb-3">₹49,990.00</h6>
                  <p>Taxes and Shipping costs calculated at checkout</p>
                  <Link to="/checkout" className="button checkout-button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
