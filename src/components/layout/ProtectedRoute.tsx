import { ReactNode } from "react";
import { useAppSelector } from "../../redux/features/hook";
import { useCurrentToken } from "../../redux/features/Auth/AuthSlice";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
