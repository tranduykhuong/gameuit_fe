import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Layout from '../layout';
import Home from '../pages/home/Home';
import NotFound from './../pages/notFound/NotFound';
import Login from '../pages/login/Login';
import auth from '../store/auth';

const Navigation = () => {
  const authenticated = true;

  // console.log(auth.isLoginSuccess());

  return (
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          {/* AUTH ROUTE */}
          <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/home" />}>
              <Route path="/login" name="login" element={<Login />} />
              <Route path="/register" name="register" element={<NotFound />} />
          </Route>
          <Route path="/forgot" name="forgot" element={<NotFound />} />

          <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />

              {/* PROTECTED ROUTE */}
              <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
                  {/* USER ROUTE */}
                  <Route path="/profile" name="profile" element={<NotFound />} />
              </Route>

              {/* PRODUCT ROUTE */}
              <Route path="/products">
                  <Route index element={<NotFound />} />
                  <Route path=":id" element={<NotFound />} />
              </Route>

              <Route path="*" name="notFound" element={<NotFound />} />
          </Route>
        </Routes>
  );
};

export default Navigation;
