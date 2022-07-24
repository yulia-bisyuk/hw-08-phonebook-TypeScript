import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { Note } from 'pages/ContactsPage/ContactsPage.styled';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/authentication/authSelectors';
import { useFetchCurrentUserQuery } from 'redux/authentication/authApi';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const Layout = lazy(() => import('components/Layout'));

export const App = () => {
  const token = useSelector(getToken);

  //після логауту робиться ще один фетч за користувачем, хоча токена вже нема,
  // і { skip: token === null } чомусь не працює. Не можу вирішити цю проблему((
  useFetchCurrentUserQuery(token, { skip: token === null });

  return (
    <Suspense
      fallback={
        <Note>
          <BeatLoader color="#0c005a" loading={true} size={20} margin={2} />
        </Note>
      }
    >
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />

          <Route
            exact
            path="register"
            element={
              <PublicRoute restricted navigateTo="/contacts">
                <RegistrationPage />
              </PublicRoute>
            }
          />

          <Route
            exact
            path="login"
            element={
              <PublicRoute restricted navigateTo="/contacts">
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Suspense>
  );
};
