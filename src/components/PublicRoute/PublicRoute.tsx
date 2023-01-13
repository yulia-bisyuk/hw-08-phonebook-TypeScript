import { useAppSelector } from 'hooks';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authentication/authSelectors';
import { RoutesPropsType } from 'types/types';

const PublicRoute = ({ children, restricted, navigateTo }: RoutesPropsType) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to={navigateTo} /> : children}</>;
};

export default PublicRoute;
