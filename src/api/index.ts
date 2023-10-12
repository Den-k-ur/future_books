import axios from 'axios';
import { API_KEY, BASE_URL } from './constants';
import globalRouter from 'src/utils/globalRouter';

const api = axios.create({
  baseURL: `${BASE_URL}key=${API_KEY}`,
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 503 && globalRouter.navigate) {
      globalRouter.navigate('/404');
    }
    console.log(error);
    return Promise.reject(error);
  },
);

export default api;
