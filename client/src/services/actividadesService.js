import api from "./api";

export const getActivity = async () => {
  try {
    const response = await api.get("/actividades");
    return response.data.actividades;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const postActivity = async ({ body }) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token no encontrado en localStorage");
    }

    const response = await api.post("/actividades", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const getActivityById = async (id) => {
  try {
    const response = await api.get("/actividades/" + id);
    console.log(response);

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

export const getActivityByFundationId = async (id) => {
  try {
    const response = await api.get("/actividades/fundacion/" + id);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : error.message;
  }
};

