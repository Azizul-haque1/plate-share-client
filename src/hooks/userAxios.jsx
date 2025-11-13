import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'https://plate-share-server-sand.vercel.app'
    baseURL: 'http://localhost:3000'
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;