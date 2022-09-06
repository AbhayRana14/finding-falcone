import { Outlet, Navigate } from "react-router-dom";

export const PublicRoute = ({ token, redirectPath = "/home" }) => {
  if (token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
