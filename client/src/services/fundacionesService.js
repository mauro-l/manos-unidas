import api from "./api.js";

export const getFoundationById = async (id) => {
  try {
    const response = await api.get("/fundacion/" + id);
    console.log(response);
    return response.data.actividades;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};
