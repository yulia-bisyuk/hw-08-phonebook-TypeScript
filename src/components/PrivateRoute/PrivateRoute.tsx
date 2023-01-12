// import { useSelector } from 'react-redux';
import { useAppSelector } from 'components/App/hooks';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from 'redux/authentication/authSelectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
