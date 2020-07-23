import Axios from 'axios';

export const instance = Axios.create({
  baseURL: 'https://social-network-demo-app.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
