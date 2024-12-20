import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND, // Ensure this environment variable is set
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  export default axiosInstance;