import EventCard from "../../common/cards/EventCard.jsx";

const InscriptionsListVol = ({ inscriptions }) => {
  return (
    <div className="mb-4 space-y-2 lg:flex lg:flex-row lg:w-full lg:gap-2 lg:flex-wrap lg:space-y-0 lg:mx-auto ">
      {inscriptions.map((inscription) => (
        <EventCard
          key={inscription.actividad._id}
          activityId={inscription.actividad._id}
          estado={inscription.estado}
        />
      ))}
    </div>
  );
};

export default InscriptionsListVol;

