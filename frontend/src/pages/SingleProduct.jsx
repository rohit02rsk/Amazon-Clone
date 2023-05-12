import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import ColorElement from "../components/ColorElement";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  };
  const [orderedProduct, setOrderedProduct] = useState(false);

  return (
    <>
      <Meta title="Product name here" />
      <BreadCrumb title="Product name here" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl bg-white p-3">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">₹39,990</p>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      edit={false}
                      value={4}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="text-muted mb-0">(22 reviews)</p>
                  </div>
                  <a href="#review">Leave a review</a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type</h3>
                    <p className="product-data">Smart Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand</h3>
                    <p className="product-data">Huawei</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category</h3>
                    <p className="product-data">Electronics</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 text-dark border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color</h3>
                    <ColorElement />
                  </div>
                  <div className="d-flex gap-15 flex-row mt-2 mb-3 align-items-center">
                    <h3 className="product-heading">Quantity</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        id=""
                        className="form-control"
                      />
                    </div>

                    <div className="d-flex gap-15 align-items-center">
                      <button className="button border-0" type="submit">
                        Add To Cart
                      </button>
                      <button
                        className="button border-0"
                        style={{ backgroundColor: "#febd69", color: "black" }}
                        type="submit"
                      >
                        Buy Now!
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" /> Compare product
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" /> Add To Wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur ea voluptas quo pariatur, laboriosam quas mollitia
                  ducimus impedit amet nam recusandae ab obcaecati aliquid in
                  veritatis error aut eveniet id? Consequatur nisi, ad explicabo
                  iste quos obcaecati quaerat cupiditate maiores eveniet illum
                  accusantium sapiente maxime adipisci beatae omnis, quasi eum
                  deserunt, aliquid ratione tempore? Consequuntur commodi
                  mollitia minima nihil soluta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2 pb-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 id="review">Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customers reviewed this product</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        edit={false}
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="text-muted mb-0">Based on 22 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-secondary text-decoration-underline"
                        href="#"
                      >
                        Leave a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Leave a review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        edit={true}
                        value={0}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Feedback"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Lassan</h6>
                      <ReactStars
                        count={5}
                        edit={false}
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia dignissimos ratione fugiat pariatur quidem quod
                      maiores illum officiis eos quo molestias cum reiciendis
                      dicta obcaecati numquam, aliquam adipisci optio laborum?
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Lassan</h6>
                      <ReactStars
                        count={5}
                        edit={false}
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia dignissimos ratione fugiat pariatur quidem quod
                      maiores illum officiis eos quo molestias cum reiciendis
                      dicta obcaecati numquam, aliquam adipisci optio laborum?
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Lassan</h6>
                      <ReactStars
                        count={5}
                        edit={false}
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia dignissimos ratione fugiat pariatur quidem quod
                      maiores illum officiis eos quo molestias cum reiciendis
                      dicta obcaecati numquam, aliquam adipisci optio laborum?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper pt-2 pb-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
