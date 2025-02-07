import api from "./api.js";

export const getVolunteer = async () => {
  try {
    const response = await api.get("/voluntarios");
    return response.data.actividades;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const getVolunteerById = async (id) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token no encontrado en localStorage");
    }
    const response = await api.get("/voluntarios/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};
