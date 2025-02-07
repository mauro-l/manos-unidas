import api from "./api";

export const getAllInscripciones = async () => {
  try {
    const response = await api.get("/inscripciones");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const getByActivityId = async (id) => {
  try {
    const response = await api.get("/inscripciones/activity/" + id);

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const getInscriptionByActivityId = async (id) => {
  try {
    const response = await api.get("/inscripciones/activity/" + id);
    if (!response) {
      return [];
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const deleteInscribtion = async (id) => {
  try {
    const response = await api.delete("/inscripciones/" + id);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const postAddInscription = async (voluntario_id, activity_id) => {
  try {
    const response = await api.post("/inscripciones", {
      voluntario_id: voluntario_id,
      actividad_id: activity_id,
    });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};
