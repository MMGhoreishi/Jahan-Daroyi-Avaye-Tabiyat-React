import { useState } from "react";
import { NavLink } from "react-router-dom";

const MainLayout = ({ children }) => {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  return (
    <>
      {/* ======= Header =======  */}
      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a href="index.html" className="logo">
            <img src="/img/logo.jpg" alt="logo" className="img-fluid" />
          </a>

          <nav
            id="navbar"
            className={`navbar order-first ${
              mobileNavToggle ? "navbar-mobile" : ""
            }`}
          >
            <ul>
              <li>
                <NavLink to="/" onClick={() => setMobileNavToggle(false)}>
                  <span>
                    <i className="bi bi-house-door"></i> خانه
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  onClick={() => setMobileNavToggle(false)}
                >
                  <span>
                    <i className="bi bi-basket"></i> محصولات
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/packages"
                  onClick={() => setMobileNavToggle(false)}
                >
                  <span>
                    <i class="bi bi-lungs"></i> پکیج های درمانی
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={() => setMobileNavToggle(false)}
                >
                  <span>
                    <i className="bi bi-building"></i> خدمات ما
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/agency" onClick={() => setMobileNavToggle(false)}>
                  <span>
                    <i class="bi bi-shop-window"></i> نمایندگی ها
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/posts" onClick={() => setMobileNavToggle(false)}>
                  <span>
                    <i className="bx bx-book-bookmark"></i> ویدیوهای آموزشی
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  onClick={() => setMobileNavToggle(false)}
                >
                  <span>
                    <i className="bx bx-support"></i> پشتیبانی و نظرات
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  onClick={() => setMobileNavToggle(false)}
                >
                  <span>
                    <i class="bx bx-message-square-dots"></i> انتقادات و
                    پیشنهادات
                  </span>
                </NavLink>
              </li>
            </ul>
            <i
              className={`bi bi-list mobile-nav-toggle ${
                mobileNavToggle ? "bi-x" : "bi-list"
              }`}
              onClick={() => setMobileNavToggle(!mobileNavToggle)}
            ></i>
          </nav>
        </div>
      </header>
      {/* End Header */}

      {children}

      {/* ======= Footer =======  */}
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            تمام حقوق سایت متعلق به شرکت داروسازی جهان دارویی آوای طبیعت می باشد
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
};

export default MainLayout;
