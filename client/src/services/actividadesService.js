import api from './api';

export const getActivity = async (email, contrasena) => {
    try {
        const response = await api.get('/actividades', { email, contrasena });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : error.message;
    }
};
