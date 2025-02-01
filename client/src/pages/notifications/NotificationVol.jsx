import CardWhite from "@/components/common/cards/CardWhite.jsx";
import Banner from "@/components/layout/Banner.jsx";
import CardNotification from "@/components/common/notifications/CardNotification.jsx";
//import EmptyNotification from "@/components/common/notifications/EmptyNotification.jsx";

function NotificationVol() {
  return (
    <div>
      <Banner>Notificaciones</Banner>
      <div className="px-4">
        <CardWhite>
          Entérate de cualquier novedad de tus inscripciones y voluntariados
          activos.
        </CardWhite>
        {/* <EmptyNotification /> */}
        <div className="flex flex-col gap-2 ">
          <CardNotification />
          <CardNotification />
          <CardNotification />
          <CardNotification />
        </div>
      </div>
    </div>
  );
}

export default NotificationVol;
