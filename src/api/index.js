// Init
import axios from "axios";
import { toast } from "react-toastify";

const api = async (method = "get", uri, body) => {
  // Default setting for production
  if (window.location.hostname !== "localhost") {
    axios.defaults.baseURL = "https://passtotrip.falconit.com.pk/api";
    axios.defaults.withCredentials = true;
  }
  // axios.defaults.baseURL = "http://localhost:5000/api/";
  axios.defaults.withCredentials = true;
  // API Call
  return new Promise((resolve, reject) => {
    axios[method](uri, body)
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("error is ", err);
        // if (err?.response?.status === 401) {
        //   window.location = "/login";
        // } else {
        //   console.log("API Error --------> ", err);
        //   // toast.error(err?.response?.data ? err.response.data : err?.message);
        //   reject(err);
        // }
      });
  });
};

// Export
export default api;
