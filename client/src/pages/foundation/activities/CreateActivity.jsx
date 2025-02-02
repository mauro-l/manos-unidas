import BtnBack from "@/components/common/buttons/BtnBack.jsx";
import Banner from "@/components/layout/Banner.jsx";
import CardWhite from "../../../components/common/cards/CardWhite.jsx";
import AddActivities from "../../../components/modules/activities/AddActivities.jsx";

function CreateActivity() {
  return (
    <div>
      <Banner>
        <BtnBack>Volver</BtnBack>
        <h3>Agrega toda la información sobre tu voluntariado</h3>
      </Banner>
      <div className="px-4 pb-10 space-y-6">
        <CardWhite>
          Una vez publicada tu actividad, será visible para cualquier voluntario
          que quiera inscribirse. Recibirás una notificación cada vez que
          alguien se inscriba para que compruebes su perfil.
        </CardWhite>

        <AddActivities />
      </div>
    </div>
  );
}

export default CreateActivity;
