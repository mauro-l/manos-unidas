import useActivities from "../../../hooks/useActivities.js";
import MiniCardFnd from "../../common/cards/MiniCardFnd.jsx";

function ActivitiesListFnd() {
  const { loading, activities } = useActivities();
  const currentActivities = activities.slice(0, 5);

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <div className="space-y-2">
      {currentActivities &&
        currentActivities.map((activity) => (
          <MiniCardFnd key={activity.id} activity={activity} />
        ))}
    </div>
  );
}

export default ActivitiesListFnd;
