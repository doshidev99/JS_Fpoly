import axios from "axios";

const URL = 'http://localhost:3000';

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token") || "";
  if (token) {
    config.headers.Authorization = `Bearer ` + token;
  }

  return config;
});

class BookApi {
  static getBooks = () => {
    return axios.get(`${URL}/api/book`);
  };

  static deleteBook = (id) => {
    return axios.delete(`${URL}/api/book/${id}`);
  };

}

export default BookApi;
