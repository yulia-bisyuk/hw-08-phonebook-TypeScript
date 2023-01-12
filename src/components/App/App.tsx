import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query/react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Note } from 'pages/ContactsPage/ContactsPage.styled';
import { useAppSelector } from './hooks';
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
  const token = useAppSelector(getToken);

  useFetchCurrentUserQuery(token ?? skipToken);

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
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute restricted navigateTo="/contacts">
                <RegistrationPage />
              </PublicRoute>
            }
          />

          <Route
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
