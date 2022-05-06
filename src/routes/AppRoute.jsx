import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Login } from "../pages/Login/Login";
import { Home } from "./../pages/Home/Home";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/auth/auth";
import { PrincipalRouter } from "./PrincipalRouter";
import { Navbar } from './../Components/ui/Navbar';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user?.uid) {
  //       // dispatch(loginAction(user.uid, user.displayName));
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }

  //     setChecking(false);
  //   });
  // }, [setChecking, setIsLoggedIn]);



  if (checking) {
    return <div>Cargando</div>;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute isAuth={isLoggedIn}>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoute isAuth={isLoggedIn}>
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
