import axios from 'axios'


const URL = 'http://localhost:3001'

axios.interceptors.request.use(function (config) {
  return config;
});


class UserApi {
  static getPosts = () => {
    return axios.get(`${URL}/blog/posts`);
  };

  static deletePost = (postId) => {
    return axios.delete(`${URL}/blog/post?postId=${postId}`);
  }

  static addNewPost = (newPost) => {
    return axios.post(`${URL}/blog/post`, newPost);
  }
}

export default UserApi;
