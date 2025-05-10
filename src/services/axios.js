import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    config => {
        if (import.meta.env.VITE_API_TOKEN) {
            config.headers.Authorization = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
        }
        return config;
    },
    error => {
        console.error(error.response);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.error(error.response);
        return Promise.reject(error);
    }
);

export default api;