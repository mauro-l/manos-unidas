import api from './api';

export const login = async (email, contrasena) => {
    try {
        const response = await api.post('/auth/login', { email, contrasena });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : error.message;
    }
};
