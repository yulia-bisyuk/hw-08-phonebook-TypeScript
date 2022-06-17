import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { Note } from 'pages/ContactsPage/ContactsPage.styled';
// import { useFetchCurrentUserQuery } from '../../redux/AuthOperations/AuthOperations';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const Layout = lazy(() => import('components/Layout'));

export const App = () => {
 

 
//  useFetchCurrentUserQuery();


  return (
    <Suspense fallback={<Note><BeatLoader color='#0c005a' loading={true} size={20} margin={2} /></Note>}>
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
