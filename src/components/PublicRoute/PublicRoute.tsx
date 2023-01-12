// import { useSelector } from 'react-redux';
import { useAppSelector } from 'components/App/hooks';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from 'redux/authentication/authSelectors';

export default function PublicRoute({ children, restricted, navigateTo }) {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={navigateTo} /> : children;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool,
  navigateTo: PropTypes.string,
};
