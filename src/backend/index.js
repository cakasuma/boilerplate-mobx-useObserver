import axios from "axios";

const getBackendUrl = "https://google.com";
const Backend = (() => {
  return {
    get: (path, param) => axios.get(`${getBackendUrl}${path}`, param),
    delete: (path, param) => axios.delete(`${getBackendUrl}${path}`, param),
    post: (path, param) => axios.post(`${getBackendUrl}${path}`, param),
    put: (path, param) => axios.put(`${getBackendUrl}${path}`, param),
  };
})();

export default Backend;
