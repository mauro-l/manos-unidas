import Banner from "../../components/common/Banner.jsx";
import ActivitiesList from "../../components/features/activities/activitiesList.jsx";


const Activities = () => {
  return (
    <div className=" flex flex-col justify-center">
      <Banner>
        <h3 className="text-3xl leading-7">Explora las oportunidades de voluntariado que tenemos para ti</h3>
      </Banner>
      <div className="p-4">
        
        <ActivitiesList ></ActivitiesList>
      </div>
    </div>
  );
};

export default Activities;
