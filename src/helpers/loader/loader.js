import axios from "axios";
import clientConfig from "../clientConfig";

export const postsLoader = async () => {
  const posts = {
    posts: null,
    pageCount: null,
    categories: null,
    subcategories: null,
    categoryIdsArray: [],
  };

  //Receive categories list
  await axios
    .get(`${clientConfig.siteUrl}/wp-json/wp/v2/categories?per_page=100`)
    .then((res) => {
      const filterValue = "محصول_";
      const filterValue2 = "پکیج_";

      posts.categories = res.data.filter(
        (category) =>
          category.id !== 5 &&
          category.id !== 1 &&
          category.id !== 15 &&
          category.id !== 18 &&
          category.id !== 34 &&
          !category.name.startsWith(filterValue) &&
          !category.name.startsWith(filterValue2)
      );

      posts.categories.map((category) =>
        posts.categoryIdsArray.push(category.id)
      );

      posts.subcategories = posts.categories.filter(
        (category) => category.parent !== 0
      );

      posts.categories = posts.categories.filter(
        (category) => category.parent === 0
      );
    })
    .catch((err) => console.error(err, "is error!"));

  //Receive all posts
  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=${posts.categoryIdsArray}&per_page=9`,
      {
        params: { page: 1 },
      }
    )
    .then((res) => {
      posts.posts = res.data;
      posts.pageCount = res.headers["x-wp-totalpages"];
    })
    .catch((err) => console.error(err, "is error!"));

  return { posts };
};

export const postsByTagIdLoader = async ({ params }) => {
  const posts = {
    posts: null,
    tagName: null,
    pageCount: null,
    tagId: null,
    categoryId: null,
  };

  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?tags=${params.tagId}&per_page=9`,
      {
        params: { page: 1 },
      }
    )
    .then((res) => {
      posts.posts = res.data;
      posts.tagName = params.tagName;
      posts.pageCount = res.headers["x-wp-totalpages"];
      posts.tagId = params.tagId;
      posts.categoryId = params.categoryId;
      posts.categoryName = params.categoryName;
    })
    .catch((err) => console.error(err, "is error!"));

  return { posts };
};

export const postLoader = async ({ params }) => {
  let post = null;

  //Receive post-content
  await axios
    .get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts/${params.postId}/?_embed`)
    .then((res) => {
      post = res.data;
    })
    .catch((err) => console.error(err, "is error!"));

  //Receive post-comments
  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/comments?post=${params.postId}`,
      {
        params: { page: 1 },
      }
    )
    .then((res) => {
      post = {
        ...post,
        comments: res.data,
        commentCount: res.headers["x-wp-totalpages"],
      };
    })
    .catch((err) => console.error(err, "is error!"));

  return { post };
};

export const aboutUsPostsLoader = async () => {
  const posts = { posts: null, pageCount: null };

  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=5&per_page=9`,
      {
        params: { page: 1 },
      }
    )
    .then((res) => {
      console.log(res.data.length, "are posts in home page!!!!");
      posts.posts = res.data;
      posts.pageCount = res.headers["x-wp-totalpages"];
    })
    .catch((err) => console.error(err, "is error!"));

  return { posts };
};

export const servicesPostsLoader = async () => {
  const posts = { posts: null, pageCount: null };

  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=15&per_page=9`,
      {
        params: { page: 1 },
      }
    )
    .then((res) => {
      posts.posts = res.data;
      posts.pageCount = res.headers["x-wp-totalpages"];
    })
    .catch((err) => console.error(err, "is error!"));

  return { posts };
};

export const agenciesPostsLoader = async () => {
  const posts = { posts: null, pageCount: null };

  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=18&per_page=9`,
      {
        params: { page: 1 },
      }
    )
    .then((res) => {
      posts.posts = res.data;
      posts.pageCount = res.headers["x-wp-totalpages"];
    })
    .catch((err) => console.error(err, "is error!"));

  return { posts };
};

export const healedPatientsPostsLoader = async () => {
  const posts = { posts: null, pageCount: null };

  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=1&per_page=9`,
      {
        params: { page: 1 },
      }
    )
    .then((res) => {
      posts.posts = res.data;
      posts.pageCount = res.headers["x-wp-totalpages"];
    })
    .catch((err) => console.error(err, "is error!"));

  return { posts };
};

