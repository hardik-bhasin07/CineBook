import axios from 'axios';


export const axiosInstance = axios.create({
  baseURL: 'https://watchnook.onrender.com', // no trailing slash
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
