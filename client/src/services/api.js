import axios from "axios";

const api = axios.create({
 
    baseURL: 'https://manosunidas-back.vercel.app/v1/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;

