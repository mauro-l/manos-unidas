import api from "./api.js";

export const getLocationById = async (id) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token no encontrado en localStorage");
    }
    const response = await api.get("/ubicaciones/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const putAprobate = async (voluntarioId, actividadId, estado) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token no encontrado en localStorage");
    }
    const response = await api.put(
      "/inscripciones",
      {
        voluntario_id: voluntarioId,
        actividad_id: actividadId,
        estado: estado,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};
