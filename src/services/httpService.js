import axios from 'axios';
import { authorization } from '../utlis/constants';
import storage from './storageService';

axios.defaults.headers.common[
  authorization
] = `Bearer ${storage.getAuthToken()}`;
axios.interceptors.response.use(
  (resp) => resp,
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
    }
    return Promise.reject(error);
  },
);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  request: axios.request,
  headers: axios.defaults.headers,
  patch: axios.patch,
};

export default http;
