import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../../sharedComponents/Post";
import { Helmet } from "react-helmet";
import ReactPaginate from "react-paginate";
import { postsPagination } from "../../../helpers/pagination/pagination";
import {
  setPostsByCategory,
  setSubcategoriesToList,
} from "../../../helpers/setData/setData";

let reactPaginate = true;

const Products = () => {
  const { posts } = useLoaderData();
  const [getPosts, setPosts] = useState(posts.posts);
  const [getSubcategories, setSubcategories] = useState([]);

  return (
    <>
      <Helmet>
        <title>محصولات درمانی</title>
      </Helmet>
      <main id="main">
        {/* ======= Products Section =======  */}
        <section className="products-posts">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>محصولات درمانی</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی
              </p>
            </div>

            {posts.categories.length > 0 && (
              <div className="row">
                <div className="col-12">
                  <select
                    className="form-select form-select-lg"
                    defaultValue={"DEFAULT"}
                    onChange={(event) => {
                      posts.categoryIdsArray = event.target.value;
                      reactPaginate = !reactPaginate;

                      setPostsByCategory(
                        posts.categoryIdsArray,
                        posts,
                        setPosts
                      );

                      setSubcategoriesToList(
                        posts.categoryIdsArray,
                        posts.subcategories,
                        setSubcategories
                      );
                    }}
                  >
                    <option value="DEFAULT" disabled hidden>
                      انتخاب دسته محصول
                    </option>
                    {posts.categories.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name.replace("محصول_", "")}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            )}

            {getSubcategories.length > 0 && (
              <div className="row mt-2">
                <div className="col-12">
                  <select
                    className="form-select form-select-lg"
                    defaultValue={"DEFAULT"}
                    onChange={(event) => {
                      posts.categoryIdsArray = event.target.value;
                      reactPaginate = !reactPaginate;

                      setPostsByCategory(
                        posts.categoryIdsArray,
                        posts,
                        setPosts
                      );
                    }}
                  >
                    <option value="DEFAULT" disabled hidden>
                      انتخاب زیر دسته
                    </option>
                    {getSubcategories.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name.replace("محصول_", "")}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            )}

            <div className="row mt-5">
              {getPosts.length > 0 &&
                getPosts.map((post) => {
                  return (
                    <div key={post.id} className="col-lg-4 col-md-6 mt-3">
                      <Post post={post} pageName="PRODUCTS" />
                    </div>
                  );
                })}
            </div>

            {/*Start Pagination*/}
            <div className="text-center">
              <div className="d-inline-block">
                {reactPaginate ? (
                  <div className="t1" key={1}>
                    <ReactPaginate
                      previousLabel={"قبل"}
                      nextLabel={"بعد"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={posts.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={(n) =>
                        postsPagination(n, posts.categoryIdsArray, setPosts)
                      }
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}
                    />
                  </div>
                ) : (
                  <div className="t1" key={2}>
                    <ReactPaginate
                      previousLabel={"قبل"}
                      nextLabel={"بعد"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={posts.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={(n) =>
                        postsPagination(n, posts.categoryIdsArray, setPosts)
                      }
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}
                    />
                  </div>
                )}
              </div>
            </div>
            {/*End Pagination*/}
          </div>
        </section>
        {/* End Products Section  */}
      </main>
      {/* End #main  */}
    </>
  );
};

export default Products;
