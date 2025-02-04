import useActivitiesByFndId from "../../../hooks/useActivitiesByFndId.js";
import MiniCardFnd from "../../common/cards/MiniCardFnd.jsx";
import CardListSkt from "../../common/skeleton/CardListSkt.jsx";

function ActivitiesListFnd() {
  const { loading, activity } = useActivitiesByFndId("FND002");

  return (
    <div className="space-y-2">
      {loading ? (
        <CardListSkt />
      ) : (
        activity &&
        activity.map((activity) => (
          <MiniCardFnd key={activity.id} activity={activity} />
        ))
      )}
    </div>
  );
}

export default ActivitiesListFnd;
