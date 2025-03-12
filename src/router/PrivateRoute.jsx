import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
