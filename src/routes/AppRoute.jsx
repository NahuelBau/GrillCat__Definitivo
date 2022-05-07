import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Login } from "../pages/Login/Login";
import { startChecking } from "../actions/auth/auth";
import { PrincipalRouter } from "./PrincipalRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const {checking, uid} = useSelector( state => state.auth );

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch, uid]);


  if (checking) {
    return <div>Cargando</div>;
  };


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute isAuth={uid}>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoute isAuth={uid}>
                <PrincipalRouter />
              </PrivateRoute>
            }
          />

          

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export const PublicRoute = ({ isAuth, children }) => {
  return isAuth ? <Navigate to="/" /> : children;
};

export const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" />;
};
