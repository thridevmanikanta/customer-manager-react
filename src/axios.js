import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://customer-manager-55d04-default-rtdb.firebaseio.com/'
});

export default axiosInstance;