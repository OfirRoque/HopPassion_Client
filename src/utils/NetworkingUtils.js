import axios from "axios";
import { logout } from "../redux/actions/actions";
import store from "../redux/store/store";
import { navigate } from "./NavigationUtils";

const HopPassionClient = axios.create({
  baseURL: "https://hoppassion-server.1.ie-1.fl0.io",
});

//otra forma mas corta seria:
//axios.defaults.BaseURL = "https://hoppassionserver-production.up.railway.app";

HopPassionClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

HopPassionClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      navigate("/");
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default HopPassionClient;
