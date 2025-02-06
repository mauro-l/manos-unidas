import axios from 'axios';

const api = axios.create({
 /*    baseURL: 'https://c23-115-webapp-server.vercel.app/v1/api', */
    baseURL: 'https://manosunidas-back.vercel.app/v1/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
