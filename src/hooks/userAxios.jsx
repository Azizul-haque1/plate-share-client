import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

const userAxios = () => {
    return axiosInstance;
};

export default userAxios;