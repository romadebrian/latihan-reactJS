import axios from "axios";

const RootPath = "http://localhost:3004";
const OnlineRoot = "https://jsonplaceholder.typicode.com";

const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};

// POST
const postNewsBlog = (data) => Post(`posts`, false, data);

// GET
const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getComments = () => Get("comments", true);

const API = {
  postNewsBlog,
  getNewsBlog,
  getComments,
};

export default API;
