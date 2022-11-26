import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Layout from '../layout';
import Home from '../pages/home/Home';
import NotFound from './../pages/notFound/NotFound';
import Login from '../pages/login/Login';
import auth from '../store/auth';
import ServiceFree from './../pages/serviceFree/ServiceFree';
import ServiceVip from '../pages/serviceVip/serviceVip';
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

              {/* SERVICES ROUTE */}
              <Route path="/services">
                  <Route index element={<ServiceFree />} />
                  <Route path="premium" element={<ServiceVip />} />
              </Route>

              <Route path="*" name="notFound" element={<NotFound />} />
          </Route>
        </Routes>
  );
};

export default Navigation;
