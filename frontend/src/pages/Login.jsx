import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card ">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      className="form-control mt-1"
                    />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot your password?</Link>
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                      <button className="button border-0" type="submit">
                        Login
                      </button>
                      <Link className="button sign-up" to="/sign-up">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
