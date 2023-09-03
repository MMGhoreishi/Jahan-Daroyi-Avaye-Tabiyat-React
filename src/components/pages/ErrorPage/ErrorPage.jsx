import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>چنین صفحه ای یافت نشد</title>
      </Helmet>
      <div className="errorPage">
        <div className="flex-container">
          <div className="text-center">
            <h1>
              <span className="fade-in" id="digit1">
                4
              </span>
              <span className="fade-in" id="digit2">
                0
              </span>
              <span className="fade-in" id="digit3">
                4
              </span>
            </h1>
            <h3 className="fadeIn">چنین صفحه ای یافت نشد</h3>
            <Link to="/">
              <button type="button" name="button">
                بازگشت به صفحه اصلی
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
