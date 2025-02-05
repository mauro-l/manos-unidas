import { useState, useEffect } from "react";

export const useSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/data/lista-habilidades-db.json");
        const data = await response.json();
        setSkills(data);
      } catch (err) {
        console.error("Error cargando habilidades:", err);
        setError("Error al cargar las habilidades");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
};
