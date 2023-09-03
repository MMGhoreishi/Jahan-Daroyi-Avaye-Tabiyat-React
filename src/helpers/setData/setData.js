import axios from "axios";
import clientConfig from "../clientConfig";

export const setPostsByCategory = async (categoryId, posts, setPosts) => {
  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=9`,
      {
        params: { page: 1 },
      }
    )
    .then((res) => {
      posts.pageCount = res.headers["x-wp-totalpages"];
      setPosts(res.data);
    })
    .catch((err) => console.error(err, "is error!"));
};

export const setSubcategoriesToList = (
  categoryId,
  subcategories,
  setSubcategories
) => {
  setSubcategories(
    subcategories.filter((category) => category.parent == categoryId)
  );
};
