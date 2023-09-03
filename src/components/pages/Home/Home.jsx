import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const { counted } = useLoaderData();

  return (
    <>
      <Helmet>
        <title>صفحه اصلی</title>
      </Helmet>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="bg-color-of-hero"></div>
        <div
          className="container text-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img src="img/logo.jpg" className="logo mb-2" alt="logo" />
          <h1>جهان دارویی آوای طبیعت</h1>
          <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h2>

          <div className="row">
            <div className="col-lg-4">
              <div className="number-of-consultations">
                <i className="bx bxs-leaf"></i>
                تعداد مشاوره ها: {counted.counseling}
              </div>
              <Link to="/counseling" className="btn-counseling">
                <i className="bx bx-conversation h5"></i> <br />
                مشاوره
              </Link>
            </div>
            <div className="col-lg-4">
              <div className="number-of-awards">
                <i className="bx bxs-leaf"></i> تعداد افتخارات:{" "}
                {counted.aboutUsPosts}
              </div>

              <Link to="/about-us" className="btn-about">
                <i className="bi bi-buildings h5"></i> <br />
                درباره ما
              </Link>
            </div>
            <div className="col-lg-4">
              <div className="number-of-patients">
                <i className="bx bxs-leaf"></i>
                تعداد درمان شدگان: {counted.healedPatientsPosts}
              </div>
              <Link to="/healed-patients" className="btn-patients">
                <i className="bi bi-capsule h5"></i> <br />
                درمان شدگان
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
};

export default Home;
