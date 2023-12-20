import { Navigate, Outlet } from "react-router-dom";
import { getTokenData } from "../services/authService";

const PrivateRoute = () => {
  const token = getTokenData();

  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
