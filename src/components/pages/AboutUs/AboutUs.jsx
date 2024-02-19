import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PostCard } from "../../";
import { Helmet } from "react-helmet";
import ReactPaginate from "react-paginate";
import { postsPagination } from "../../../helpers/pagination/pagination";

const AboutUs = () => {
  const { posts } = useLoaderData();
  const [getPosts, setPosts] = useState(posts.posts);

  return (
    <>
      <Helmet>
        <title>درباره ما</title>
      </Helmet>
      <main id="main">
        {/* ======= About Us Posts Section =======  */}
        <section className="aboutUs-posts">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>درباره ما و افتخارات کسب شده</h2>
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

            <div className="row mt-5">
              {getPosts.length > 0 &&
                getPosts.map((post) => {
                  return (
                    <div key={post.id} className="col-lg-4 col-md-6 mt-3">
                      <PostCard post={post} pageName="ABOUT_US" />
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
                  onPageChange={(n) => postsPagination(n, 5, setPosts)}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
            {/*End Pagination*/}
          </div>
        </section>
        {/* End About Us Posts Section  */}
      </main>
      {/* End #main  */}
    </>
  );
};

export default AboutUs;
