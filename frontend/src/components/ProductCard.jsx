import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <div
      className={` ${location.pathname === "/store" ? `gr-${grid}` : "gr-3"} `}
    >
      <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="/images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src="/images/watch.jpg" alt="prod-img" className="img-fluid" />
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">Apple Watch series - 7 Nike edition</h5>
          <ReactStars
            count={5}
            edit={false}
            value={4}
            size={24}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias
            voluptatem possimus maxime nam cum officia, aliquid ad, veritatis
            blanditiis dicta minus fugit voluptatibus delectus quo temporibus id
            tenetur fugiat!
          </p>
          <p className="price">₹49,990.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="/images/prodcompare.svg" alt="add-cart" />
            </Link>
            <Link>
              <img src="/images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="/images/add-cart.svg" alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
