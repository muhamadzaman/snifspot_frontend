import axios from "axios";

const instance = axios.create({
  baseURL: "https://snifspot-backend-api.herokuapp.com",
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
