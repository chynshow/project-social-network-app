import Axios from 'axios';

export const instance = Axios.create({
  baseURL: 'http://localhost:5001/',
  headers: {
    'Content-Type': 'application/json',
  },
});
