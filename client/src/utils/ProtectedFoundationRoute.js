import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

const ProtectedFoundationRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user || user.role !== "foundation") {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default ProtectedFoundationRoute;
