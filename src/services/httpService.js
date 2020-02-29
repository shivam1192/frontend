import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.defaults.baseURL="http://localhost:3000/api";
axios.interceptors.response.use(null, error => {

console.log(process.env);
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // console.log("logging the error", error);
    // alert("An unexpected error occurred.");
    logger.log(error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

function setJwt(jwt){
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};