export const homeLoader = async () => {
  const counted = {
    aboutUsPosts: null,
    healedPatientsPosts: null,
    counseling: null,
  };

  await axios
    .get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=5&per_page=1`)
    .then((res) => {
      counted.aboutUsPosts = res.headers["x-wp-total"];
    })
    .catch((err) => console.error(err, "is error!"));

  await axios
    .get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=1&per_page=1`)
    .then((res) => {
      counted.healedPatientsPosts = res.headers["x-wp-total"];
    })
    .catch((err) => console.error(err, "is error!"));

  await axios
    .get(`${clientConfig.siteUrl}/wp-json/twentytwentythree/v2/get-ncounter`)
    .then((res) => {
      console.log(res.data, "home-counseling!!!");
      counted.counseling = res.data;
    })
    .catch((err) => console.error(err, "is error!"));

  return { counted };
};

export const productsLoader = async () => {
  const posts = {
    posts: null,
    pageCount: null,
    categories: null,
    subcategories: null,
    categoryIdsArray: [],
  };

  //Receive categories list
  await axios
    .get(`${clientConfig.siteUrl}/wp-json/wp/v2/categories?per_page=100`)
    .then((res) => {
      const filterValue = "محصول_";
      posts.categories = res.data.filter((category) =>
        category.name.startsWith(filterValue)
      );

      posts.categories.map((category) =>
        posts.categoryIdsArray.push(category.id)
      );

      posts.subcategories = posts.categories.filter(
        (category) => category.parent !== 0
      );

      posts.categories = posts.categories.filter(
        (category) => category.parent === 0
      );
    })
    .catch((err) => console.error(err, "is error!"));

  //Receive all posts
  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=${posts.categoryIdsArray}&per_page=9`,
      {
        params: { page: 1 },
      }
    )
    .then((res) => {
      console.log(res.data, "are products-ppppp");
      posts.posts = res.data;
      posts.pageCount = res.headers["x-wp-totalpages"];
    })
    .catch((err) => {
      console.error(err, "is error!");
    });

  return { posts };
};

export const productFormLoader = async ({ params }) => {
  let post = {
    productId: params.productId,
    productName: params.productName,
    productPrice: params.productPrice,
  };

  return { post };
};

export const packagesLoader = async () => {
  const posts = {
    posts: null,
    pageCount: null,
    categories: null,
    subcategories: null,
    categoryIdsArray: [],
  };

  //Receive categories list
  await axios
    .get(`${clientConfig.siteUrl}/wp-json/wp/v2/categories?per_page=100`)
    .then((res) => {
      const filterValue = "پکیج_";
      posts.categories = res.data.filter((category) =>
        category.name.startsWith(filterValue)
      );

      posts.categories.map((category) =>
        posts.categoryIdsArray.push(category.id)
      );

      posts.subcategories = posts.categories.filter(
        (category) => category.parent !== 0
      );

      posts.categories = posts.categories.filter(
        (category) => category.parent === 0
      );
    })
    .catch((err) => console.error(err, "is error!"));

  //Receive all posts
  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=${posts.categoryIdsArray}&per_page=9`,
      {
        params: { page: 1 },
      }
    )
    .then((res) => {
      posts.posts = res.data;
      posts.pageCount = res.headers["x-wp-totalpages"];
    })
    .catch((err) => console.error(err, "is error!"));

  return { posts };
};

export const packageFormLoader = async ({ params }) => {
  let post = {
    packageId: params.packageId,
    packageName: params.packageName,
    packagePrice: params.packagePrice,
  };

  return { post };
};
