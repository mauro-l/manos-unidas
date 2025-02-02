
import useInscription from "../../../hooks/useInscription.js";
import EventCard from "../../common/cards/EventCard.jsx";

const InscriptionsListVol = () => {
  

  const { loading, error, inscriptions } = useInscription("VOL001");

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;
  console.log(inscriptions);

  return (
    
    <div className="space-y-2 lg:flex lg:flex-row lg:w-full lg:gap-2 lg:flex-wrap lg:space-y-0 lg:mx-auto " >
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
