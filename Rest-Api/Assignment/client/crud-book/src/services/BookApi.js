import axios from "axios";

const URL = 'http://localhost:3000/api';

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token") || "";
  if (token) {
    config.headers.Authorization = `Bearer ` + token;
  }

  return config;
});

class BookApi {
  static getBooks = () => {
    return axios.get(`${URL}/book`);
  };
  static getBook = (id) => {
    return axios.get(`${URL}/book/${id}`);
  };

  static deleteBook = (id) => {
    return axios.delete(`${URL}/book/${id}`);
  };

  static createBook = (newBook) => {
    return axios.post(`${URL}/book`, newBook);
  };


  static searchBook = (value) => {
    return axios.get(`${URL}/book/search?title=${value}`);
  };

}

export default BookApi;
