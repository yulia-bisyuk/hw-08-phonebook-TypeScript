import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import RegistrationPage from 'pages/RegistrationPage';
import Layout from 'components/Layout';

export const App = () => {

  return (
    <Suspense fallback={<BeatLoader color='blue' loading={true} size={10} margin={2} />}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* public route */}
        <Route  path='register' element={<RegistrationPage />} />
        
          {/* public route */}
        <Route path='login' element={<LoginPage />} /> 

          {/* private route */}
        <Route path='contacts' element={<ContactsPage />} />
    
        </Route>
        

      </Routes>
    </Suspense>
  );
};
