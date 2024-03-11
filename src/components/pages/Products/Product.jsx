import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useLoaderData } from "react-router-dom";
import Moment from "react-moment";
import "moment/locale/fa";
import { Helmet } from "react-helmet";
import { Comments, SaleBanner } from "../..";

const Product = () => {
  const { post } = useLoaderData();
  const postCategories = post._embedded["wp:term"][0];
  const postTags = post._embedded["wp:term"][1];

  return (
    <>
      <Helmet>
        <title>محصول-{post.title.rendered}</title>
      </Helmet>
      <main id="main">
        {/* ======= Product Section ======= */}
        <section className="product">
          <div className="buy-btn">
            <div className="d-grid">
              <Link
                to={`${post.title.rendered}/${post.uagb_excerpt}`}
                className="btn btn-danger btn-block"
              >
                <i className="bi bi-basket"></i> خرید محصول (
                {parse(post.uagb_excerpt)} تومان)
              </Link>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>{post.title.rendered}</h2>

              {/* {parse(post.excerpt.rendered)} */}

              <img
                className="product-image mx-auto d-block img-fluid rounded w-100 mt-3"
                src={
                  post.uagb_featured_image_src.medium[0]
                    ? post.uagb_featured_image_src.medium[0]
                    : "/img/img_not_found.png"
                }
                alt={post.title.rendered}
              />
            </div>
            <div className="row mt-5">
              <div className="product-content col-12">
                {parse(post.content.rendered)}

                <SaleBanner />

                <div className="row product-information">
                  <div className="col-md-4 pb-md-0 pb-3">
                    <i className="bx bx-category"></i> دسته ها:{" "}
                    {postCategories.length > 0 &&
                      postCategories.map((category, index) => {
                        return (
                          <span key={category.id}>
                            {category.name.replace("محصول_", "")}
                            {index < postCategories.length - 1 && " ، "}
                          </span>
                        );
                      })}
                  </div>
                  <div className="col-md-4 pb-md-0 pb-3">
                    <i className="bi bi-calendar3"></i>{" "}
                    <Moment fromNow locale="fa">
                      {post.date}
                    </Moment>
                  </div>
                  <div className="col-md-4">
                    <i className="bi bi-pencil"></i> نویسنده:{" "}
                    {post._embedded.author[0].name}
                  </div>
                </div>

                {postTags.length > 0 && (
                  <div className="row mt-2">
                    <div className="col-12">
                      <div className="tags-layer box-shadow">
                        <ul>
                          {postTags.map((tag) => {
                            return (
                              <li key={tag.id}>
                                <Link
                                  to={`/products/tags/${tag.id}/${tag.name}/${
                                    postCategories.length > 0 &&
                                    postCategories[0].id +
                                      "/" +
                                      postCategories[0].name
                                  }`}
                                >
                                  {tag.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Comments
              comments={post.comments}
              commentCount={post.commentCount}
              postId={post.id}
            />
          </div>
        </section>
        {/* End Product Section  */}
      </main>
      {/* End #main */}
    </>
  );
};

export default Product;
