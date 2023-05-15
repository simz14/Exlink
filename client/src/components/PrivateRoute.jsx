import React from "react";
import { Navigate } from "react-router-dom";
import { jwtData } from "../utils/jwtData";

export function PrivateRoute({ children }) {
  if (!jwtData()) {
    return <Navigate to="/login" />;
  }
  return children;
}
