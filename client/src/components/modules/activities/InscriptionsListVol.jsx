
import useInscription from "../../../hooks/useInscription.js";
import EventCard from "../../common/cards/EventCard.jsx";

const InscriptionsListVol = () => {
  

  const { loading, error, inscriptions } = useInscription("VOL001");

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;
  console.log(inscriptions);

  return (
    
    <div className="space-y-2  " >
      {inscriptions.map((inscription,index) => (
        <EventCard
          key={index}
          activityId={inscription.actividad_id}
          estado={inscription.estado}
        />
      ))}
    </div>
  );
};

export default InscriptionsListVol;
