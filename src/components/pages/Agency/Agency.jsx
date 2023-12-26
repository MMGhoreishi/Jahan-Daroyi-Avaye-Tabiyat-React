import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Post from "../../sharedComponents/Post";
import { Helmet } from "react-helmet";
import ReactPaginate from "react-paginate";
import { postsPagination } from "../../../helpers/pagination/pagination";

const Agency = () => {
  const { posts } = useLoaderData();
  const [getPosts, setPosts] = useState(posts.posts);

  return (
    <>
      <Helmet>
        <title>نمایندگی ها</title>
      </Helmet>
      <main id="main">
        {/* ======= Agencies Posts Section =======  */}
        <section className="agencies-posts">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>نمایندگی ها</h2>
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

            <div class="d-grid">
              <Link to="/agency/add" className="btn btn-warning btn-block">
                <i class="bi bi-send-fill"></i> درخواست نمایندگی
              </Link>
            </div>

            <div className="row mt-5">
              {getPosts.length > 0 &&
                getPosts.map((post) => {
                  return (
                    <div key={post.id} className="col-lg-4 col-md-6 mt-3">
                      <Post post={post} pageName="AGENCIES" />
                    </div>
                  );
                })}
            </div>
            {/*Start Pagination*/}
            <div className="text-center">
              <div className="d-inline-block">
                <ReactPaginate
                  previousLabel={"قبل"}
                  nextLabel={"بعد"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={posts.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={(n) => postsPagination(n, 18, setPosts)}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
            {/*End Pagination*/}
          </div>
        </section>
        {/* End Agencies Posts Section  */}
      </main>
      {/* End #main  */}
    </>
  );
};

export default Agency;
