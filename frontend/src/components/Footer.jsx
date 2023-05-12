import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-light">Sign up to our newsletter!</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter your email..."
                  aria-label="Enter your email..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-light mb-4">Contact us</h4>
              <div>
                <address className="text-light fs-6">
                  Demo bld no: 991, San Francisco,
                  <br />
                  State of California, USA
                  <br />
                  120211
                </address>
                <a
                  href="tel:+91 7991231222"
                  className="mt-3 d-block mb-1 text-light"
                >
                  (+91) 79912 31222
                </a>
                <a
                  href="mailto:notamazon@gmail.com"
                  className="mt-2 d-block mb-0 text-light"
                >
                  notamazon@gmail.com
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-light mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-light py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-light py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-light py-2 mb-1" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link className="text-light py-2 mb-1" to="/t-and-c">
                  T&C
                </Link>
                <Link className="text-light py-2 mb-1" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-light mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-light py-2 mb-1">My account</Link>
                <Link className="text-light py-2 mb-1">FAQ</Link>
                <Link className="text-light py-2 mb-1">Search</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-light mb-4">Quick links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-light py-2 mb-1">Laptops</Link>
                <Link className="text-light py-2 mb-1">Headphones</Link>
                <Link className="text-light py-2 mb-1">Tablets</Link>
                <Link className="text-light py-2 mb-1">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-0 text-light">
                &copy; {new Date().getFullYear()} Made with ♡ by R.S.K
              </div>
              <div className="social-icons d-flex justify-content-center gap-30 mt-3 mb-3">
                <a
                  href="https://www.linkedin.com/in/s-rohit-kumar-214177233/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="text-light fs-4" />
                </a>
                <a
                  href="https://github.com/rohit02rsk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="text-light fs-4" />
                </a>
                <a
                  href="https://www.instagram.com/rohit.btw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="text-light fs-4" />
                </a>
                <a
                  href="https://leetcode.com/rohit02rsk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLeetcode className="text-light fs-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
