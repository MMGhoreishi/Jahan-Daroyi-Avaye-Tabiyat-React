const clientConfig = {
  siteUrl:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_BASE_URL_DEVELOPMENT
      : process.env.REACT_APP_BASE_URL_PRODUCTION,
};
export default clientConfig;
