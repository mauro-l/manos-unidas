import api from './api';

export const getActivity = async () => {
  try {
    const response = await api.get("/actividades");
    return response.data.actividades;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }


};

export const getActivityById = async (id) => {
  try {
      const response = await api.get('/actividades/'+ id );
          
      return response.data;
  } catch (error) {
      throw error.response ? error.response.data.message : error.message;
  }
};
