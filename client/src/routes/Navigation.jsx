import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./index.routes.js";
import Home from "../pages/home/Home.jsx";
import RegisterFnd from "../pages/auth/RegisterFnd.jsx";
import RegisterVol from "../pages/auth/RegisterVol.jsx";
import FoundationProfile from "../pages/foundation/profile/FoundationProfile.jsx";
import EditProfileFnd from "../pages/foundation/profile/EditProfileFnd.jsx";
import ActivitiesVol from "../pages/volunteer/activities/ActivitiesVol.jsx";
import InscriptionsVol from "../pages/volunteer/activities/InscriptionsVol.jsx";
import LayoutsNav from "../components/layout/LayoutsNav.jsx";
import ProtectedRoute from "../components/modules/auth/ProtectedRoute.jsx";
import EditInfoFnd from "../pages/foundation/profile/EditInfoFnd.jsx";
import DashboardFnd from "../pages/foundation/DashboardFnd.jsx";
import ActivityManager from "../pages/foundation/activities/ActivityManager.jsx";
import ActivityDetailFnd from "../pages/foundation/activities/ActivityDetailFnd.jsx";
import ActivitiesDetailVol from "../pages/volunteer/activities/ActivitiesDetailVol.jsx";
import FoundationView from "../pages/volunteer/activities/FoundationView.jsx";
import VolunteerProfile from "../pages/volunteer/profile/VolunteerProfile.jsx";
import EditDataVol from "../pages/volunteer/profile/EditDataVol.jsx";
import EditProfileVol from "../pages/volunteer/profile/EditProfileVol.jsx";
import Notification from "../pages/notifications/Notification.jsx";
import VolunteerViewFnd from "../pages/foundation/activities/VolunteerViewFnd.jsx";
import ErrorPage from "../pages/notifications/errorPage.jsx";

const routes = createBrowserRouter([
  {
    element: <LayoutsNav />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.AUTH.REGISTER_VOLUNTEER,
        element: <RegisterVol />,
      },
      {
        path: ROUTES.AUTH.REGISTER_FOUNDATION,
        element: <RegisterFnd />,
      },
      {
        path: ROUTES.NOTIFICACIONES,
        element: <Notification />,
      },
      { path: ROUTES.VOLUNTEER.EXPLORAR, element: <ActivitiesVol /> },
      {
        path: ROUTES.VOLUNTEER.VER_ACTIVIDAD(),
        element: <ActivitiesDetailVol />,
      },
      {
        element: <ProtectedRoute allowedRoles={["fundacion"]} />,
        children: [
          { path: ROUTES.FOUNDATION.PERFIL, element: <FoundationProfile /> },
          { path: ROUTES.FOUNDATION.EDIT_PERFIL, element: <EditProfileFnd /> },
          { path: ROUTES.FOUNDATION.EDIT_INFO, element: <EditInfoFnd /> },
          { path: ROUTES.FOUNDATION.PUBLICACIONES, element: <DashboardFnd /> },
          {
            path: ROUTES.FOUNDATION.CREAR_PUBLICACIONES,
            element: <ActivityManager />,
          },
          {
            path: ROUTES.FOUNDATION.EDIT_PUBLICACIONES(),
            element: <ActivityManager />,
          },
          {
            path: ROUTES.FOUNDATION.DETALLE_PUBLICACIONES(),
            element: <ActivityDetailFnd />,
          },
          {
            path: ROUTES.FOUNDATION.PERFIL_VOLUNT(),
            element: <VolunteerViewFnd />,
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["voluntario"]} />,
        children: [
          {
            path: ROUTES.VOLUNTEER.INSCRIPCIONES,
            element: <InscriptionsVol />,
          },

          {
            path: ROUTES.VOLUNTEER.PERFIL_FOUNDATION(),
            element: <FoundationView />,
          },
          { path: ROUTES.VOLUNTEER.PERFIL, element: <VolunteerProfile /> },
          { path: ROUTES.VOLUNTEER.EDIT_DATOS, element: <EditDataVol /> },
          { path: ROUTES.VOLUNTEER.EDIT_PERFIL, element: <EditProfileVol /> },
          
        ],
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function Navigation() {
  return <RouterProvider router={routes} />;
}

export default Navigation;
