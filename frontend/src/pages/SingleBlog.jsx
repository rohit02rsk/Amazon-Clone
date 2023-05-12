import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
const SingleBlog = () => {
  return (
    <>
      {/* Blog ka title daal diyo */}
      <Meta title="Deez nuts" />
      <BreadCrumb title="Deez nuts" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" /> All Blogs
                </Link>
                <h3 className="title">Deez Nuts</h3>
                <img
                  src="/images/blog-1.jpg"
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid in autem aspernatur impedit modi porro vel voluptates
                  magnam sequi fuga eum qui illo obcaecati dolorum ab, voluptas
                  accusantium quas repudiandae? Fugit sequi velit, tempora alias
                  id accusantium, expedita odit enim odio labore provident, quos
                  modi qui quod? Minima, recusandae? Recusandae, ducimus eum ad
                  vitae in ex mollitia quisquam suscipit labore? Eos qui quis
                  repellendus sit est, perferendis blanditiis id temporibus
                  debitis? Placeat culpa magni, nulla quaerat id expedita esse,
                  facere eaque velit rem iusto repudiandae quo, dolores deleniti
                  est incidunt! Esse unde necessitatibus eaque quasi fuga nulla
                  nobis reiciendis atque rerum sequi iste libero qui
                  consequatur, quia commodi? Consequatur obcaecati sint facere,
                  et similique iure deserunt vitae natus sunt error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
