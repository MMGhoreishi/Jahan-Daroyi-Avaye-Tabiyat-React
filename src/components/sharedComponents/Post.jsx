import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Post = ({ post, pageName }) => {
  console.log("post.uagb_featured_image_src>>>");
  console.log(post.uagb_featured_image_src);

  return (
    <div
      className="card"
      style={
        pageName === "PRODUCTS" || pageName === "PACKAGES"
          ? { borderColor: "#e98381" }
          : {}
      }
    >
      <LazyLoadImage
        className="card-img-top"
        width={"100%"}
        height={400}
        placeholderSrc={"/img/loading-photo.jpg"}
        src={
          post.uagb_featured_image_src.medium[0]
            ? post.uagb_featured_image_src.medium[0]
            : "/img/img_not_found.png"
        }
        alt={post.title.rendered}
        effect="blur"
      />
      <div className="card-body">
        <h2 className="card-title">
          <Link
            to={`/${
              pageName === "PRODUCTS"
                ? "products"
                : pageName === "PACKAGES"
                ? "packages"
                : pageName === "SERVICES"
                ? "services"
                : pageName === "ABOUT_US"
                ? "about-us"
                : pageName === "HEALED_PATIENTS"
                ? "healed-patients"
                : pageName === "AGENCIES"
                ? "agency"
                : "posts"
            }/${post.id}`}
            className={
              (pageName === "PRODUCTS" || pageName === "PACKAGES") &&
              "title_product"
            }
          >
            {pageName === "HEALED_PATIENTS" ? (
              <i className="bi bi-capsule"></i>
            ) : pageName === "ABOUT_US" ? (
              <i className="bi bi-award-fill"></i>
            ) : pageName === "PRODUCTS" ? (
              <i class="bi bi-basket"></i>
            ) : pageName === "PACKAGES" ? (
              <i class="bi bi-box-seam-fill"></i>
            ) : pageName === "SERVICES" ? (
              <i class="bi bi-building-fill-check"></i>
            ) : pageName === "AGENCIES" ? (
              <i class="bx bxs-store-alt"></i>
            ) : (
              <i className="bi bi-film"></i>
            )}{" "}
            {post.title.rendered}
          </Link>
        </h2>
        <p className="card-text">{parse(post.excerpt.rendered)}</p>
        <div className="d-grid">
          <Link
            to={`/${
              pageName === "PRODUCTS"
                ? "products"
                : pageName === "PACKAGES"
                ? "packages"
                : pageName === "SERVICES"
                ? "services"
                : pageName === "ABOUT_US"
                ? "about-us"
                : pageName === "HEALED_PATIENTS"
                ? "healed-patients"
                : pageName === "AGENCIES"
                ? "agency"
                : "posts"
            }/${post.id}`}
            className={`btn ${
              pageName === "PRODUCTS" || pageName === "PACKAGES"
                ? "btn-outline-danger"
                : "btn-outline-success"
            } btn-block`}
          >
            {pageName === "PRODUCTS" || pageName === "PACKAGES" ? (
              <i class="bi bi-journal-bookmark"></i>
            ) : (
              <i className="bx bxs-leaf"></i>
            )}{" "}
            {pageName === "HEALED_PATIENTS"
              ? "مشاهده گزارش بیمار"
              : pageName === "ABOUT_US"
              ? "مشاهده افتخار"
              : pageName === "PRODUCTS"
              ? "جزئیات محصول"
              : pageName === "PACKAGES"
              ? "جزئیات پکیج"
              : pageName === "SERVICES"
              ? "مشاهده خدمت"
              : pageName === "AGENCIES"
              ? "جزئیات نمایندگی"
              : "مشاهده ویدیو"}
            {}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
