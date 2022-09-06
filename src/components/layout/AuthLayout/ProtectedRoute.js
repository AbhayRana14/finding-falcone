import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ token, redirectPath = "/" }) => {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
