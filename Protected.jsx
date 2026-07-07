import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/" />;
}

export default Protected;