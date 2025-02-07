import api from "./api";

export const getAllInscripciones = async () => {
  try {
    const response = await api.get("/inscripciones");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const getActivityById = async (id) => {
  try {
    const response = await api.get("/actividades/" + id);

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

/* export const getActivityByFundationId = async (id) => {
  try {
    const response = await api.get("/actividades/fundacion/" + id);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
}; */

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
