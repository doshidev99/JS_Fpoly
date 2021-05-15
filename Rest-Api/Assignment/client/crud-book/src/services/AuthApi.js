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
  static login = (values) => {
    return axios.post(`${URL}/auth/login`, values);
  };
  static register = (values) => {
    return axios.post(`${URL}/auth/register`, values);
  };
}

export default BookApi;
