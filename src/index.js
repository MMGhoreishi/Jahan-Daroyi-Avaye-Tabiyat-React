import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./redux/reducers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  ErrorPage,
  Home,
  Posts,
  Post,
  PostsByTagId,
  HealedPatients,
  Products,
  Counseling,
  Product,
  ProductForm,
  Services,
  Agency,
  AgencyForm,
  Packages,
  Package,
  PackageForm,
  Service,
  AboutUsPost,
  HealedPatient,
  AgencyPost,
} from "./components";
import {
  postsLoader,
  postLoader,
  postsByTagIdLoader,
  aboutUsPostsLoader,
  homeLoader,
  healedPatientsPostsLoader,
  productsLoader,
  productFormLoader,
  servicesPostsLoader,
  agenciesPostsLoader,
  packagesLoader,
  packageFormLoader,
} from "./helpers/loader/loader";
import {
  agencyForm,
  contactUs,
  counseling,
  packagePurchaseRequest,
  productPurchaseRequest,
  sendPostComment,
} from "./helpers/action/action";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
        action: contactUs,
      },
      {
        path: "/counseling",
        element: <Counseling />,
        action: counseling,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
        loader: aboutUsPostsLoader,
      },
      {
        path: "/about-us/:postId",
        element: <AboutUsPost />,
        loader: postLoader,
        action: sendPostComment,
      },
      {
        path: "/services",
        element: <Services />,
        loader: servicesPostsLoader,
      },
      {
        path: "/services/:postId",
        element: <Service />,
        loader: postLoader,
        action: sendPostComment,
      },
      {
        path: "/agency",
        element: <Agency />,
        loader: agenciesPostsLoader,
      },
      {
        path: "/agency/:postId",
        element: <AgencyPost />,
        loader: postLoader,
        action: sendPostComment,
      },
      {
        path: "/agency/add",
        element: <AgencyForm />,
        action: agencyForm,
      },
      {
        path: "/healed-patients",
        element: <HealedPatients />,
        loader: healedPatientsPostsLoader,
      },
      {
        path: "/healed-patients/:postId",
        element: <HealedPatient />,
        loader: postLoader,
        action: sendPostComment,
      },
      {
        path: "/packages",
        element: <Packages />,
        loader: packagesLoader,
      },
      {
        path: "/packages/:postId",
        element: <Package />,
        loader: postLoader,
        action: sendPostComment,
      },
      {
        path: "/packages/:packageId/:packageName",
        element: <PackageForm />,
        loader: packageFormLoader,
        action: packagePurchaseRequest,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "/products/:postId",
        element: <Product />,
        loader: postLoader,
        action: sendPostComment,
      },
      {
        path: "/products/:productId/:productName",
        element: <ProductForm />,
        loader: productFormLoader,
        action: productPurchaseRequest,
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "/posts/:postId",
        element: <Post />,
        loader: postLoader,
        action: sendPostComment,
      },
      {
        path: "/:pageName/tags/:tagId/:tagName/:categoryId/:categoryName",
        element: <PostsByTagId />,
        loader: postsByTagIdLoader,
      },
    ],
  },
]);

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
