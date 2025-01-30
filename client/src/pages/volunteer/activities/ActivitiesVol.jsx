import Banner from "@/components/layout/Banner.jsx";
import ActivitiesListVol from "@/components/modules/activities/ActivitiesListVol.jsx";

const ActivitiesVol = () => {
  return (
    <div className="flex flex-col justify-center ">
      <Banner color="bg-red-500">
        <h3 className="text-3xl leading-7">
          Explora las oportunidades de voluntariado que tenemos para ti
        </h3>
      </Banner>
      <div className="p-4">
        <ActivitiesListVol></ActivitiesListVol>
      </div>
    </div>
  );
};

export default ActivitiesVol;

