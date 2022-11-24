import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({
  isAllowed,
  redirectPath,
  children,
}) => ((isAllowed) ? children || <Outlet /> : <Navigate to={redirectPath} replace />);

PrivateRoute.propTypes = {
  isAllowed: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.element
};

PrivateRoute.defaultProps = {
  isAllowed: false,
  redirectPath: '/login',
  children: null,
};

export default PrivateRoute;
