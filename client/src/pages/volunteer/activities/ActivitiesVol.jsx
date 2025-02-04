import Banner from "@/components/layout/Banner.jsx";
import ActivitiesListVol from "@/components/modules/activities/ActivitiesListVol.jsx";
import Footer from "../../../components/layout/Footer.jsx";

const ActivitiesVol = () => {
  return (
    <div className="flex flex-col justify-center ">
      <Banner color="bg-primary-focus">
        <h3 className="text-3xl leading-7">
          Explora las oportunidades de voluntariado que tenemos para ti
        </h3>
      </Banner>
      <div className="p-4 lg:flex">
        <ActivitiesListVol></ActivitiesListVol>
      </div>
      <Footer/>
    </div>
  );
};

export default ActivitiesVol;

