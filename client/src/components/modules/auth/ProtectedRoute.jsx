import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.js";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />; // Redirige a login si no está autenticado
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />; // Redirige a inicio si no tiene el rol adecuado
  }

  return <Outlet />; // Renderiza la ruta si cumple los requisitos
};

export default ProtectedRoute;
