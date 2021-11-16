import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${root ? OnlineRoot : RootPath}/${path}`, data).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((res) => {
        console.log();
        this.getPostApi();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      });
  });

  return promise;
};

export default Post;
