import axios from "axios";

const URL = 'http://localhost:3000/api';

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token") || "";
  if (token) {
    config.headers.Authorization = `Bearer ` + token;
  }

  return config;
});

class CommentApi {
  static getComment = (id) => {
    return axios.get(`${URL}/comment/${id}`);
  };

}

export default CommentApi;
