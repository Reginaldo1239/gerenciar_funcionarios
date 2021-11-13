import axios from 'axios';
import { BASE_URL_API } from '../../Constants/Config'

const api = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
  }
});


export default api;
