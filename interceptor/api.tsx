import axios from 'axios';
import config from "@/config/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
    baseURL: config.url
});

api.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('userToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;