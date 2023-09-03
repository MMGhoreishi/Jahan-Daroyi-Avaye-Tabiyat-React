import axios from "axios";
import clientConfig from "../clientConfig";

export const postCommentsPagination = async (n, postId, setComments) => {
  await axios
    .get(`${clientConfig.siteUrl}/wp-json/wp/v2/comments?post=${postId}`, {
      params: { page: n.selected + 1 },
    })
    .then((res) => {
      setComments(res.data);
    })
    .catch((err) => console.error(err, "is error!"));
};

export const PostsByTagIdPagination = async (n, tagId, setPosts) => {
  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?tags=${tagId}&per_page=9`,
      {
        params: { page: n.selected + 1 },
      }
    )
    .then((res) => {
      setPosts(res.data);
    })
    .catch((err) => console.error(err, "is error!"));
};

export const postsPagination = async (n, categoryId, setPosts) => {
  await axios
    .get(
      `${clientConfig.siteUrl}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=9`,
      {
        params: { page: n.selected + 1 },
      }
    )
    .then((res) => {
      setPosts(res.data);
    })
    .catch((err) => console.error(err, "is error!"));
};
