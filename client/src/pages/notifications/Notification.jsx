import CardWhite from "@/components/common/cards/CardWhite.jsx";
import Banner from "@/components/layout/Banner.jsx";
import CardNotification from "@/components/common/cards/CardNotification.jsx";
import Footer from "../../components/layout/Footer.jsx";

function Notification() {
  return (
    <div>
      <Banner>Notificaciones</Banner>
      <div className="px-4 lg:container lg:mx-auto lg:pb-32">
        <CardWhite>
          Entérate de cualquier novedad de tus inscripciones y voluntariados
          activos.
        </CardWhite>
        <div className="flex flex-col gap-2 mb-4 ">
          <CardNotification />
          <CardNotification />
          <CardNotification />
          <CardNotification />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Notification;
