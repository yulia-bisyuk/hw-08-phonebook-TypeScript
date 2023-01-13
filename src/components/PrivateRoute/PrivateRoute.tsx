import { useAppSelector } from 'hooks';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authentication/authSelectors';
import { RoutesPropsType } from 'types/types';

const PrivateRoute = ({ children }: RoutesPropsType) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  return <>{isLoggedIn ? children : <Navigate to="/" />}</>;
};
export default PrivateRoute;
