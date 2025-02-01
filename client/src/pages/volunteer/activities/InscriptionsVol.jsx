import { useParams } from "react-router-dom";
import InscriptionListVol from "../../../components/modules/activities/InscriptionListVol.jsx";
import Banner from "../../../components/layout/Banner.jsx";

const InscriptionsVol = () => {
  const { id } = useParams();
  console.log(id);

  if (Number(id) > 10) {
    return <div className="text-orange-600"> error </div>;
  }

  return (
    <>
      <Banner>Revisa el estado de todas tus inscripciones a voluntariados</Banner>
      <InscriptionListVol />{" "}
      {Number(id) > 5 ? (
        <div className="text-5xl font-bold  text-green-900">
          {/*  mayor de 5  */}
          InscriptionsVol {id}{" "}
        </div>
      ) : Number(id) < 5 ? (
        <div className="text-5xl font-bold  text-red-900">
          {/* menor de 5  */}
          InscriptionsVol {id}{" "}
        </div>
      ) : Number(id) == 5 ? (
        <div className="text-5xl font-bold  text-blue-900">
          {" "}
          {/* = de 5  */}
          InscriptionsVol {id}{" "}
        </div>
      ) : (
        <div className="text-5xl font-bold  text-black">error{id} </div>
      )}{" "}
      {/* no existe  */}
    </>
  );
};

export default InscriptionsVol;
