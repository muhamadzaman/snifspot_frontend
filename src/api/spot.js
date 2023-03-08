import axios from "axios";

const instance = axios.create({
  baseURL: "https://717a18e056e0.eu.ngrok.io",
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
