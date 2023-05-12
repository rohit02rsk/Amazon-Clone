import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src="images/blog-1.jpg"
          alt="blog-image"
          className="img-fluid w-100"
        />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec 2022</p>
        <h5 className="title">Deez nuts</h5>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          voluptas
        </p>
        <Link className="button" to="/blogs/:id">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
