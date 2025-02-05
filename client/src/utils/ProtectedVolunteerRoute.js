import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

const ProtectedVolunteerRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user || user.role !== "volunteer") {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedVolunteerRoute;
