import { useState, useEffect } from "react";
import { getInscriptionByActivityId } from "../services/inscriptionsService.js";
import { useParams } from "react-router-dom";

const useActivityInscriptions = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInscriptions = async () => {
      try {
        setLoading(true);

        const allInscriptions = await getInscriptionByActivityId(id);

        // Verificar si data es un array antes de establecerlo
        if (Array.isArray(allInscriptions)) {
          setInscriptions(allInscriptions);
        } else {
          setInscriptions([]);
        }
      } catch (error) {
        if (error === "No hay inscripciones para esta actividad") {
          setInscriptions([]);
          setError(null);
        } else {
          // Para otros errores, establecer el error
          setError(error);
          setInscriptions([]);
        }
        setError(error.response ? error.response.data.message : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInscriptions();
  }, [id]);

  return { inscriptions, loading, error };
};

export default useActivityInscriptions;

/* import { useEffect, useState } from "react";
import { getActivity } from "../services/actividadesService.js";

const useActivityInscriptions = (activityId) => {
  const [activities, setActivities] = useState([]);
  const [filteredActivity, setFilteredActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const res = await getActivity();
        setActivities(res);

        // Si hay un activityId, filtramos la actividad específica
        if (activityId) {
          const found = res.find((activity) => activity.id === activityId);
          setFilteredActivity(found || null);
        }
      } catch (error) {
        setError("Error fetching activities: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [activityId]); // El efecto se ejecutará cuando cambie el activityId

  return {
    loading,
    activities,
    filteredActivity, // Retornamos la actividad filtrada si hay un ID
    error,
  };
};

export default useActivityInscriptions; */

