import { useState, useEffect } from "react";
import { getLocationById } from "../services/locationService.js";

const useVolunteerLocation = (ubicacion) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Si ubicacion es un ID, hacemos la búsqueda
        if (typeof ubicacion === "string") {
          const locationData = await getLocationById(ubicacion);
          setLocation(locationData);
        } else {
          // Si ubicacion ya está poblado, lo establecemos directamente
          setLocation(ubicacion);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [ubicacion]);
  return { location, loading, error };
};

export default useVolunteerLocation;
