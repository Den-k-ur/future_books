import axios from 'axios';
import { API_KEY, BASE_URL } from './constants';

const api = axios.create({
  baseURL: `${BASE_URL}key=${API_KEY}`,
});

export default api;
