import { Link, useParams } from "react-router-dom";
import Banner from "../../../components/layout/Banner.jsx";
import EventCard from "../../../components/common/cards/EventCard.jsx";


const InscriptionsVol = () => {
  const { id } = useParams();
  console.log(id);

  if (Number(id) > 10) {
    return <div className="text-orange-600"> error </div>;
  }



  

  return (
    <>
      <Banner>
        Revisa el estado de todas tus inscripciones a voluntariados
      </Banner>
      {Number(id) > 5 ? (








        <div>
          <div className="p-6 m-4 mb-4 -mt-8 rounded-lg bg-base-100">
            <p>
              Desde aquí podrás revisar todas los voluntariados en los que te
              has inscrito, ver las fechas de las actividades o cancelar tu
              inscripción de ser necesario.
            </p>
          </div>
          <div className="text-5xl font-bold  text-green-900">
            
            {id}{" "}
          </div>
        </div>








      ) : Number(id) < 5 ? (
        <div>
          <div className="p-6 m-4 mb-4 -mt-8 rounded-lg bg-warning">
            <p className="mb-4 text-warning-content">
              ¡Recuerda completar la información de tu perfil para para poder
              inscribirte en actividades!
            </p>
            <Link
              className="link  text-primary font-bold "
              to="/volunteer/profile/data"
            >
              Completar perfil
            </Link>
          </div>
          <div className="  text-2xl border-dashed rounded-lg border-2 border-red text-center m-4 mb-10">
            <p className="p-6 font-bold text-neutral">
              ¡Aún no te has inscrito a ningún voluntariado!
            </p>

            <Link to="/volunteer" className="btn gap-2 bg-primary roundedd-lg text-primary-content font-bold "> Explorar actividades publicadas</Link>

            <p className="text-5xl font-bold  text-red-900">
              {id} {/* menor de 5  */}
            </p>
            <EventCard/>
          </div>
        </div>





      ) : Number(id) == 5 ? (
        <div >
          <div className="m-4   -mt-8 text-2xl bg-neutral-content border-dashed rounded-lg border-2  text-center  mb-10">
          <p className="p-6 font-bold text-neutral ">
              ¡Aún no te has inscrito a ningún voluntariado!
            </p>
          <Link to="/volunteer" className="btn  gap-2 bg-primary roundedd-lg text-primary-content font-bold  "> Explorar actividades publicadas</Link>
            {/* = de 5  */}
             {" "}
          </div>
        </div>
      ) : (
        <div className="text-5xl font-bold  text-black">error{id} </div>
      )}{" "}
      {/* no existe  */}
    </>
  );
};

export default InscriptionsVol;
