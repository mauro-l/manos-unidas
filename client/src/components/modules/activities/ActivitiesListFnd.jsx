//import useActivitiesByFndId from "../../../hooks/useActivitiesByFndId.js";
import MiniCardFnd from "../../common/cards/MiniCardFnd.jsx";
import CardListSkt from "../../common/skeleton/CardListSkt.jsx";

function ActivitiesListFnd({ loading, activity }) {
  //const { loading, activity } = useActivitiesByFndId("FND002");
 

  return (
    <div className="space-y-2 lg:flex lg:flex-wrap lg:space-y-0 lg:gap-4">
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
