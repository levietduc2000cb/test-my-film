import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContent } from "../context/AuthContext";

function ProtectedRoutes({ children }) {
  const { authState } = useContext(AuthContent);
  if (!authState.user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default ProtectedRoutes;
