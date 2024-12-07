import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user && user?.email) {
    return children;
  }
  return <Navigate to={`/login`}></Navigate>;
};

export default PrivetRoute;
