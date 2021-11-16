import Get from "./Get";
import Post from "./Post";
import Put from "./Put";

// POST
const postNewsBlog = (data) => Post(`posts`, false, data);

// PUT
const updateNewsBlog = (data, id) => Post(`posts/${id}`, false, data);

// GET
const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getComments = () => Get("comments", true);

const API = {
  postNewsBlog,
  getNewsBlog,
  getComments,
};

export default API;
