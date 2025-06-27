import React from "react";
import ProductDetail from "../page/ProductDetail";
import Login from "../page/Login";
import { Navigate } from "react-router";

const PrivateRoute = ({ auth }) => {
  return auth == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
